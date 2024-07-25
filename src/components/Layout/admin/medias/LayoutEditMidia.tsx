import MediaForm from "@/components/Forms/Media/MediaForm";
import { Media, UpdateMediaDto } from "@/types/media";
import api from "@/utils/api";
import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";

interface MediaProps {
  id: string;
}

function LayoutEditMidia({ id }: MediaProps) {
  const router = useRouter();
  const [media, setMedia] = useState<Media>();

  useEffect(() => {
    api
      .get(`/medias/${id}`)
      .then((data) => {
        setMedia(data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  const handleSubmit = (media: UpdateMediaDto) => {
    api
      .put(`/medias/${id}`, media)
      .then(() => router.push("/admin/midias"))
      .catch((err) => console.log(err));
  };

  if (!media) return <>Carregando...</>;

  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
        }}
      >
        <TitleComponent title="Editar Midia" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <MediaForm handleSubmit={handleSubmit} media={media} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutEditMidia;
