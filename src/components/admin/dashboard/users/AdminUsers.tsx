import styles from "@/components/cursos/cursoindex.module.css";
import { User } from "@/types/users";
import api from "@/utils/api";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { Button, ButtonGroup, Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/providers/AuthProvider";

function AdminUsers() {
  const [users, setUsers] = useState<User[]>([]);
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    api.get("/users").then((data) => {
      setUsers(data.data);
    });
  }, []);

  const handleDelete = async (userId: string) => {
    const confirmed = confirm(
      "Você tem certeza que quer deletar este usuário?"
    );
    if (confirmed) {
      try {
        await api.delete(`/users/${userId}`).then(() => {
          setUsers(users.filter((user) => user.id !== userId));
        });
      } catch (error) {
        console.error("Erro ao deletar usuário:", error);
      }
    }
  };

  return (
    <>
      <List>
        {users.map((user) => (
          <Card key={user.id} className={styles.courseCardAdmin}>
            <CardContent>
              <ListItem className={styles.listItem}>
                <Typography
                  className={styles.titleCard}
                  variant="h4"
                  gutterBottom
                >
                  {user.name}
                </Typography>
                <ButtonGroup
                  size="medium"
                  variant="contained"
                  aria-label="Basic button group"
                >
                  {auth?.role === "SUPER" && (
                    <Button
                      variant="text"
                      size="small"
                      color="error"
                      onClick={() => handleDelete(user.id)}
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  )}
                </ButtonGroup>
              </ListItem>
            </CardContent>
          </Card>
        ))}
      </List>
    </>
  );
}

export default AdminUsers;
