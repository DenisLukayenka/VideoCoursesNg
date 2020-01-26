import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { ControlSectionComponent } from './components/control-section/control-section.component';
import { CourseListComponent } from './components/course-list/course-list.component';
import { CourseListItemComponent } from './components/course-list-item/course-list-item.component';
import { SearchComponent } from './components/search/search.component';
import { DateRelevantDirective } from './directives/date-relevant.directive';
import { TimePipe } from './pipes/time.pipe';



@NgModule({
  declarations: [
    BreadcrumbComponent,
    ControlSectionComponent,
    CourseListComponent,
    CourseListItemComponent,
    SearchComponent,
    DateRelevantDirective,
    TimePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BreadcrumbComponent,
    ControlSectionComponent,
    CourseListComponent,
    CourseListItemComponent,
    SearchComponent
  ]
})
export class SharedModule { }
