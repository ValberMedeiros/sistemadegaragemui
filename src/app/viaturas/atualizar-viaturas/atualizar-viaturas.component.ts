import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ViaturasService} from "../viaturas.service";
import {Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {Viaturas} from "../models/Viaturas.model";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Motoristas} from "../../motoristas/models/Motoristas.model";
import {StatusViatura} from "../models/status-viatura.enum";
import {Combustivel} from "../../motoristas/models/combustivel.enum";

@Component({
  selector: 'app-atualizar-viaturas',
  templateUrl: './atualizar-viaturas.component.html',
  styleUrls: ['./atualizar-viaturas.component.scss']
})
export class AtualizarViaturasComponent implements OnInit {

  viaturaForm: FormGroup;
  viatura: Viaturas;

  statusViaturasOptions = [];
  combustivelOptions = [];

  constructor(
    private formBuilder: FormBuilder,
    private viaturasService: ViaturasService,
    private router: Router,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public m: Viaturas
) {
  this.viatura = m;
}

  ngOnInit() {
    this.statusViaturasOptions = this.enumToArray(StatusViatura);
    this.combustivelOptions = this.enumToArray(Combustivel);

    this.criaForm();
    this.obterDadosViatura();
  }

  criaForm() {
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

  obterDadosViatura() {
    this.viaturasService.buscarPorId(this.viatura.id)
      .subscribe(
        dados => {
          this.viaturaForm.get('id').setValue(dados.id);
          this.viaturaForm.get('placa').setValue(dados.placa);
          this.viaturaForm.get('renavan').setValue(dados.renavan);
          this.viaturaForm.get('chassi').setValue(dados.chassi);
          this.viaturaForm.get('modelo').setValue(dados.modelo);
          this.viaturaForm.get('combustivel').setValue(dados.combustivel);
          this.viaturaForm.get('capacidadePassageiros').setValue(dados.capacidadePassageiros);
          this.viaturaForm.get('quantidadeDePortas').setValue(dados.quantidadeDePortas);
          this.viaturaForm.get('capacidadeDoTanque').setValue(dados.capacidadeDoTanque);
          this.viaturaForm.get('autonomia').setValue(dados.autonomia);
          this.viaturaForm.get('utilizacao').setValue(dados.utilizacao);
          this.viaturaForm.get('statusViatura').setValue(dados.statusViatura);
          this.viaturaForm.get('nee').setValue(dados.nee);
          this.viaturaForm.get('eb').setValue(dados.eb);
        },
        error => {
          const msg = 'Erro obtendo viatura';
          this.snackBar.open(msg, 'Erro', { duration: 3000 });
          this.router.navigate(['/viaturas']);
        }
      );
  }

  enumToArray(tipo): Object[] {
    return Object.keys(tipo)
      .map(key => ({ id: tipo[key], name: key}));
  }

  onUpdate() {
    this.viaturasService.atualizar(this.viaturaForm.value)
      .subscribe(() => {
        const msg = 'Viatura atualizado com sucesso!';
        this.snackBar.open(msg, 'Sucesso', { duration: 3000 });
      });
  }

}
