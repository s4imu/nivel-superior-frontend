import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import CreateButton from "@/components/CreateButton/CreateButton";
import AdminUsers from "@/components/admin/dashboard/users/AdminUsers";

function LayoutGerUsuarios() {
  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          minHeight: "100vh",
          height: "100%",
          bgcolor: "#F7F7F5",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <TitleComponent title="Gerenciar Usuarios" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <CreateButton text="Usuario" />
        </Box>
        <Box sx={{ flex: 1, overflow: "auto" }}>
          <AdminUsers />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutGerUsuarios;
