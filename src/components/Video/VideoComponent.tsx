import styles from "./videoComponent.module.css";

interface VideoIndexProps {
  url: string;
}

function VideoComponent({ url }: VideoIndexProps) {
  // Convert the URL to an embeddable format if necessary
  const videoId = url.split("v=")[1];
  const embedUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className={styles.videoContainer}>
      <iframe
        className={styles.video}
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default VideoComponent;
