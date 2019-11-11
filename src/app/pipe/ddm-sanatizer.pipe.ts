import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser'


@Pipe({
  name: 'ddmSanatizer'
})
export class DdmSanatizerPipe implements PipeTransform {


  constructor(private DomSanatizer: DomSanitizer) { }

  transform(value: any, url: string): any {
    console.log(value);
    console.log(url);


    let urlcreada = url + value;
    return this.DomSanatizer.bypassSecurityTrustResourceUrl(urlcreada);
  }

}
