import { StatusMotorista } from './../../motoristas/models/status-motorista.enum';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusMotorista'
})
export class StatusMotoristaPipe implements PipeTransform {

  transform(status: StatusMotorista, args: any[]): string {
    return this.obetTexto(status);
  }

  obetTexto(status: StatusMotorista): string {
    let statusDesc: string;
    switch (status) {
      case StatusMotorista.ATESTADO:
        statusDesc = 'Atestado';
        break;
      case StatusMotorista.DISPENSADO:
          statusDesc = 'Dispensado';
          break;
      case StatusMotorista.FERIAS:
          statusDesc = 'Férias';
          break;
      case StatusMotorista.MISSAO:
          statusDesc = 'Missão';
          break;
      case StatusMotorista.PRONTO:
          statusDesc = 'Pronto';
          break;
      default:
          statusDesc = status;
    }
    return statusDesc;
  }

}
