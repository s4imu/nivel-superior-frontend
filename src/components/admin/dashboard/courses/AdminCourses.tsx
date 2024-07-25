import styles from "@/components/cursos/cursoindex.module.css";
import { Course } from "@/types/course";
import api from "@/utils/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import { Button, ButtonGroup, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function AdminCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const router = useRouter();

  useEffect(() => {
    api.get("/courses").then((data) => {
      setCourses(data.data);
    });
  }, []);

  const handleEdit = (courseId: string) => {
    router.push(`/admin/disciplinas/update/${courseId}`);
  };

  const handleDelete = async (courseId: string) => {
    const confirmed = confirm("Você tem certeza que quer deletar este curso?");
    if (confirmed) {
      try {
        await api.delete(`/courses/${courseId}`).then(() => {
          setCourses(courses.filter((course) => course.id !== courseId));
        });
      } catch (error) {
        console.error("Erro ao deletar curso:", error);
      }
    }
  };

  return (
    <>
      <List>
        {courses.map((course) => (
          <Card key={course.id} className={styles.courseCardAdmin}>
            <CardContent>
              <ListItem className={styles.listItem}>
                <Typography
                  className={styles.titleCard}
                  variant="h4"
                  gutterBottom
                >
                  <Link href={`/assuntos/${course.id}`} passHref>
                    {course.title}
                  </Link>
                </Typography>
                <ButtonGroup
                  size="medium"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  <Button
                    variant="text"
                    size="small"
                    color="success"
                    onClick={() => handleEdit(course.id)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(course.id)}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                </ButtonGroup>
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </>
  );
}

export default AdminCourses;
