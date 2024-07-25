export interface Course {
  id: string;
  title: string;
}

export type CreateCourseDto = Pick<Course, "title">;
export type UpdateCourseDto = Pick<Course, "title">;
