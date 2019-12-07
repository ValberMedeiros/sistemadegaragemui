import {Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MotoristasService} from "../../motoristas/motoristas.service";
import {Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Motoristas} from "../../motoristas/models/Motoristas.model";
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {ViaturasService} from "../viaturas.service";
import {Viaturas} from "../models/Viaturas.model";

@Component({
  selector: 'app-lista-viaturas',
  templateUrl: './lista-viaturas.component.html',
  styleUrls: ['./lista-viaturas.component.scss']
})
export class ListaViaturasComponent implements OnInit {

  dataSource: MatTableDataSource<Viaturas>;
  colunas: string[] = ['modelo', 'placa', 'capacidadePassageiros',
    'utilizacao', 'statusViatura', 'options'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(
    private snackBar: MatSnackBar,
    private viaturasService: ViaturasService,
    private router: Router,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.viaturasService.listar()
      .subscribe(
        data => {
            const viaturas = data as Viaturas[];
            this.dataSource = new MatTableDataSource<Viaturas>(viaturas);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
        },
        error => {
          const msg = 'Erro obtendo motoristas';
          this.snackBar.open(msg, 'Erro', { duration: 3000 });
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDialogDelete(viatura: Viaturas) {
    const dialog = this.dialog.open(ConfirmDialog, {
      height: '150px',
      width: '310px'
    });
    dialog.afterClosed().subscribe(remover => {
      if (remover) {
        this.onDelete(viatura);
      }
    });
  }

  onDelete(viatura: Viaturas) {
    this.viaturasService.deletar(viatura)
      .subscribe( () => {
        const msg = 'Viatura deletada com sucesso!';
        this.snackBar.open(msg, 'succeso',  { duration: 3000 });
        this.listar();
      })
  }
}

@Component({
  selector: 'confirm-dialog',
  template: `
    <h1 mat-dialog-title> Deseja remover a viatura? </h1>
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
