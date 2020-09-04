import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase
import {AngularFireModule} from 'angularfire2'
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';

import { FichajesComponent } from './components/fichajes/fichajes.component'

import {FichajeService} from './services/fichaje.service';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatNativeDateModule, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatRippleModule} from '@angular/material/core';
import {MatDatepickerModule, MatSliderModule, MatIconModule, MatButtonModule, MatCardModule,
   MatButtonToggleModule, MatSnackBar, MatSnackBarModule, MatListModule, MatPaginatorModule, MatTableModule,
    MatDividerModule, MatMenuModule} from '@angular/material';
import {MAT_FORM_FIELD_DEFAULT_OPTIONS} from '@angular/material/form-field';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import {ReversePipe} from './reversePipe';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ComisionesComponent } from './components/comisiones/comisiones.component';
import { AltaComponent } from './components/comisiones/alta/alta.component';

@NgModule({
  declarations: [
    AppComponent,
    FichajesComponent,
    MenuInicialComponent,
    ReversePipe,
    ComisionesComponent,
    AltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(environment.firebase),
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSliderModule,
    NgxMaterialTimepickerModule,
    MatButtonModule,
    MatCardModule,
    MatButtonToggleModule,
    MatSnackBarModule,
    MatIconModule,
    MatListModule,
    MatPaginatorModule,
    MatTableModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    MatRippleModule,
    MatDividerModule,
    MatMenuModule

  ],
  providers: [
    FichajeService,
    { provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: { appearance: 'fill' } },
    { provide: MAT_DATE_LOCALE, useValue: 'es-ES' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

