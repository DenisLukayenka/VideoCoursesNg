import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VideoCoursesNg';

  searchQuery: string;

  onSearchQuery(query: string) {
    this.searchQuery = query;
  }
}
