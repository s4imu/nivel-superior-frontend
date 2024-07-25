import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import UserForm from "@/components/Forms/User/UserForm";
import { useRouter } from "next/router";
import { CreateUserDto } from "@/types/users";
import api from "@/utils/api";

function LayoutCreateUsuario() {
  const router = useRouter();
  const handleSubmit = (user: CreateUserDto) => {
    api
      .post("/users", user)
      .then(() => router.push("/admin/usuarios"))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
        }}
      >
        <TitleComponent title="Criar Usuario" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <UserForm handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutCreateUsuario;
