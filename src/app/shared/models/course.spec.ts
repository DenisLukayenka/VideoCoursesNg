import { Course } from './course.model';

describe('Course', () => {
  it('should create an instance', () => {
    expect(new Course(1, "", new Date(1999, 10, 22), 60, "description")).toBeTruthy();
  });
});
