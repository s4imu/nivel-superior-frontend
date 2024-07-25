import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import CreateButton from "@/components/CreateButton/CreateButton";
import AdminCourses from "@/components/admin/dashboard/courses/AdminCourses";

function LayoutGerDisciplinas() {
  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          bgcolor: "#F7F7F5",
          paddingBottom: "2rem",
        }}
      >
        <TitleComponent title="Gerenciar Disciplinas" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <CreateButton text="Disciplina" />
        </Box>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <AdminCourses />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutGerDisciplinas;
