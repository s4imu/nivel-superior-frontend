import { useState, useContext } from "react";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { AuthContext } from "@/providers/AuthProvider";
import api from "@/utils/api";
import styles from "./Register.module.css"; // Import CSS Module
import Link from "next/link";

function RegisterComponent() {
  const router = useRouter();
  const { setAuth } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    const credentials = { name, email, password };
    try {
      await api.post("/register", credentials).then((data) => {
        setError("");
        setAuth({ nome: data.data.nome });
        router.push("/");
      });
    } catch (err) {
      // Se houver erro de autenticação, exiba a mensagem de erro
      if (err.response && err.response.status === 401) {
        setError("Informações de Registro Incorretas");
      } else {
        setError("Ocorreu um erro ao fazer registro");
      }
    }
  };

  return (
    <Container className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <Typography
          variant="h6"
          component="label"
          htmlFor="name"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Nome
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
          />
        </Box>
        <Typography
          variant="h6"
          component="label"
          htmlFor="email"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Email
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            fullWidth
          />
        </Box>
        <Typography
          variant="h6"
          component="label"
          htmlFor="password"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Senha
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Box>
        <Box className={styles.formField}>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#00DD88",
              "&:hover": {
                backgroundColor: "#00AA66", // Define a cor do botão no hover
              },
            }}
            type="submit"
            fullWidth
          >
            Criar Conta
          </Button>
        </Box>
        <Box>
          <Typography
            variant="body2"
            sx={{
              fontFamily: "Roboto",
              fontWeight: "700",
              fontSize: "1.2rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            Já possui uma conta?&nbsp;
            <Link href={"/login"} className={styles.loginLink}>
              Entre Aqui
            </Link>
          </Typography>
        </Box>
        <Box>
          <Typography variant="body2" className={styles.errorText}>
            {error}
          </Typography>
        </Box>
      </form>
    </Container>
  );
}

export default RegisterComponent;
