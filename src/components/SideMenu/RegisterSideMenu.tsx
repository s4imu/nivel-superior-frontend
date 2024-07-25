import Logo from "@/components/Logo/Logo";
import Box from "@mui/material/Box";
import RegisterComponent from "@/components/Register/RegisterComponent";
import styles from "./sidemenu.module.css";

function RegisterSideMenuComponent() {
  return (
    <div className={`${styles.container} ${styles.loginSideMenuContainer}`}>
      <Box className={styles.logo}>
        <Logo color="verde" />
      </Box>
      <Box className={styles.loginField}>
        <RegisterComponent />
      </Box>
    </div>
  );
}

export default RegisterSideMenuComponent;
