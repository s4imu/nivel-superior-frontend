import api from "@/utils/api";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import styles from "@/components/cursos/cursoindex.module.css";
import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  CardContent,
  IconButton,
  List,
  ListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Subject } from "@/types/subject";
import { AuthContext } from "@/providers/AuthProvider";

function AdminSubjects() {
  const router = useRouter();
  const { auth, setAuth } = useContext(AuthContext);
  const [subjects, setSubjects] = useState<Subject[]>([]);
  useEffect(() => {
    api.get("/subjects").then((data) => {
      setSubjects(data.data);
    });
  }, []);

  const handleEdit = (subjectId: string) => {
    router.push(`/admin/assuntos/update/${subjectId}`);
  };

  const handleDelete = async (subjectId: string) => {
    const confirmed = confirm(
      "Você tem certeza que quer deletar este assunto?"
    );
    if (confirmed) {
      try {
        await api.delete(`/subjects/${subjectId}`).then(() => {
          setSubjects(subjects.filter((subject) => subject.id !== subjectId));
        });
      } catch (error) {
        console.error("Erro ao deletar assunto:", error);
      }
    }
  };

  return (
    <>
      <List>
        {subjects.map((subject) => (
          <Card key={subject.id} className={styles.courseCardAdmin}>
            <CardContent>
              <ListItem className={styles.listItem}>
                <Typography
                  className={styles.titleCard}
                  variant="h4"
                  gutterBottom
                >
                  <Link href={`/assuntos/${subject.id}`} passHref>
                    {subject.title}
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
                    onClick={() => handleEdit(subject.id)}
                  >
                    <EditIcon />
                  </Button>
                  <Button
                    variant="text"
                    size="small"
                    color="error"
                    onClick={() => handleDelete(subject.id)}
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

export default AdminSubjects;
