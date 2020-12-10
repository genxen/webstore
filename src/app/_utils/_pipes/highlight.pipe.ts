import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
// product.id | highlight:'[':')'   -->   [2)
export class HighlightPipe implements PipeTransform {

  transform(value: any, startCar:string = '{ - ', endCar:string = ' - }'): string {
    return startCar+value+endCar;
  }

}
