import { Container } from "@mui/material";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";

function AdminMenuComponent() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "4rem",
      }}
    >
      <Grid container spacing={2}>
        <Grid
          item
          xs={6}
          sx={{
            margin: 0,
          }}
        >
          <Card
            sx={{
              width: "22rem",
              height: "30vh",
              bgcolor: "rgba(0,221,136,0.39)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5%",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "rgba(0,221,136,0.59)",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "700",
                textAlign: "center",
                color: "#102223",
              }}
              gutterBottom
            >
              <Link href={"/admin/disciplinas"} passHref>
                Gerenciar Disciplinas
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              width: "22rem",
              height: "30vh",
              bgcolor: "#F7F7F5",
              border: "1px solid #00AA66",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5%",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#E0E0E0",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "700",
                textAlign: "center",
                color: "#102223",
              }}
              gutterBottom
            >
              <Link href={"/"} passHref>
                Nível Superior
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              width: "22rem",
              height: "30vh",
              bgcolor: "#102223",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5%",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#0B1717",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "700",
                textAlign: "center",
                color: "#F7F7F5",
              }}
              gutterBottom
            >
              <Link href={"/admin/assuntos"} passHref>
                Gerenciar Assuntos
              </Link>
            </Typography>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card
            sx={{
              width: "22rem",
              height: "30vh",
              bgcolor: "#00AA66",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "5%",
              cursor: "pointer",
              "&:hover": {
                bgcolor: "#008B55",
              },
            }}
          >
            <Typography
              variant="h3"
              sx={{
                fontFamily: "Roboto",
                fontWeight: "700",
                textAlign: "center",
                color: "#F7F7F5",
              }}
              gutterBottom
            >
              <Link href={"/admin/usuarios"} passHref>
                Gerenciar Usuários
              </Link>
            </Typography>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
}

export default AdminMenuComponent;
