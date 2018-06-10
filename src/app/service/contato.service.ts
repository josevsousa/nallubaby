import { Injectable } from '@angular/core';
// import { map } from "rxjs/operators";
import { Http } from "@angular/http";

import { AngularFirestore, AngularFirestoreDocument } from "angularfire2/firestore";
// import { Observable } from "rxjs";
import { Contato } from "../models/contato";


@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  constructor(
    private db: AngularFirestore
  ) { }

  //add contato
  addContato(form){
        // new id
        const uid = this.db.createId();

        // registro do firebase  
        const contatoRef: AngularFirestoreDocument<Contato> = this.db.doc(`contatos/${uid}`);
    
        const contatoData = {
          uid,
          email: form.value.email,
          nome: form.value.nome,
          message: form.value.message
        }
         
        return contatoRef.set(contatoData);
  }
}
