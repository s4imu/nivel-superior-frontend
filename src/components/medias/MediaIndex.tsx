import { Media } from "@/types/media";
import api from "@/utils/api";
import { useEffect, useState } from "react";
import VideoComponent from "@/components/Video/VideoComponent";
import ImageComponent from "@/components/Image/ImageComponent";
import DocComponent from "@/components/Doc/DocComponent";

interface MediaIndexProps {
  id: string;
}

function MediaIndex({ id }: MediaIndexProps) {
  const [medias, setMedias] = useState<Media[]>([]);

  useEffect(() => {
    api.get(`/medias/subjects/${id}`).then((data) => {
      setMedias(data.data);
    });
  }, [id]);

  const renderMedia = (media: Media) => {
    switch (media.type) {
      case "VIDEO":
        return <VideoComponent url={media.url} />;
      case "IMAGE":
        return <ImageComponent url={media.url} />;
      case "DOCUMENT":
        return <DocComponent url={media.url} title={media.title} />;
      default:
        return null;
    }
  };

  return (
    <ul>
      {medias.map((media) => (
        <li key={media.id}>{renderMedia(media)}</li>
      ))}
    </ul>
  );
}

export default MediaIndex;
