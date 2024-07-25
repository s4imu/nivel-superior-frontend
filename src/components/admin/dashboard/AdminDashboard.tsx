import { AuthContext } from "@/providers/AuthProvider";
import { Box, Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";

function AdminDashboard() {
  const { auth, setAuth } = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/admin/login");
    }
  }, [auth, router]);

  return (
    <>
      <Box>
        <Button variant="contained">
          <Link href={"/admin/users/"} passHref>
            Gerenciar Usuários
          </Link>
        </Button>
      </Box>
      <Box>
        <Button variant="contained">
          <Link href={"/admin/disciplinas/"} passHref>
            Gerenciar Disciplinas
          </Link>
        </Button>
      </Box>
      <Box>
        <Button variant="contained">
          <Link href={"/admin/assuntos"} passHref>
            Gerenciar Assuntos
          </Link>
        </Button>
      </Box>
    </>
  );
}

export default AdminDashboard;
