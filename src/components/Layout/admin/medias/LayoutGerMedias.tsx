import CreateButton from "@/components/CreateButton/CreateButton";
import TitleComponent from "@/components/Title/TitleComponent";
import { Box, Container } from "@mui/material";
import styles from "@/components/Layout/layoutindex.module.css";

function LayoutGerMedias() {
  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
        }}
      >
        <TitleComponent title="Gerenciar Medias" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <CreateButton text="Media" />
        </Box>
        <AdminMedias />
      </Container>
    </div>
  );
}

export default LayoutGerMedias;
