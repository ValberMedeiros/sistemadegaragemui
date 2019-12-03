import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusMotoristaPipe } from './pipes/status-motorista.pipe';
import { PtBrMatPaginatorIntl } from "./pt-br-mat-paginator-intl";



@NgModule({
  declarations: [
    StatusMotoristaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    StatusMotoristaPipe
  ]
})
export class SharedModule { }
