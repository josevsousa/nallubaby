import { Component, OnInit } from '@angular/core';

import { ContatoService } from "../service/contato.service";
import { Form, Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  contatoForm: FormGroup;
  enviado: boolean = false;

  constructor(
    private contatoService: ContatoService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
        // valida o nosso formGroup contatoForm
        this.contatoForm = this.formBuilder.group({
          email: [null, [Validators.email, Validators.required] ],
          nome: [null, Validators.required ],
          message: [null, Validators.required ]
        })
  }
  ngSubmit(){
    //enviar o form Contato
    this.contatoService.addContato(this.contatoForm)
      .then(()=> {
        this.enviado = !this.enviado;
      })
      .catch((erro)=> {
        console.log('error')
    })

  }

  verificaValorTouched(campo){
    return !this.contatoForm.get(campo).valid && this.contatoForm.get(campo).touched;
  }
}
