import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {UsuariosService} from "../usuarios.service";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";
import {MatTableDataSource} from "@angular/material/table";
import {Usuarios} from "../models/Usuarios.model";
import {Motoristas} from "../../motoristas/models/Motoristas.model";
import {ConfirmDialog} from "../../motoristas/lista-motoristas/lista-motoristas.component";

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.scss']
})
export class ListaUsuariosComponent implements OnInit {

  dataSource: MatTableDataSource<Usuarios>;
  colunas: string[] = ['identidade', 'postoGraduacao', 'nomeCompleto', 'nomeDeGuerra',
    'username', 'options'];

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  public maskIdentidade = ['000000000-0'];

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private usuariosService: UsuariosService,
    private dialog: MatDialog
  ) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.usuariosService.listar()
      .subscribe(
        data => {
          const usuarios = data as Usuarios[];
          this.dataSource = new MatTableDataSource<Usuarios>(usuarios);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        },
        error => {
          const msg = 'Erro obtendo usuarios';
          this.snackBar.open(msg, 'Erro', { duration: 3000 });
        }
      );
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onDialogDelete(usuario: Usuarios) {
    const dialog = this.dialog.open(ConfirmDialog, {
      height: '150px',
      width: '310px'
    });
    dialog.afterClosed().subscribe(remover => {
      if (remover) {
        this.onDelete(usuario);
      }
    });
  }

  onDelete(usuario: Usuarios) {
    this.usuariosService.delete(usuario)
      .subscribe(() => {
        const msg = 'Usuário deletado com sucesso!';
        this.snackBar.open(msg, 'Sucesso', { duration: 3000 });
      },
      error1 => {
        const msg = error1.error;
        this.snackBar.open(msg, 'Erro', { duration: 5000 });
      }
      )
  }

}
