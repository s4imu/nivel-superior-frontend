import { useState } from "react";
import { useRouter } from "next/router";
import { Box, Button, TextField, Typography, Container } from "@mui/material";
import { useAuth } from "@/providers/AuthProvider";
import api from "@/utils/api";
import styles from "./login.module.css"; // Import CSS Module
import Link from "next/link";

function Login() {
  const router = useRouter();
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const credentials = { email, password };
    try {
      const response = await api.post("/login", credentials);
      const { token, user } = response.data;
      const { id, name, email: userEmail, role } = user;
      setError("");
      setAuth({ id, name, email: userEmail, role, token });

      // Armazena o token no localStorage
      localStorage.setItem("token", token);

      // Redirecionar com base no tipo de usuário
      if (role === "ADMIN" || role === "SUPER") {
        router.push("/admin");
      } else {
        router.push("/");
      }
    } catch (err: any) {
      // Se houver erro de autenticação, exiba a mensagem de erro
      if (err.response && err.response.status === 401) {
        setError("Informações de Login Incorretas");
      } else {
        setError("Ocorreu um erro ao fazer login");
      }
    }
  };

  return (
    <Container className={styles.formContainer}>
      <form onSubmit={onSubmit}>
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
            Entrar
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
            Ainda não tem uma conta?&nbsp;
            <Link href={"/register"} className={styles.registerLink}>
              Crie Aqui
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

export default Login;
