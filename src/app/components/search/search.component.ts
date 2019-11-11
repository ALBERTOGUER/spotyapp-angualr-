import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  public searchFilter:Array<string> = ['track', 'artist'];

  public searchresults:any = [];

  

  constructor( private spotifyservice: SpotyfiService, private router:Router) { }

  ngOnInit() {
  }

  search(filter,termino){
    if(filter == 'null' || termino == "" || termino ==" ") return
    console.log("sdfds");

    this.spotifyservice.searchdata(termino,filter).subscribe((data:any)=>{
      if( data.tracks){
        this.searchresults = data.tracks.items;
       
      }else{
        this.searchresults = data.artists.items;
       
      }
      console.log(this.searchresults);
      
     
      
      
    })
    
  }

   public GotoArtist(artistid){
   this.router.navigate(['/artist',artistid]);
    

  }

}
