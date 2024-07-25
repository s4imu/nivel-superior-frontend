import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useRouter } from "next/router";

function BuscaComponent() {
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Redireciona para a página de resultados com o termo de busca como parâmetro de consulta
      router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Box
      sx={{
        width: "98%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: "5px",
      }}
    >
      <TextField
        id="standard-basic"
        variant="standard"
        sx={{
          flex: 1,
          backgroundColor: "#F7F7F5",
          padding: "0.14rem",
        }}
        value={searchQuery}
        onChange={handleChange}
      />
      <Button variant="contained" color="success" onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Box>
  );
}

export default BuscaComponent;
