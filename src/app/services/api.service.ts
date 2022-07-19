import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( private http: HttpClient) { }

  gifs : any[] = [];
  private apiKey = 'TLxpCGdoWjfKKhgK9vl3KBJsbqudRc6b';

  getApi( term:string) {
    if (term) {
      this.http.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&limit=12&q=${term}`).subscribe( (result:any) => {
        this.gifs = result.data;
      });
    }
  }
}
