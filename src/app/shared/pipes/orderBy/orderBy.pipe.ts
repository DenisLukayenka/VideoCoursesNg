import { Pipe, PipeTransform } from '@angular/core';
import { ICourse } from '../../models/course.interface';

@Pipe({
  name: 'orderBy',
})
export class OrderByPipe implements PipeTransform {
    transform(courses: ICourse[], property: keyof ICourse, order: 'ASC' | 'DESC' = 'ASC') {
        if(! courses || !property) {
            return courses;
        }

        let sortedCourses = courses.sort((a, b) => {
            if (a[property] < b[property]){
                return -1;
            } else if (a[property] > b[property]) {
                return 1;
            }

            return 0;
        });

        if(order === 'DESC') {
            return sortedCourses.reverse();
        }

        return sortedCourses;
    }
}