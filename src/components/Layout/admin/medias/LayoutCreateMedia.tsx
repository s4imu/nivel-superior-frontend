import { Box, Container } from "@mui/material";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import MediaForm from "@/components/Forms/Media/MediaForm";
import { useRouter } from "next/router";
import { CreateMediaDto } from "@/types/media";
import api from "@/utils/api";

function LayoutCreateMedia() {
  const router = useRouter();
  const handleSubmit = (media: CreateMediaDto) => {
    api
      .post("/medias", media)
      .then(() => router.push("/admin/medias"))
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
        <TitleComponent title="Criar Media" />
        <Box
          sx={{ marginTop: "2rem", marginLeft: "4rem", marginBottom: "2rem" }}
        >
          <MediaForm handleSubmit={handleSubmit} />
        </Box>
      </Container>
    </div>
  );
}

export default LayoutCreateMedia;
