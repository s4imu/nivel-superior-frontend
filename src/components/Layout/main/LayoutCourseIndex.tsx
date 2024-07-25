import SideMenu from "@/components/SideMenu/SideMenuIndex";
import CourseIndex from "@/components/cursos/CursoIndex";
import Grid from "@mui/material/Grid";
import styles from "./layoutsubject.module.css";
import { Box } from "@mui/material";

function LayoutCoursesIndex({ id }) {
  return (
    <div className={styles.container}>
      <Box className={styles.sideMenu}>
        <SideMenu />
      </Box>
      <Box className={styles.subjectContent}>
        <CourseIndex id={id} />
      </Box>
    </div>
  );
}

export default LayoutCoursesIndex;
