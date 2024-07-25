import { useEffect, useState } from "react";
import api from "@/utils/api";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Typography } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import { Course } from "@/types/course";
import styles from "./cursoindex.module.css";
import { Subject } from "@/types/subject";

interface CourseIndexProps {
  id: string;
}

const defaultCourse: Course = {
  id: "",
  title: "",
};

function CourseIndex({ id }: CourseIndexProps) {
  const [subjects, setSubjects] = useState<Subject[]>([]);
  const [course, setCourse] = useState<Course>(defaultCourse);

  useEffect(() => {
    api.get(`/subjects/courses/${id}`).then((data) => {
      setSubjects(data.data);
    });
    api.get(`/courses/${id}`).then((data) => {
      setCourse(data.data);
    });
  }, [id]);

  return (
    <>
      <TitleComponent title={course?.title} />
      <List className={styles.listSubjects}>
        {subjects.map((subject) => (
          <Card key={subject.id} className={styles.courseCard}>
            <Link href={`/assuntos/${subject.id}`} passHref>
              <CardContent>
                <ListItem className={styles.listItem}>
                  <Typography variant="h4" className={styles.titleCard}>
                    {subject.title}
                  </Typography>
                </ListItem>
              </CardContent>
            </Link>
          </Card>
        ))}
      </List>
    </>
  );
}

export default CourseIndex;
