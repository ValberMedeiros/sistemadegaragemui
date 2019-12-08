import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaUsuariosComponent } from './lista-usuarios/lista-usuarios.component';
import {HttpClientModule} from "@angular/common/http";
import {MaterialModule} from "../material.module";
import {TextMaskModule} from "angular2-text-mask";



@NgModule({
  declarations: [ListaUsuariosComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MaterialModule,
    TextMaskModule
  ]
})
export class UsuariosModule { }
