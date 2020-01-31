import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../../models/course.interface';
import { faStar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.css']
})
export class CourseListItemComponent implements OnInit {

  starIcon = faStar;

  @Input("course") course: ICourse;
  @Input("index") index: number;

  @Output() onDelete = new EventEmitter();
  @Output() onEdit = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log("item ngOnInit");
  }

  ngOnChanges() {
    console.log("item ngOnChanges");
  }

  onCourseDeleted() {
    this.onDelete.emit(this.course.id);
  }

  onCourseEdit() {
    this.onEdit.emit(this.course.id);
  }
}
