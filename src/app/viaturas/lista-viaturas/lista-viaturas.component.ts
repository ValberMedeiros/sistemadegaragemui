import {Component, OnInit, ViewChild} from '@angular/core';
import {MotoristasService} from "../../motoristas/motoristas.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
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

}
