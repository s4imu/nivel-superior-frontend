import Image from "next/image";
import Typography from "@mui/material/Typography";
import styles from "./contentindex.module.css";

function Content() {
  return (
    <div>
      <Image
        src={`/background.png`}
        alt="Nível Superior Logo"
        width={720}
        height={720}
        className={styles.imageStyle}
      />
      <Typography className={styles.titleText} variant="h1" gutterBottom>
        Seu primeiro contato com o Nível Superior
      </Typography>
    </div>
  );
}

export default Content;
