export interface Subject {
  id: string;
  title: string;
  body: string;
  course_id: string;
}

export type CreateSubjectDto = Pick<Subject, "title" | "body" >
export type UpdateSubjectDto = Pick<Subject, "title" | "body" >
