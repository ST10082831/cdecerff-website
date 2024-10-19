import React from "react";
import { Typography, Box } from "@mui/material";

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "primary.main", color: "#fff", p: 2, mt: 4 }}>
      <Typography variant="body1" align="center">
        &copy; {new Date().getFullYear()} C. DE CERFF & ASSOCIATES. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;