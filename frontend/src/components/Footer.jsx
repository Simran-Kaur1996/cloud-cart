import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        mt: 5,
        py: 2,
        px: 3,
        backgroundColor: "primary.main",
        color: "white",
        textAlign: "center",
      }}
    >
      <Typography variant="body2">
        &copy; {new Date().getFullYear()} CloudCart. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
