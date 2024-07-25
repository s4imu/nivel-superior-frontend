import { useEffect, useState, useContext } from "react";
import {
  Card,
  CardContent,
  List,
  ListItem,
  Typography,
  Button,
  Box,
  TextField,
} from "@mui/material";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { AuthContext } from "@/providers/AuthProvider";
import api from "@/utils/api";
import { Comment } from "@/types/comment";

interface CommentInterfaceProps {
  courseId: string;
}

const CommentSection: React.FC<CommentInterfaceProps> = ({ courseId }) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [body, setBody] = useState<string>("");
  const { auth } = useContext(AuthContext);

  useEffect(() => {
    loadComments(courseId);
  }, [courseId]);

  const loadComments = async (courseId: string) => {
    try {
      const response = await api.get(`/comments/subjects/${courseId}`);
      setComments(response.data);
    } catch (error) {
      console.error("Error loading comments:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!body.trim()) {
      return;
    }

    try {
      const response = await api.post("/comments", {
        body,
        subject_id: courseId,
      });
      setComments((prevComments) => [...prevComments, response.data]);
      setBody("");
    } catch (error) {
      console.error("Error creating comment:", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Tem certeza que deseja apagar este comentário?"
    );
    if (confirmDelete) {
      try {
        await api.delete(`/comments/${id}`);
        setComments(comments.filter((comment) => comment.id !== id));
      } catch (error) {
        console.error("Error deleting comment:", error);
      }
    }
  };

  return (
    <>
      <List
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "3rem",
          marginBottom: "2rem",
          maxWidth: "82%",
          overflowX: "hidden", // Esconde a barra de rolagem horizontal
        }}
      >
        {comments.map((comment) => (
          <ListItem
            key={comment.id}
            sx={{
              padding: "0",
              margin: "2px",
              width: "100%",
            }}
          >
            <Card
              sx={{
                width: "100%",
                backgroundColor: "#f7f7f5",
              }}
            >
              <CardContent>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Typography variant="body1" gutterBottom>
                    {comment.body}
                  </Typography>
                  {(auth?.role === "ADMIN" || auth?.role === "SUPER") && (
                    <Button
                      onClick={() => handleDelete(comment.id)}
                      color="error"
                    >
                      <DeleteOutlineIcon />
                    </Button>
                  )}
                </Box>
              </CardContent>
            </Card>
          </ListItem>
        ))}
      </List>
      <form onSubmit={handleSubmit}>
        <Box
          sx={{
            width: "82%",
            marginLeft: "3rem",
            marginBottom: "2rem",
          }}
        >
          <Typography
            variant="h6"
            component="label"
            htmlFor="body"
            sx={{
              color: "#00AA66",
              fontFamily: "Roboto",
              fontWeight: "700",
              marginBottom: "0.5rem",
            }}
          >
            Criar Comentário
          </Typography>
          <TextField
            id="body"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            sx={{
              marginBottom: "1rem",
              border: "1px solid #00AA66",
            }}
          />

          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              size="small"
              color="success"
              type="submit"
            >
              Comentar
            </Button>
          </Box>
        </Box>
      </form>
    </>
  );
};

export default CommentSection;
