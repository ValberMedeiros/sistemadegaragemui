import { ListaMotoristasComponent } from './motoristas/lista-motoristas/lista-motoristas.component';
import { CadastroMotoristasComponent } from './motoristas/cadastro-motoristas/cadastro-motoristas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AtualizarMotoristasComponent} from "./motoristas/atualizar-motoristas/atualizar-motoristas.component";


const routes: Routes = [
  { path: 'motoristas',  component: ListaMotoristasComponent},
  { path: 'atualizacao/:idmotorista', component: AtualizarMotoristasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
