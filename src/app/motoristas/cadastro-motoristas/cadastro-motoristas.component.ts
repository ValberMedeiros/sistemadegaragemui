import { StatusMotorista } from './../models/status-motorista.enum';
import { MotoristasService } from './../motoristas.service';
import { PostoGraduacaoService } from './../posto-graduacao.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PostoGraduacaoMotorista } from '../models/PostoGraduacao.model';

import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-motoristas',
  templateUrl: './cadastro-motoristas.component.html',
  styleUrls: ['./cadastro-motoristas.component.scss']
})
export class CadastroMotoristasComponent implements OnInit {

  statusMotoristasOptions = [];
  categoriasCNH: string[] = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'];

  motoristaForm: FormGroup;
  postoGraduacao: PostoGraduacaoMotorista[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private postoGraduacaoService: PostoGraduacaoService,
    private motoristasService: MotoristasService,
    private router: Router
    ) { }

  ngOnInit() {

    this.statusMotoristasOptions = this.enumToArray();
    this.postoGraduacaoService.getPostoGraduacao()
      .subscribe((pg) => this.postoGraduacao = pg
    );

    this.motoristaForm = this.formBuilder.group({
      id: [''],
      identidade: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      postoGraduacaoMotorista: [[], [Validators.required]],
      nomeCompleto: ['', [Validators.required, Validators.minLength(10)]],
      nomeDeGuerra: ['', [Validators.required]],
      statusMotorista: ['', [Validators.required]],
      categoriaCNH: ['', [Validators.required]],
    });
  }

  onSubmit() {
    this.motoristasService.cadastrar(this.motoristaForm.value)
      .subscribe(dados => {
        console.log(dados);
        this.router.navigate(['/motoristas']);
      });
  }

  onUndo(){
    this.router.navigate(['/motoristas']);
  }

  enumToArray(): Object[] {
    return Object.keys(StatusMotorista)
      .map(key => ({ id: StatusMotorista[key], name: key}));
  }
}
