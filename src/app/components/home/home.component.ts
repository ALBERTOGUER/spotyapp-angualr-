import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  public newreleases:Array<any>=[];

  constructor( private _spotifyService: SpotyfiService) {

    this._spotifyService.Getnewrelease().subscribe((releases:any)=>{

      this.newreleases = releases.albums.items;
      console.log(this.newreleases);
      
      

    })

    
   }

  ngOnInit() {
  }

}
