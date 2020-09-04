import { Component, OnInit } from '@angular/core';
import {FormsModule, ReactiveFormsModule, NgForm} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { Fichaje } from 'src/app/models/fichaje';
import {FichajeService} from '../../services/fichaje.service'
import * as moment from 'moment';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxMaterialTimepickerTheme } from 'ngx-material-timepicker';
import { AngularFireList } from 'angularfire2/database';
@Component({
  selector: 'app-fichajes',
  templateUrl: './fichajes.component.html',
  styleUrls: ['./fichajes.component.css']
})
export class FichajesComponent implements OnInit {

  fichaje: Fichaje = new Fichaje

  constructor(private fichajeService: FichajeService, private _snackBar: MatSnackBar) { }

   startDate = new Date();
    minDate = new Date((new Date().getFullYear()-1), 0, 1);
   fichaje_date = new Date();
   fichaje_time = new Date().getHours()+":"+new Date().getMinutes();
   tipoFichaje: string;
   tiempoTrabajado: number;
  fichajesList: Fichaje[];

  //Estilos del reloj
   purpleTheme: NgxMaterialTimepickerTheme = {
    container: {
        bodyBackgroundColor: 'white',
        buttonColor: '#673AB7'
    },
    dial: {
        dialBackgroundColor: '#673ab7e6',
    },
    clockFace: {
        clockFaceBackgroundColor: '#673AB7',
        clockHandColor: '#8C73B9',
        clockFaceTimeInactiveColor: 'white'
    }
  };

  ngOnInit() {
    this.getFichajes();
  }

  altaFichaje(){
    this.fichaje.fechaFichaje = new Date(moment(this.fichaje_date,'YYYY-MM-DD').format("YYYY-MM-DD")+' '+this.fichaje_time);
    this.fichaje.tipoFichaje = this.tipoFichaje;
    this.fichajeService.insertFichaje(this.fichaje);
    this.openSnackBar('Fichaje añadido','Cerrar');
  }

  getFichajes(){
    this.tiempoTrabajado = 0;
    this.fichajeService.getFichaje().snapshotChanges()
    .subscribe(item => {
      this.tiempoTrabajado = 0;
      this.fichajesList = [];
       item.forEach(element =>{
         let x = element.payload.toJSON();
         x["$key"] = element.key;
         this.fichajesList.push(x as Fichaje);
       })
       this.fichajesList = this.fichajesList.splice(0).reverse();
        for(let x = 0; x < this.fichajesList.length ; x++){
          if(this.fichajesList[x+1] != undefined && this.fichajesList[x].tipoFichaje == 'S'){
            this.tiempoTrabajado = this.tiempoTrabajado + moment(this.fichajesList[x].fechaFichaje).diff(moment(this.fichajesList[x+1].fechaFichaje));
          }
        }


    })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

  getMinsFromMiliseconds(milliseconds:number){
    let minutes = Math.floor((milliseconds / (1000 * 60)) % 60);

    return (minutes < 10) ? "0" + minutes : minutes;
  }

  getHoursFromMiliseconds(milliseconds:number){
    let hours = Math.floor((milliseconds / (1000 * 60 * 60)) % 24);
    return hours;
  }

}
