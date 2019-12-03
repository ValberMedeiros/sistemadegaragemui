import { MotoristasService } from './../motoristas.service';
import { Motoristas } from './../models/Motoristas.model';
import {  } from '@angular/material';
import {Component, Inject, OnInit, ViewChild} from '@angular/core';

import {
  MatTableDataSource,
  MatSnackBar,
  MatPaginator,
  MatSort,
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogRef
} from "@angular/material";
import {Router} from "@angular/router";
import {AtualizarMotoristasComponent} from "../atualizar-motoristas/atualizar-motoristas.component";

@Component({
  selector: 'app-lista-motoristas',
  templateUrl: './lista-motoristas.component.html',
  styleUrls: ['./lista-motoristas.component.scss']
})
export class ListaMotoristasComponent implements OnInit {

  dataSource: MatTableDataSource<Motoristas>;
  colunas: string[] = ['identidade', 'postoGraduacaoMotorista', 'nomeCompleto', 'nomeDeGuerra', 'statusMotorista', 'categoriaCNH', 'options'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private motoristasService: MotoristasService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.motoristasService.listar()
      .subscribe(
        data => {
          const motoristas = data as Motoristas[];
          this.dataSource = new MatTableDataSource<Motoristas>(motoristas);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        err => {
          const msg = 'Erro obtendo motoristas.';
          this.snackBar.open(msg, 'erro', { duration: 5000 });
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDialogDelete(motorista: Motoristas) {
    const dialog = this.dialog.open(ConfirmDialog, {
      height: '150px',
      width: '310px'
    });
    dialog.afterClosed().subscribe(remover => {
      if (remover) {
        this.onDelete(motorista);
      }
    });
  }

  onDelete(motorista: Motoristas) {
    this.motoristasService.deletar(motorista)
      .subscribe( () => {
          const msg = 'Motorista deletado com sucesso!';
          this.snackBar.open(msg, 'succeso',  { duration: 3000 });
          this.listar();
      });
  }

  onDialogUpdate(motorista: Motoristas) {
    const dialog = this.dialog.open(AtualizarMotoristasComponent, {
      height: '400px',
      width: '800px',
      data: motorista
    });
    dialog.afterClosed().subscribe(atualizar => {
      if (atualizar) {
        this.onUpdate(motorista);
      }
    });
  }

  onUpdate(motorista: Motoristas) {
    this.motoristasService.atualizar(motorista)
      .subscribe(() => {
        const msg = 'Motorista atualizado com sucesso!';
        this.snackBar.open(msg, 'Sucesso', { duration: 3000 });
        this.listar();
      });
  }
}

@Component({
  selector: 'confirm-dialog',
  template: `
    <h1 mat-dialog-title> Deseja remover o motorista? </h1>
    <div mat-dialog-actions fxLayout="row" fxLayoutAlign="center center">
      <button mat-button [mat-dialog-close]="false" tabindex="-1">
        Não
      </button>
      <button mat-button color="warn" [mat-dialog-close]="true" tabindex="2">
        Sim
      </button>
    </div>
  `
})
export class ConfirmDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }
}
