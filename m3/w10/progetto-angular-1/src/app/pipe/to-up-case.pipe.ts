import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toUpCase'
})
export class ToUpCasePipe implements PipeTransform {

  transform(value: string) {
    let uppercase = value.toUpperCase();
    return uppercase;
  }

}
