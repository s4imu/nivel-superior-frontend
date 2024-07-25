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

import { CreateMediaDto, Media } from "@/types/media";

interface MediaProps {
  handleSubmit: (media: CreateMediaDto) => void;
  media?: Media;
}

function MediaForm({ handleSubmit, media }: MediaProps) {
  const router = useRouter();
  const [url, setUrl] = useState<string>(media ? media.url : "");
  const [error, setError] = useState<string>("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const media = { url: url! };
    handleSubmit(media);
  };

  const handleCancel = () => {
    router.push("/admin/assuntos");
  };

  return (
    <Container className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <Typography
          variant="h6"
          component="label"
          htmlFor="url"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Url
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
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
            <Typography variant="body2" className={styles.errorText}>
              {error}
            </Typography>
          </Box>
        )}
      </form>
    </Container>
  );
}

export default MediaForm;
