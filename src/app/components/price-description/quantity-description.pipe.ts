import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'quantityDescription',
})
export class QuantityDescriptionPipe implements PipeTransform {

  transform(quantity: number, text = ''): string {
    console.log('chamou o pipe')
    if (quantity === 0) {
      return 'Estoque indisponível!!' + text;
    }
    if (quantity === 1) {
      return 'Somente um em estoque!!' + text;
    }

    return `${quantity} disponíveis ${text}`;
  }

}
