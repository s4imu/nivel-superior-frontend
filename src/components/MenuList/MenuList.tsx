import { useEffect, useState } from "react";
import Link from "next/link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import api from "@/utils/api";
import styles from "./menulist.module.css";
import { Course } from "@/types/course";

function MenuList() {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    api.get("/courses").then((data) => {
      setCourses(data.data);
    });
  }, []);

  return (
    <List>
      {courses.map((course) => (
        <Box key={course.id} className={styles.option}>
          <Link href={`/disciplinas/${course.id}`} passHref>
            <ListItem className={styles.itemTitle}>{course.title}</ListItem>
          </Link>
        </Box>
      ))}
    </List>
  );
}

export default MenuList;
