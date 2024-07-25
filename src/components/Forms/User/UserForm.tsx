import styles from "@/components/Forms/forms.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import { CreateUserDto, UpdatePatchUserDto, User } from "@/types/users";

interface UserProps {
  handleSubmit: (user: UpdatePatchUserDto) => void;
  user?: User;
}

function UserForm({ handleSubmit, user }: UserProps) {
  const router = useRouter();
  const [name, setName] = useState<string>(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const userData: UpdatePatchUserDto = { name, email };
    if (password) {
      userData.password = password;
    }
    handleSubmit(userData);
  };

  const handleCancel = () => {
    router.back(); // Volta para a página anterior
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
          Name
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <ButtonGroup sx={{ gap: "0.5rem" }}>
            <Button
              variant="contained"
              size="small"
              color="error"
              sx={{ padding: "0.9rem" }}
              onClick={handleCancel}
            >
              <Typography>Cancelar</Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              color="success"
              type="submit"
              sx={{ padding: "0.9rem" }}
            >
              <Typography>Salvar</Typography>
            </Button>
          </ButtonGroup>
        </Box>
        {error && (
          <Box>
            <Typography variant="body1" className={styles.errorText}>
              {error}
            </Typography>
          </Box>
        )}
      </form>
    </Container>
  );
}

export default UserForm;
