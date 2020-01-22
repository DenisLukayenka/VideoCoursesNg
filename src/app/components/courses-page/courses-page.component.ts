import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.css']
})
export class CoursesPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log("page ngOnInit");
  }

  ngOnChanges() {
    console.log("page ngOnChanges");
  }
}
