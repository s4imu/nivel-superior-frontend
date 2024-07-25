import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import SubjectForm from "@/components/Forms/Subject/SubjectForm";
import { useRouter } from "next/router";
import { CreateSubjectDto } from "@/types/subject";
import api from "@/utils/api";

interface Media {
  url: string;
  title: string;
  type: string;
}

function LayoutCreateAssunto() {
  const router = useRouter();

  const handleSubmit = async (
    subject: CreateSubjectDto,
    mediaUrls: Media[]
  ) => {
    try {
      // Primeiro, crie o subject
      const response = await api.post("/subjects", subject);
      const createdSubject = response.data;

      // Obtenha o ID do subject criado
      const subjectId = createdSubject.id;

      // Agora, crie as medias relacionadas usando o subjectId
      await Promise.all(
        mediaUrls.map((media) => {
          return api.post("/medias", { ...media, subject_id: subjectId });
        })
      );

      // Redirecione ou atualize a UI conforme necessário
      router.push("/admin/assuntos");
    } catch (err) {
      console.log(err);
    }
  };

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
        <TitleComponent title="Criar Assunto" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <SubjectForm handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutCreateAssunto;
