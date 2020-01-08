import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("page ngOnInit");
  }

  ngOnChanges() {
    console.log("page ngOnChanges");
  }
}
