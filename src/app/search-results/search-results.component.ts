import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html'
})
export class SearchResultsComponent implements OnInit {

  constructor( private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getResults() {
    return this.apiService.gifs;
  }

}
