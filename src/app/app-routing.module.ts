import { NgModule } from '@angular/core';

import { ListaMotoristasComponent } from './motoristas/lista-motoristas/lista-motoristas.component';
import { Routes, RouterModule } from '@angular/router';
import {AtualizarMotoristasComponent} from './motoristas/atualizar-motoristas/atualizar-motoristas.component';
import {ListaViaturasComponent} from './viaturas/lista-viaturas/lista-viaturas.component';
import {CadastroViaturasComponent} from "./viaturas/cadastro-viaturas/cadastro-viaturas.component";


const routes: Routes = [
  { path: 'motoristas',  component: ListaMotoristasComponent},
  { path: 'atualizacao/:idmotorista', component: AtualizarMotoristasComponent },

  { path: 'viaturas', component: ListaViaturasComponent },
  { path: 'viaturas/cadastro', component: CadastroViaturasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
