import { Component, OnInit } from '@angular/core';
import { ICourse } from '../course.interface';
import { CourseListService } from '../course-list.service';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {

  courseList: ICourse[] = [];

  constructor(private courseListService: CourseListService) { }

  ngOnInit() {
    this.courseList = this.courseListService.getCourseList();
    console.log("course list ngOnInit");
  }

  deleteCourse(courseId){
    console.log('deleted course with id=' + courseId);
  }

  ngOnChanges() {
    console.log("course list ngOnChanges");
  }
}
