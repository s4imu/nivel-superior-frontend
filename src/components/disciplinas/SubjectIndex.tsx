import CommentSection from "@/components/comentarios/CommentsSection";
import MediaIndex from "@/components/medias/MediaIndex";
import TitleComponent from "@/components/Title/TitleComponent";
import { CreateCommentDto } from "@/types/comment";
import { Subject } from "@/types/subject";
import api from "@/utils/api";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import styles from "./subjectIndex.module.css";

interface SubjectIndexProps {
  id: string;
}

function SubjectIndex({ id }: SubjectIndexProps) {
  const [subejct, setSubejcts] = useState<Subject>();
  useEffect(() => {
    api.get(`/subjects/${id}`).then((data) => {
      setSubejcts(data.data);
    });
  }, [id]);
  const handleSubmit = (comment: CreateCommentDto) => {
    api
      .post("/comments", { ...comment, subject_id: id })
      .then()
      .catch((err) => console.log(err));
  };

  return (
    <>
      <TitleComponent title={subejct?.title} />
      <Typography className={styles.text} variant="body1" gutterBottom>
        {subejct?.body}
      </Typography>
      <TitleComponent title="Conteúdo Extra" />
      <MediaIndex id={id} />
      <TitleComponent title="Comentários" />
      <CommentSection courseId={id} />
    </>
  );
}

export default SubjectIndex;
