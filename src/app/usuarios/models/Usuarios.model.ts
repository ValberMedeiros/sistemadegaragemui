export interface PostoGraduacao {
  postoGraduacao_id: number;
  postoGrad: string;
}

export interface Role {
  id: number;
  nomeRole: string;
}

export interface Usuarios {
  id: number;
  identidade: string;
  postoGraduacao: PostoGraduacao;
  roles: Role[];
  nomeCompleto: string;
  nomeDeGuerra: string;
  username: string;
  password: string;
}
