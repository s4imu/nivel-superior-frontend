import CourseForm from "@/components/Forms/Course/CourseForm";
import TitleComponent from "@/components/Title/TitleComponent";
import { Course, UpdateCourseDto } from "@/types/course";
import api from "@/utils/api";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@/components/Layout/layoutindex.module.css";

interface CourseProps {
  id: string;
}

function LayoutEditDisciplina({ id }: CourseProps) {
  const router = useRouter();
  const [course, setCourse] = useState<Course>();

  useEffect(() => {
    api
      .get(`/courses/${id}`)
      .then((data) => {
        setCourse(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (course: UpdateCourseDto) => {
    api
      .put(`/courses/${id}`, course)
      .then(() => router.push("/admin/disciplinas"))
      .catch((err) => console.log(err));
  };

  if (!course) return <>Carregando...</>;

  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
        }}
      >
        <TitleComponent title="Editar Disciplina" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <CourseForm handleSubmit={handleSubmit} course={course} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutEditDisciplina;
