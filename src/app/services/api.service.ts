import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, GIFResponse } from '../interfaces/gif.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  gifs : Gif[] = [];
  private apiKey = 'TLxpCGdoWjfKKhgK9vl3KBJsbqudRc6b';

  getApi( term:string) {
    if (term) {
      this.http.get<GIFResponse>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=12&q=${term}`).subscribe( result => {
        this.gifs = result.data;
      });
    }
  }
}
