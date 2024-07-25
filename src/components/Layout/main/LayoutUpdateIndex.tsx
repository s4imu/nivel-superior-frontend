import UserForm from "@/components/Forms/User/UserForm";
import { UpdatePatchUserDto, User } from "@/types/users";
import api from "@/utils/api";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState, useContext } from "react";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import { AuthContext } from "@/providers/AuthProvider";

interface UserProps {
  id: string;
}

function LayoutUpdateIndex({ id }: UserProps) {
  const router = useRouter();
  const { auth } = useContext(AuthContext);
  const [user, setUser] = useState<User>();

  useEffect(() => {
    api
      .get(`/users/${id}`)
      .then((data) => {
        setUser(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (userData: UpdatePatchUserDto) => {
    if (auth && auth.id === id) {
      api
        .patch(`/users/${id}`, userData)
        .then(() => router.push("/admin/usuarios"))
        .catch((err) => console.log(err));
    } else {
      console.error("You are not authorized to update this user.");
    }
  };

  if (!user) return <>Carregando...</>;

  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
        }}
      >
        <TitleComponent title="Editar Conta" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <UserForm handleSubmit={handleSubmit} user={user} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutUpdateIndex;
