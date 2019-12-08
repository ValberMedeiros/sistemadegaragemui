import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PostoGraduacaoService} from "../posto-graduacao.service";
import {MotoristasService} from "../motoristas.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PostoGraduacaoMotorista} from "../models/PostoGraduacao.model";
import {Motoristas} from "../models/Motoristas.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {StatusMotorista} from "../models/status-motorista.enum";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-atualizar-motoristas',
  templateUrl: './atualizar-motoristas.component.html',
  styleUrls: ['./atualizar-motoristas.component.scss']
})
export class AtualizarMotoristasComponent implements OnInit {

  statusMotoristasOptions = [];
  categoriasCNH: string[] = ['A', 'B', 'C', 'D', 'E', 'AB', 'AC', 'AD', 'AE'];

  motoristaForm: FormGroup;
  postoGraduacao: PostoGraduacaoMotorista[] = [];

  motorista: Motoristas;

  constructor(
    private formBuilder: FormBuilder,
    private motoristasService: MotoristasService,
    private postoGraduacaoService: PostoGraduacaoService,
    private dialogRef: MatDialogRef<AtualizarMotoristasComponent>,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public m: Motoristas
  ) {
    this.motorista = m;
  }

  ngOnInit() {
    this.statusMotoristasOptions = this.enumToArray();
    this.postoGraduacaoService.getPostoGraduacao()
      .subscribe((pg) => this.postoGraduacao = pg
      );
    this.criarForm();
    this.obterDadosMotorista();
  }

  obterDadosMotorista() {
    this.motoristasService.buscarPorId(this.motorista.id)
      .subscribe(
        dados => {
          this.motoristaForm.get('id').setValue(dados.id);
          this.postoGraduacao.push(dados.postoGraduacaoMotorista);
          this.motoristaForm.get('identidade').setValue(dados.identidade);
          this.motoristaForm.get('nomeCompleto').setValue(dados.nomeCompleto);
          this.motoristaForm.get('nomeDeGuerra').setValue(dados.nomeDeGuerra);
          this.motoristaForm.get('statusMotorista').setValue(dados.statusMotorista);
          this.motoristaForm.get('categoriaCNH').setValue(dados.categoriaCNH);
          this.motoristaForm.get('postoGraduacaoMotorista').setValue(dados.postoGraduacaoMotorista);
        },
        error => {
          const msg = 'Erro obtendo motorista';
          this.snackBar.open(msg, 'Erro', { duration: 3000 });
          this.router.navigate(['/']);
        }
      );
  }

  criarForm() {
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

  enumToArray(): Object[] {
    return Object.keys(StatusMotorista)
      .map(key => ({ id: StatusMotorista[key], name: key}));
  }

  onUpdate() {
    console.log(this.motoristaForm.value);
    this.motoristasService.atualizar(this.motoristaForm.value)
      .subscribe(() => {
        const msg = 'Motorista atualizado com sucesso!';
        this.snackBar.open(msg, 'Sucesso', { duration: 3000 });
      });
  }

}
