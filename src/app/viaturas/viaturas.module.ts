import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroViaturasComponent } from './cadastro-viaturas/cadastro-viaturas.component';
import {MaterialModule} from '../material.module';
import {ConfirmDialog, ListaViaturasComponent} from './lista-viaturas/lista-viaturas.component';
import {SharedModule} from '../shared/shared.module';
import {StatusViaturaPipe} from '../shared/pipes/status-viatura.pipe';
import {CdkColumnDef} from '@angular/cdk/table';
import {PtBrMatPaginatorIntl} from '../shared/pt-br-mat-paginator-intl';
import {MatPaginatorIntl} from '@angular/material/paginator';
import {RouterModule, Routes} from '@angular/router';
import {MatTableModule} from '@angular/material/table';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AtualizarViaturasComponent } from './atualizar-viaturas/atualizar-viaturas.component';

const appRouter: Routes = [

];

@NgModule({
  declarations: [
    CadastroViaturasComponent,
    ListaViaturasComponent,
    StatusViaturaPipe,
    ConfirmDialog,
    AtualizarViaturasComponent
  ],
  exports: [

  ],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    RouterModule.forChild(appRouter),
    MatTableModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CdkColumnDef,
    { provide: MatPaginatorIntl, useClass: PtBrMatPaginatorIntl }
  ],
  entryComponents: [
    ConfirmDialog,
    AtualizarViaturasComponent
  ]
})
export class ViaturasModule { }
