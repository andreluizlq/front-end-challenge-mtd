import React from "react";
import { Typography, Stack } from "@mui/material";

const LabelFields = ({ title, sx }) => {
  return (
    <Stack direction="row" sx={sx}>
      <Typography
        color="secondary"
        fontWeight="600"
        mb="0.4rem"
        letterSpacing="0.1em"
        fontSize="0.9rem"
      >
        {title}
      </Typography>
    </Stack>
  );
};

export default LabelFields;
