import React from "react";
import { Typography, Stack } from "@mui/material";

const LabelFields = ({ title, required, sx }) => {
  return (
    <Stack direction="row" sx={sx}>
      <Typography variant="body2" color="primary" fontWeight="600" mb="0.4rem">
        {title}
      </Typography>
    </Stack>
  );
};

export default LabelFields;
