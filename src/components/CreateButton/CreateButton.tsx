import { Button } from "@mui/material";
import Link from "next/link";

interface ButtonComponentProps {
  text: string;
}

function CreateButton({ text }: ButtonComponentProps) {
  return (
    <>
      <Button
        sx={{
          bgcolor: "#00AA66",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5%",
          cursor: "pointer",
          padding: "1rem",
          "&:hover": {
            bgcolor: "#008B55",
          },
        }}
        variant="contained"
      >
        <Link href={`/admin/${text.toLowerCase()}s/create`}>Criar {text}</Link>
      </Button>
    </>
  );
}

export default CreateButton;
