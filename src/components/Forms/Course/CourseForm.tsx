import styles from "@/components/Forms/forms.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

import { Course, CreateCourseDto } from "@/types/course";

interface CourseProps {
  handleSubmit: (course: CreateCourseDto) => void;
  course?: Course;
}

function CourseForm({ handleSubmit, course }: CourseProps) {
  const router = useRouter();
  const [title, setTitle] = useState<string>(course ? course.title : "");
  const [error, setError] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const course = { title: title! };
    handleSubmit(course);
  };

  const handleCancel = () => {
    router.push("/admin/disciplinas");
  };

  return (
    <Container className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <Typography
          variant="h6"
          component="label"
          htmlFor="title"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Título
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ButtonGroup sx={{ gap: "0.5rem" }}>
            <Button
              variant="contained"
              size="small"
              color="error"
              sx={{ padding: "0.9rem" }}
              onClick={handleCancel}
            >
              <Typography>Cancelar</Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              type="submit"
              sx={{ padding: "0.9rem" }}
            >
              <Typography>Salvar</Typography>
            </Button>
          </ButtonGroup>
        </Box>
        {error && (
          <Box>
            <Typography variant="body2" className={styles.errorText}>
              {error}
            </Typography>
          </Box>
        )}
      </form>
    </Container>
  );
}

export default CourseForm;
