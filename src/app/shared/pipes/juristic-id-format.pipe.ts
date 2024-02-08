import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'juristicIDFormat',
  standalone: true
})
export class JuristicIDFormatPipe implements PipeTransform {

  transform(value: string): string {
    return juristicIDFormat(value);
  }
  
}

function juristicIDFormat(juristicID: string): string {
  return juristicID.slice(0, 1)
    + '-'
    + juristicID.slice(1, 5)
    + '-'
    + juristicID.slice(5,10)
    + '-'
    + juristicID.slice(10,12)
    + '-'
    + juristicID.slice(10,13) ;
}
