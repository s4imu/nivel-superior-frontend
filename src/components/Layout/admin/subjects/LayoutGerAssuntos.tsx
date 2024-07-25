import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import CreateButton from "@/components/CreateButton/CreateButton";
import AdminSubjects from "@/components/admin/dashboard/subjects/AdminSubjects";

function LayoutGerAssuntos() {
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
        <TitleComponent title="Gerenciar Assuntos" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <CreateButton text="Assunto" />
        </Box>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <AdminSubjects />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutGerAssuntos;
