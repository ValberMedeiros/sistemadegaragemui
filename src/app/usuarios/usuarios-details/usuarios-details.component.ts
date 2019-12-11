import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostoGraduacao, Role, Usuarios} from "../models/Usuarios.model";
import {UsuariosService} from "../usuarios.service";
import {PostoGraduacaoService} from "../posto-graduacao.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ActivatedRoute, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-usuarios-details',
  templateUrl: './usuarios-details.component.html',
  styleUrls: ['./usuarios-details.component.scss']
})
export class UsuariosDetailsComponent implements OnInit {

  usuarioForm: FormGroup;
  postoGraduacao: PostoGraduacao[] = [];
  role: Role[] = [];
  usuario: Usuarios;
  roleSelects: Role[];
  pgSelect: PostoGraduacao;

  constructor(
    private formBuilder: FormBuilder,
    private usuarioService: UsuariosService,
    private postoGraduacaoService: PostoGraduacaoService,
    private dialogRef: MatDialogRef<UsuariosDetailsComponent>,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public u: Usuarios
  ) {
    this.usuario = u;
  }
  ngOnInit() {
    this.postoGraduacaoService.getPostoGraduacao()
      .subscribe((pg) => {
          this.postoGraduacao = pg;
          console.log(pg)
        }
      );

    this.usuarioService.getRole()
      .subscribe( (roles) => {
        this.role = roles;
      });

    this.criarForm();
    this.obterDadosUsuario();
  }

  obterDadosUsuario() {
    this.usuarioService.buscarPorId(this.usuario)
      .subscribe(
        dados => {
          this.usuarioForm.get('id').setValue(dados.id);
          this.usuarioForm.get('identidade').setValue(dados.identidade);
          this.pgSelect = dados.postoGraduacao;
          this.roleSelects = dados.roles;
          this.usuarioForm.get('nomeCompleto').setValue(dados.nomeCompleto);
          this.usuarioForm.get('nomeDeGuerra').setValue(dados.nomeDeGuerra);
          this.usuarioForm.get('username').setValue(dados.username);
          this.usuarioForm.get('password').setValue(dados.password);
        },
        error => {
          const msg = 'Erro obtendo usuario';
          this.snackBar.open(msg, 'Erro', { duration: 3000 });
          this.router.navigate(['/']);
        }
      )
  }

  criarForm() {
    this.usuarioForm = this.formBuilder.group({
      id: [''],
      identidade: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(11)]],
      postoGraduacao: [[], [Validators.required]],
      nomeCompleto: ['', [Validators.required, Validators.minLength(10)]],
      nomeDeGuerra: ['', [Validators.required]],
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      roles: [[], [Validators.required]]
    });
  }

  compareWithFn(role1: Role, role2: Role) {
    return role1 && role2 ? role1.id === role2.id : role1 === role2;
  }

  compareWithPg(pg1: PostoGraduacao, pg2: PostoGraduacao) {
    return pg1 && pg2 ? pg1.postoGraduacao_id === pg2.postoGraduacao_id : pg1 === pg2;
  }

}
