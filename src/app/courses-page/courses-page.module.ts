import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlSectionComponent } from './control-section/control-section.component';
import { BreadcrumbsModule } from '../shared/breadcrumbs/breadcrumbs.module';
import { PageComponent } from './page/page.component';
import { CourseListModule } from '../course-list/course-list.module';



@NgModule({
  declarations: [ControlSectionComponent, PageComponent, ControlSectionComponent],
  imports: [
    CommonModule,
    BreadcrumbsModule,
    CourseListModule
  ],
  exports: [
    PageComponent
  ]
})
export class CoursesPageModule { }
