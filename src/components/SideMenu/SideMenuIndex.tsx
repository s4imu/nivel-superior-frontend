import { useContext } from "react";
import { useRouter } from "next/router";
import Box from "@mui/material/Box";
import styles from "./sidemenu.module.css";
import Logo from "@/components/Logo/Logo";
import MenuList from "../MenuList/MenuList";
import Link from "next/link";
import { AuthContext } from "@/providers/AuthProvider";
import BuscaComponent from "../busca/BuscaComponent";

function SideMenu() {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    setAuth(null);
    router.push("/");
  };

  return (
    <div className={styles.container}>
      <Box className={styles.logo}>
        <Logo color="branco" />
      </Box>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <BuscaComponent />
      </Box>
      <Box className={styles.options}>
        <MenuList />
      </Box>
      {auth ? (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "#00dd88",
            fontFamily: "'Roboto', sans-serif;",
            fontWeight: "700",
            marginBottom: "12px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "1rem",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span>{auth.name}</span>
            <Link href={`/update/${auth.id}`} className={styles.logoutButton}>
              Editar Perfil
            </Link>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        >
          <Link href="/login" className={styles.loginLink}>
            Login
          </Link>
        </Box>
      )}
    </div>
  );
}

export default SideMenu;
