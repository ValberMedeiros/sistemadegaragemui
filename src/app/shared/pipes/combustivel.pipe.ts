
import { Pipe, PipeTransform } from '@angular/core';
import {Combustivel} from "../../motoristas/models/combustivel.enum";

@Pipe({
  name: 'combustivelPipe'
})
export class CombustivelPipe implements PipeTransform {

  transform(combustivel: Combustivel, args: any[]): string {
    return this.obetTexto(combustivel);
  }

  obetTexto(combustivel: Combustivel): string {
    let combustivelDesc: string;
    switch (combustivel) {
      case Combustivel.ALCOOL:
          combustivelDesc = 'Alcool';
          break;
      case Combustivel.DIESEL:
        combustivelDesc = 'Diesel';
          break;
      case Combustivel.FLEX:
        combustivelDesc = 'Flex';
          break;
      case Combustivel.GASOLINA:
        combustivelDesc = 'Gasolina';
        break;
      default:
        combustivelDesc = combustivel;
    }
    return combustivelDesc;
  }

}
