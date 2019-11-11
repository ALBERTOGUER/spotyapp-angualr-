import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotyfiService {

  constructor( private http:HttpClient) { }


  private headers : HttpHeaders = new HttpHeaders({
    'Authorization' : 'Bearer BQDSGOA3S8UHBNAF7WSVkDA6b6kZsicB9PgCwQuNEN1LE449NXNyYRmC8kxcQ4YYV9JhU8CeCeg9qf_n_Qw'

  })

  private url:string="https://api.spotify.com/v1"

 

  public Getnewrelease(){

    return this.http.get(`${this.url}/browse/new-releases?country=MX&limit=9`,{headers:this.headers});

  }

  public searchdata(termino, type){

    termino = encodeURI(termino);

    
let urlsend:string=`${this.url}/search?q=${termino}&type=${type}&market=MX&limit=9`;

return this.http.get(urlsend,{headers:this.headers})
    
  }

  public getToptracksAtist(idartist){
    let urlSend = `${this.url}/artists/${idartist}/top-tracks?country=mx`;

    return this.http.get(urlSend,{headers:this.headers})
  }

  public getArtist(idartist){
    let urlSend = `${this.url}/artists/${idartist}`;

    return this.http.get(urlSend,{headers:this.headers})
  }
  
}
