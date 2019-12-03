import { PostoGraduacaoMotorista } from './PostoGraduacao.model';


export interface Motoristas {
  id: number;
  identidade: string;
  postoGraduacaoMotorista: PostoGraduacaoMotorista;
  nomeCompleto: string;
  nomeDeGuerra: string;
  statusMotorista: string;
  categoriaCNH?: any;
}
