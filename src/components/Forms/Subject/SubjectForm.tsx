import styles from "@/components/Forms/forms.module.css";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useRouter } from "next/router";
import { FormEvent, useState, useEffect } from "react";
import { CreateSubjectDto, Subject } from "@/types/subject";
import SelectMenuCoursesComponent from "@/components/Layout/admin/courses/SelectMenuCourses/SelectMenuCoursesComponent";

interface Media {
  url: string;
  title: string;
  type: string;
}

interface SubjectProps {
  handleSubmit: (subject: CreateSubjectDto, media: Media[]) => void;
  subject?: Subject;
  mediaUrls?: Media[];
}

function SubjectForm({
  handleSubmit,
  subject,
  mediaUrls: initialMediaUrls,
}: SubjectProps) {
  const router = useRouter();
  const [title, setTitle] = useState<string>(subject ? subject.title : "");
  const [body, setBody] = useState(subject ? subject.body : "");
  const [selectedCourseId, setSelectedCourseId] = useState<string>(
    subject ? subject.course_id : ""
  );
  const [mediaUrls, setMediaUrls] = useState<Media[]>(
    initialMediaUrls || [{ url: "", title: "", type: "" }]
  );
  const [error, setError] = useState<string>("");

  useEffect(() => {
    if (initialMediaUrls) {
      setMediaUrls(initialMediaUrls);
    }
  }, [initialMediaUrls]);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = { title: title!, body: body!, course_id: selectedCourseId };
    handleSubmit(subject, mediaUrls);
  };

  const handleCancel = () => {
    router.push("/admin/assuntos");
  };

  const addMediaField = () => {
    setMediaUrls([...mediaUrls, { url: "", title: "", type: "" }]);
  };

  const removeMediaField = (index: number) => {
    if (window.confirm("Você tem certeza que quer excluir este campo?")) {
      setMediaUrls(mediaUrls.filter((_, i) => i !== index));
    }
  };

  const handleMediaChange = (
    index: number,
    key: keyof Media,
    value: string
  ) => {
    const newMediaUrls = [...mediaUrls];
    newMediaUrls[index][key] = value;
    setMediaUrls(newMediaUrls);
  };

  return (
    <Container className={styles.formContainer}>
      <form onSubmit={onSubmit}>
        <Typography
          variant="h6"
          component="label"
          htmlFor="title"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Title
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            fullWidth
          />
        </Box>
        <Typography
          variant="h6"
          component="label"
          htmlFor="body"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Body
        </Typography>
        <Box className={styles.formField}>
          <TextField
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            fullWidth
          />
        </Box>
        <Typography
          variant="h6"
          component="label"
          htmlFor="course"
          sx={{
            color: "#00AA66",
            fontFamily: "Roboto",
            fontWeight: "700",
          }}
        >
          Course
        </Typography>
        <Box className={styles.formField}>
          <SelectMenuCoursesComponent
            courseId={selectedCourseId}
            setCourseId={setSelectedCourseId}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h6"
            component="label"
            htmlFor="media"
            sx={{
              color: "#00AA66",
              fontFamily: "Roboto",
              fontWeight: "700",
            }}
          >
            Midias
          </Typography>
          <Button
            sx={{
              fontSize: "0.8rem",
              bgcolor: "#00AA66",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5%",
              cursor: "pointer",
              padding: "0.5rem",
              marginBottom: "0.5rem",
              "&:hover": {
                bgcolor: "#008B55",
              },
            }}
            variant="contained"
            onClick={addMediaField}
          >
            Adicionar Mais Mídias
          </Button>
        </Box>
        {mediaUrls.map((media, index) => (
          <Grid
            container
            spacing={2}
            alignItems="center"
            key={index}
            sx={{ marginBottom: 2 }}
          >
            <Grid item xs={4}>
              <TextField
                sx={{
                  border: "3px solid #00AA66",
                  fontWeight: "bold",
                }}
                label="URL"
                value={media.url}
                onChange={(e) =>
                  handleMediaChange(index, "url", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                sx={{
                  border: "3px solid #00AA66",
                  fontWeight: "bold",
                }}
                label="Title"
                value={media.title}
                onChange={(e) =>
                  handleMediaChange(index, "title", e.target.value)
                }
                fullWidth
              />
            </Grid>
            <Grid item xs={3}>
              <FormControl fullWidth>
                <InputLabel id={`type-label-${index}`}>Tipo</InputLabel>
                <Select
                  labelId={`type-label-${index}`}
                  id={`type-${index}`}
                  value={media.type}
                  label="Tipo"
                  onChange={(e: SelectChangeEvent) =>
                    handleMediaChange(index, "type", e.target.value as string)
                  }
                  sx={{
                    border: "3px solid #00AA66",
                    fontWeight: "bold",
                  }}
                >
                  <MenuItem
                    sx={{
                      fontWeight: "bold",
                    }}
                    value={"VIDEO"}
                  >
                    Video
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontWeight: "bold",
                    }}
                    value={"IMAGE"}
                  >
                    Imagem
                  </MenuItem>
                  <MenuItem
                    sx={{
                      fontWeight: "bold",
                    }}
                    value={"DOCUMENT"}
                  >
                    Documento
                  </MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid
              item
              xs={1}
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <CloseIcon
                sx={{ cursor: "pointer", fontSize: 30 }}
                onClick={() => removeMediaField(index)}
                color="error"
              />
            </Grid>
          </Grid>
        ))}
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

export default SubjectForm;
