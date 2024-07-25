export interface Comment {
  id: string;
  body: string;
  subject_id: string;
}

export type CreateCommentDto = Pick<Comment, "body">;
export type UpdateCommentDto = Pick<Comment, "body">;
