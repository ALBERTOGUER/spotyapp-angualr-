import { Component, OnInit } from '@angular/core';
import { SpotyfiService } from '../../services/spotyfi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styles: []
})
export class ArtistComponent implements OnInit {

  public idArtist: string = "";
  public toptracks:any;
  public infoartist: any;

  constructor(private _spotifyService: SpotyfiService, private activatedRoute: ActivatedRoute) {
    this.idArtist = this.activatedRoute.snapshot.paramMap.get('id');

    this._spotifyService.getToptracksAtist(this.idArtist).subscribe((data:any) =>{
      console.log(data);

      this.toptracks = data.tracks;
      
    this._spotifyService.getArtist(this.idArtist).subscribe((dataartist) =>{
      console.log(dataartist);

      this.infoartist= dataartist;
      
    })
      
    });


  }

  ngOnInit() {
  }



}
