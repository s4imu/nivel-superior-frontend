import Logo from "@/components/Logo/Logo";
import Box from "@mui/material/Box";
import Login from "@/components/Login/Login";
import styles from "./sidemenu.module.css";

function LoginSideMenuComponent() {
  return (
    <div className={`${styles.container} ${styles.loginSideMenuContainer}`}>
      <Box className={styles.logo}>
        <Logo color="verde" />
      </Box>
      <Box className={styles.loginField}>
        <Login />
      </Box>
    </div>
  );
}

export default LoginSideMenuComponent;
