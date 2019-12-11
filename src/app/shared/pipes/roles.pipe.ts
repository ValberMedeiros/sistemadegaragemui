import { StatusMotorista } from './../../motoristas/models/status-motorista.enum';
import { Pipe, PipeTransform } from '@angular/core';
import {Role} from "../../usuarios/models/Usuarios.model";

@Pipe({
  name: 'roles'
})
export class RolesPipe implements PipeTransform {

  transform(role: Role, args: any[]): string {
    return this.obetTexto(role);
  }

  obetTexto(role: Role): string {
    let statusDesc: string;
    switch (role.nomeRole) {
      case 'ROLE_ADMIN':
        statusDesc = 'Administrador';
        break;
      case 'ROLE_USER':
          statusDesc = 'Usuário';
          break;
      case 'ROLE_ESCALANTE':
          statusDesc = 'Escalante';
          break;
      case 'ROLE_MECANICO':
          statusDesc = 'Mecanico';
          break;
      case 'ROLE_CHEFE':
          statusDesc = 'Chefe da Garagem';
          break;
      case 'ROLE_SCMT':
          statusDesc = 'Subcomandante';
          break;
      default:
          statusDesc = role.nomeRole;
    }
    return statusDesc;
  }

}
