import { Box, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

interface DocComponentProps {
  url: string;
  title: string;
}

const DocComponent: React.FC<DocComponentProps> = ({ url, title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Typography variant="h6">Documento:</Typography>
        </Grid>
        <Grid item>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            <Link href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </Link>
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DocComponent;
