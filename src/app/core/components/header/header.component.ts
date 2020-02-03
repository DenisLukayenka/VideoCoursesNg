import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() onSearchQueryChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSearch(query: string){
    this.onSearchQueryChange.emit(query);
  }
}
