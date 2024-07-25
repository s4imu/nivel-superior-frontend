import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import CourseForm from "@/components/Forms/Course/CourseForm";
import { useRouter } from "next/router";
import { CreateCourseDto } from "@/types/course";
import api from "@/utils/api";

function LayoutCreateDisciplina() {
  const router = useRouter();
  const handleSubmit = (course: CreateCourseDto) => {
    api
      .post("/courses", course)
      .then(() => router.push("/admin/disciplinas"))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
        }}
      >
        <TitleComponent title="Criar Disciplina" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <CourseForm handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutCreateDisciplina;
