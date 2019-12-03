import { RouterModule, Routes } from '@angular/router';
import { PtBrMatPaginatorIntl } from './../shared/pt-br-mat-paginator-intl';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroMotoristasComponent } from './cadastro-motoristas/cadastro-motoristas.component';
import { MaterialModule } from "../material.module";

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {ConfirmDialog, ListaMotoristasComponent} from './lista-motoristas/lista-motoristas.component';
import { MatTableModule, MatPaginatorIntl } from '@angular/material';
import { CdkColumnDef } from '@angular/cdk/table';
import { AtualizarMotoristasComponent } from './atualizar-motoristas/atualizar-motoristas.component';

const appRouter: Routes = [
  {path: 'motoristas/cadastro', component: CadastroMotoristasComponent}
]

@NgModule({
  declarations: [
    CadastroMotoristasComponent,
    ListaMotoristasComponent,
    ConfirmDialog,
    AtualizarMotoristasComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    MatTableModule,
    RouterModule.forChild(appRouter)
  ],
  providers: [
    CdkColumnDef,
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ],
  entryComponents: [
    ConfirmDialog,
    AtualizarMotoristasComponent
  ]
})
export class MotoristasModule { }
