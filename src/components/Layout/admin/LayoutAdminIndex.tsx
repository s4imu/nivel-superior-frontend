import Container from "@mui/material/Container";
import TitleComponent from "@/components/Title/TitleComponent";
import styles from "@/components/Layout/layoutindex.module.css";
import AdminMenuComponent from "@/components/admin/AdminMenuComponent";
import { Box } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { useRouter } from "next/router";

function LayoutAdminComponent() {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  const handleLogout = () => {
    setAuth(null);
    router.push("/");
  };

  return (
    <div className={styles.adminBackground}>
      <Container
        maxWidth="xl"
        sx={{
          height: "100vh",
          bgcolor: "#F7F7F5",
          position: "relative",
        }}
      >
        <TitleComponent title="Painel Administrador" />
        <AdminMenuComponent />
        {auth && (
          <Box
            sx={{
              position: "absolute",
              bottom: "20px",
              right: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "#00dd88",
              fontFamily: "'Roboto', sans-serif;",
              fontSize: "2rem",
              fontWeight: "700",
              gap: "0.5rem",
            }}
          >
            <span>{auth.name}</span>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </Box>
        )}
      </Container>
    </div>
  );
}

export default LayoutAdminComponent;
