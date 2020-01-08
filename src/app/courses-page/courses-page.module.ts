import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlSectionComponent } from './control-section/control-section.component';
import { BreadcrumbsModule } from '../shared/breadcrumbs/breadcrumbs.module';
import { PageComponent } from './page/page.component';
import { CourseListComponent } from './course-list/course-list/course-list.component';
import { CourseListItemComponent } from './course-list/course-list-item/course-list-item.component';


@NgModule({
  declarations: [ControlSectionComponent, PageComponent, ControlSectionComponent, CourseListComponent, CourseListItemComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule
  ],
  exports: [
    PageComponent
  ]
})
export class CoursesPageModule { }
