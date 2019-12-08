import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostoGraduacaoMotorista} from "../../motoristas/models/PostoGraduacao.model";
import {PostoGraduacaoService} from "../../motoristas/posto-graduacao.service";
import {MotoristasService} from "../../motoristas/motoristas.service";
import {Router} from "@angular/router";
import {ViaturasService} from "../viaturas.service";
import {StatusMotorista} from "../../motoristas/models/status-motorista.enum";
import {StatusViatura} from "../models/status-viatura.enum";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Combustivel} from "../../motoristas/models/combustivel.enum";

@Component({
  selector: 'app-cadastro-viaturas',
  templateUrl: './cadastro-viaturas.component.html',
  styleUrls: ['./cadastro-viaturas.component.scss']
})
export class CadastroViaturasComponent implements OnInit {

  statusViaturasOptions = [];
  combustivelOptions = [];

  viaturaForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private viaturasService: ViaturasService,
    private router: Router,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.statusViaturasOptions = this.enumToArray(StatusViatura);
    this.combustivelOptions = this.enumToArray(Combustivel);

    this.viaturaForm = this.formBuilder.group({
      id: [''],
      placa: ['', [Validators.required]],
      renavan: ['', [Validators.required]],
      chassi: ['', [Validators.required]],
      modelo: ['', [Validators.required]],
      combustivel: ['', [Validators.required]],
      capacidadePassageiros: ['', [Validators.required]],
      quantidadeDePortas: ['', [Validators.required]],
      capacidadeDoTanque: ['', [Validators.required]],
      autonomia: ['', [Validators.required]],
      utilizacao: ['', [Validators.required]],
      statusViatura: ['', [Validators.required]],
      nee: ['',],
      eb: ['',]
    });
  }

  enumToArray(tipo): Object[] {
    return Object.keys(tipo)
      .map(key => ({ id: tipo[key], name: key}));
  }

  onSubmit() {
    this.viaturasService.cadastrar(this.viaturaForm.value)
      .subscribe( () => {
        const msg = 'Viatura cadastrada com sucesso!';
        this.snackBar.open(msg, 'Sucesso', { duration: 3000 });
        this.router.navigate(['/viaturas']);
      })
  }

  onUndo(){
    this.router.navigate(['/viaturas']);
  }
}
