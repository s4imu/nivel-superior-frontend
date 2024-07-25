import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import styles from "./titlecomponent.module.css";
interface TitleComponentProps {
  title: string;
}

function TitleComponent({ title }: TitleComponentProps) {
  return (
    <>
      <Typography className={styles.title} variant="h2" gutterBottom>
        {title}
      </Typography>
      <Divider className={styles.divider} component="h2" />
    </>
  );
}

export default TitleComponent;
