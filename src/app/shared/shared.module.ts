import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMotoristaPipe } from './pipes/status-motorista.pipe';
import {CombustivelPipe} from "./pipes/combustivel.pipe";



@NgModule({
  declarations: [
    StatusMotoristaPipe,
    CombustivelPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusMotoristaPipe,
    CombustivelPipe
  ]
})
export class SharedModule { }
