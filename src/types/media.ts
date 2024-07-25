export interface Media {
  id: string;
  title: string;
  url: string;
  type: string;
  subject_id: string;
}

export type CreateMediaDto = Pick<Media, "title" | "url" | "type">;
export type UpdateMediaDto = Pick<Media, "title" | "url" | "type">;
