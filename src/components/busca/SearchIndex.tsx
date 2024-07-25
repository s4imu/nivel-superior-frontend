import { Subject } from "@/types/subject";
import api from "@/utils/api";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useEffect, useState } from "react";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/cursos/cursoindex.module.css";
import { Typography } from "@mui/material";
import { useRouter } from "next/router";

interface SearchIndexProps {}

function SearchIndex({}: SearchIndexProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const router = useRouter();
  const query = router.query.query as string;

  useEffect(() => {
    if (query) {
      api
        .get(`/search?query=${encodeURIComponent(query)}`)
        .then((response) => {
          setSubjects(response.data);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
        });
    } else {
      setSubjects([]);
    }
  }, [query]);

  return (
    <>
      <TitleComponent title="Resultados da Busca" />
      {subjects.length > 0 ? (
        <List className={styles.listSubjects}>
          {subjects.map((subject) => (
            <Card key={subject.id}>
              <Link href={`/assuntos/${subject.id}`} passHref>
                <CardContent className={styles.courseCard}>
                  <ListItem>
                    <Typography
                      className={styles.titleCard}
                      variant="h4"
                      gutterBottom
                    >
                      {subject.title}
                    </Typography>
                  </ListItem>
                </CardContent>
              </Link>
            </Card>
          ))}
        </List>
      ) : (
        <Typography
          variant="h3"
          gutterBottom
          align="center"
          sx={{ marginTop: "20px", fontWeight: "bold" }}
        >
          Nada foi encontrado para &ldquo;{query}&rdquo;.
        </Typography>
      )}
    </>
  );
}

export default SearchIndex;
