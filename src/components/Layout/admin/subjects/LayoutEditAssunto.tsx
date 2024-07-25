import { useEffect, useState } from "react";
import api from "@/utils/api";
import { useRouter } from "next/router";
import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import SubjectForm from "@/components/Forms/Subject/SubjectForm";
import styles from "@/components/Layout/layoutindex.module.css";
import { Subject, UpdateSubjectDto } from "@/types/subject";

interface Media {
  id?: string;
  url: string;
  title: string;
  type: string;
}

interface SubjectProps {
  id: string;
}

function LayoutEditAssunto({ id }: SubjectProps) {
  const router = useRouter();
  const [subject, setSubject] = useState<Subject>();
  const [initialMediaUrls, setInitialMediaUrls] = useState<Media[]>([]);
  const [mediaUrls, setMediaUrls] = useState<Media[]>([]);

  useEffect(() => {
    api
      .get(`/subjects/${id}`)
      .then((data) => {
        setSubject(data.data);
        return api.get(`/medias/subjects/${id}`);
      })
      .then((mediaData) => {
        const medias = mediaData.data.map((media: any) => ({
          id: media.id,
          url: media.url,
          title: media.title,
          type: media.type,
        }));
        setInitialMediaUrls(medias);
        setMediaUrls(medias);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = async (
    updatedSubject: UpdateSubjectDto,
    updatedMediaUrls: Media[]
  ) => {
    try {
      await api.put(`/subjects/${id}`, updatedSubject);

      const updatedMedias = updatedMediaUrls.map((media, index) => ({
        id: mediaUrls[index]?.id,
        url: media.url,
        title: media.title,
        type: media.type,
      }));

      const mediasToAdd = updatedMedias.filter((media) => !media.id);
      const mediasToUpdate = updatedMedias.filter(
        (media) =>
          media.id &&
          initialMediaUrls.some(
            (initialMedia) =>
              initialMedia.id === media.id &&
              (initialMedia.url !== media.url ||
                initialMedia.title !== media.title ||
                initialMedia.type !== media.type)
          )
      );
      const mediasToDelete = initialMediaUrls.filter(
        (initialMedia) =>
          !updatedMedias.some(
            (updatedMedia) => updatedMedia.id === initialMedia.id
          )
      );

      // Create new media URLs
      await Promise.all(
        mediasToAdd.map((media) =>
          api.post("/medias", {
            url: media.url,
            title: media.title,
            type: media.type,
            subject_id: id,
          })
        )
      );

      // Update existing media URLs
      await Promise.all(
        mediasToUpdate.map((media) =>
          api.put(`/medias/${media.id}`, {
            url: media.url,
            title: media.title,
            type: media.type,
            subject_id: id,
          })
        )
      );

      // Delete removed media URLs
      await Promise.all(
        mediasToDelete.map((media) => api.delete(`/medias/${media.id}`))
      );

      router.push("/admin/assuntos");
    } catch (err) {
      console.log(err);
    }
  };

  if (!subject) return <>Carregando...</>;

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
        <TitleComponent title="Editar Assunto" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <SubjectForm
            handleSubmit={handleSubmit}
            subject={subject}
            mediaUrls={mediaUrls}
          />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutEditAssunto;
