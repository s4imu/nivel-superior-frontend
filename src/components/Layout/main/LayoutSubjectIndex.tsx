import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import SideMenu from "@/components/SideMenu/SideMenuIndex";
import SubjectIndex from "@/components/disciplinas/SubjectIndex";
import styles from "./layoutsubject.module.css";

function LayoutSubjectIndex({ id }) {
  return (
    <div className={styles.container}>
      <Box className={styles.sideMenu}>
        <SideMenu />
      </Box>
      <Box className={styles.subjectContent}>
        <SubjectIndex id={id} />
      </Box>
    </div>
  );
}

export default LayoutSubjectIndex;
