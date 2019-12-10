import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "../material.module";
import {TextMaskModule} from "angular2-text-mask";
import { CadastroUsuariosComponent } from './cadastro-usuarios/cadastro-usuarios.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [ListaUsuariosComponent, CadastroUsuariosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TextMaskModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ]
})
export class UsuariosModule { }
