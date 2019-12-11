import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostoGraduacaoService} from "../../motoristas/posto-graduacao.service";
import {Router} from "@angular/router";
import {UsuariosService} from "../usuarios.service";
import {PostoGraduacaoMotorista} from "../../motoristas/models/PostoGraduacao.model";
import {StatusMotorista} from "../../motoristas/models/status-motorista.enum";
import {PostoGraduacao, Role} from "../models/Usuarios.model";

@Component({
  selector: 'app-cadastro-usuarios',
  templateUrl: './cadastro-usuarios.component.html',
  styleUrls: ['./cadastro-usuarios.component.scss']
})
export class CadastroUsuariosComponent implements OnInit {

  usuarioForm: FormGroup;
  postoGraduacao: PostoGraduacao[] = [];
  roles: Role[] = [];

  public maskIdentidade = [ /[1-9]/, /\d/, /\d/, /\d/, /\d/, /\d/,  /\d/,  /\d/,  /\d/,'-', /\d/];

  constructor(
    private formBuilder: FormBuilder,
    private postoGraduacaoService: PostoGraduacaoService,
    private usuariosService: UsuariosService,
    private router: Router
  ) { }

  ngOnInit() {
    this.postoGraduacaoService.getPostoGraduacao()
      .subscribe((pg) => this.postoGraduacao = pg
      );

    this.usuariosService.getRole()
      .subscribe( (roles) => {
        this.roles = roles;
      });

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

  onSubmit() {
    this.usuariosService.cadastrar(this.usuarioForm.value)
      .subscribe(dados => {
        console.log(dados);
        this.router.navigate(['/usuarios']);
      });
  }

  onUndo(){
    this.router.navigate(['/usuarios']);
  }
}
