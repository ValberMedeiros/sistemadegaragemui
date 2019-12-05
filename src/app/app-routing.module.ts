import { NgModule } from '@angular/core';

import { ListaMotoristasComponent } from './motoristas/lista-motoristas/lista-motoristas.component';
import { Routes, RouterModule } from '@angular/router';
import {AtualizarMotoristasComponent} from './motoristas/atualizar-motoristas/atualizar-motoristas.component';
import {ListaViaturasComponent} from './viaturas/lista-viaturas/lista-viaturas.component';


const routes: Routes = [
  { path: 'motoristas',  component: ListaMotoristasComponent},
  { path: 'atualizacao/:idmotorista', component: AtualizarMotoristasComponent },

  { path: 'viaturas', component: ListaViaturasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
