
import { Pipe, PipeTransform } from '@angular/core';
import {StatusViatura} from "../../viaturas/models/status-viatura.enum";

@Pipe({
  name: 'statusViatura'
})
export class StatusViaturaPipe implements PipeTransform {

  transform(status: StatusViatura, args: any[]): string {
    return this.obetTexto(status);
  }

  obetTexto(status: StatusViatura): string {
    let statusDesc: string;
    switch (status) {
      case StatusViatura.BAIXADA:
          statusDesc = 'Baixada';
          break;
      case StatusViatura.MISSAO:
          statusDesc = 'Missão';
          break;
      case StatusViatura.PRONTA:
          statusDesc = 'Pronta';
          break;
      default:
          statusDesc = status;
    }
    return statusDesc;
  }

}
