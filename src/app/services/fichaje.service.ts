import { Injectable } from '@angular/core';

import {AngularFireDatabase, AngularFireList} from 'angularfire2/database'
import { Fichaje } from '../models/fichaje';

@Injectable({
  providedIn: 'root'
})

export class FichajeService {

  fichajeList: AngularFireList <any>;
  selectFichaje: Fichaje = new Fichaje ();


  constructor(private firebase: AngularFireDatabase) { }

  getFichaje()
  {

    let startDate = new Date();
    startDate.setHours(0,0,0,0);

    let endDate = new Date(startDate.getTime());
    endDate.setHours(23,59,59,999);
    
    return this.fichajeList = this.firebase.list('/fichajes', ref => ref.orderByChild('fechaFichaje').startAt(startDate.getTime()).endAt(endDate.getTime()));
    
    // return (Object as Fichaje).values(this.firebase.list('fichajes'));
  }

  insertFichaje(fichaje: Fichaje)
  {
     this.firebase.list('/fichajes').push({
       fechaFichaje: fichaje.fechaFichaje.getTime(),
       tipoFichaje: fichaje.tipoFichaje
    });
  }

  updateFichaje(fichaje:Fichaje)
  {
    this.fichajeList.update(fichaje.$key,{
      fechaFichaje: fichaje.fechaFichaje,
      tipoFichaje: fichaje.tipoFichaje
    })
  }

  deleteFichaje($key:string)
  {
    this.fichajeList.remove($key);
  }

}
