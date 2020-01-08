import { Injectable } from '@angular/core';
import { ICourse } from './course.interface';
import { Course } from './course.model';
import { Time } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class CourseListService {

  courseList: ICourse[] = [
    new Course(1, "Webpack", new Date(1995, 11, 18), 77, "Entries and outputs; Multiple budles; Loaders; Plugins; Production configuration."),
    new Course(2, "AngularCLI", new Date(1995, 11, 18), 120, "ng new; ng generate; ng serve; AngularCLI workspace file schema."),
    new Course(3, "TypeScript", new Date(1995, 11, 18), 49, "TypeScript Configuration; TypeScript Typings; target; Installable typings files."),
    new Course(4, "Components", new Date(1995, 11, 18), 77, "Entries and outputs; Multiple budles; Loaders; Plugins; Production configuration."),
    new Course(5, "Lifecycle", new Date(1995, 11, 18), 120, "ng new; ng generate; ng serve; AngularCLI workspace file schema."),
    new Course(6, "Template DSL and data-binding", new Date(1995, 11, 18), 49, "TypeScript Configuration; TypeScript Typings; target; Installable typings files."),
    new Course(7, "Custom component", new Date(1995, 11, 18), 77, "Entries and outputs; Multiple budles; Loaders; Plugins; Production configuration.")
  ]

  constructor() { }

  getCourseList() {
    return this.courseList;
  }
}