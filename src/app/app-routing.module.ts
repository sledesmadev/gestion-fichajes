import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuInicialComponent } from './components/menu-inicial/menu-inicial.component';
import { FichajesComponent } from './components/fichajes/fichajes.component';
import { ComisionesComponent } from './components/comisiones/comisiones.component';


const routes: Routes = [
  {
    path: '',
    component: MenuInicialComponent
  },
  {
    path: 'fichar',
    component: FichajesComponent
  },
  {
    path: 'comisiones',
    component: ComisionesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
