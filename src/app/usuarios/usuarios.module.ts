import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from './../shared/shared.module';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "../material.module";
import {TextMaskModule} from "angular2-text-mask";
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";
import { AtualizarUsuariosComponent } from './atualizar-usuarios/atualizar-usuarios.component';
import {RolesPipe} from "../shared/pipes/roles.pipe";
import { UsuariosDetailsComponent } from './usuarios-details/usuarios-details.component';



@NgModule({
  declarations: [
    ListaUsuariosComponent,
    CadastroUsuariosComponent,
    AtualizarUsuariosComponent,
    RolesPipe,
    UsuariosDetailsComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule
  ],
  entryComponents: [
    AtualizarUsuariosComponent,
    UsuariosDetailsComponent
  ]
})
export class UsuariosModule { }
