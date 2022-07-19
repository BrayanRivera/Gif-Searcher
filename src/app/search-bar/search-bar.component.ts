import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html'
})
export class SearchBarComponent implements OnInit {

  constructor( private apiService: ApiService) { }

  @ViewChild('searchedTerm') searchedTerm!:ElementRef<HTMLInputElement>

  ngOnInit(): void {
  }

  termValue: string = ''; 
  
  search(term: string) {
    this.apiService.getApi(term);
    this.searchedTerm.nativeElement.value = '';
  }

}
