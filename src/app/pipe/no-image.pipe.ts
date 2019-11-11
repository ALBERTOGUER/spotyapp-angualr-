import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImage'
})
export class NoImagePipe implements PipeTransform {

  transform(value: any): any {
    console.log(value);

    if(value=="null" || value == null){
      return "../../assets/img/noimagen.png"
    }
    
    return value;
  }

}
