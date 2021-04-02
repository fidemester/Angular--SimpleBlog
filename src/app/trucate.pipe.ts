import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trucate'
})
export class TrucatePipe implements PipeTransform {

  transform(value: any, number:number): any {
    if (value.length>number){
      return value.substring(0,number)+"...";}
    else{
      return value
    }
  }

}
