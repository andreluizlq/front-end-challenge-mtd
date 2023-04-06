import { forwardRef } from "react";
import { Typography, Stack, Box, useMediaQuery } from "@mui/material";
import CodCard from "../assets/CodCard";

const Card = forwardRef(({ sx, ...other }) => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <>
      {!isMobile && (
        <Box position="fixed" {...other} sx={sx}>
          <Box>
            <Stack
              width="340px"
              height="180px"
              justifyContent="end"
              color="#fff"
              borderRadius="12px"
              sx={{
                background: "url(/Card.png) no-repeat",
                backgroundSize: "100%",
              }}
            >
              <Stack m="1rem">
                <Typography
                  fontSize="21px"
                  letterSpacing="0.2em"
                  fontWeight="300"
                  mb="0.8rem"
                >
                  0000 0000 0000 0000
                </Typography>
                <Stack
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography fontWeight="300" fontSize="14px">
                    JANE APPLESEED
                  </Typography>
                  <Typography fontWeight="300" fontSize="14px">
                    00/00
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </Box>
          <Box ml="4.4rem" mt="2rem">
            <Stack
              width="340px"
              height="180px"
              borderRadius="12px"
              sx={{
                background:
                  "linear-gradient(98.33deg, #FCF9FB 0%, #D3D4D8 99.59%)",
              }}
            >
              <Stack mt="1rem">
                <Box mb="0.4rem" p="1.4rem" sx={{ background: "#2F2F2F" }} />

                <Stack
                  alignItems="end"
                  mx="3rem"
                  my="0.8rem"
                  p="0.2rem"
                  borderRadius="4px"
                  sx={{ background: "#AAB5BE" }}
                >
                  <Typography mr="1rem" color="#fff" fontWeight="300">
                    000
                  </Typography>
                </Stack>
                <Stack alignItems="center" mt="0.8rem">
                  <CodCard />
                </Stack>
              </Stack>
            </Stack>
          </Box>
        </Box>
      )}
      {isMobile && (
        <Box {...other} sx={sx}>
          <Stack
            maxWidth="340px"
            height="180px"
            justifyContent="end"
            color="#fff"
            borderRadius="12px"
            sx={{
              background: "url(/Card.png) no-repeat",
              backgroundSize: "100%",
            }}
          >
            <Stack m="1rem">
              <Typography
                fontSize="21px"
                letterSpacing="0.2em"
                fontWeight="300"
                mb="0.8rem"
              >
                0000 0000 0000 0000
              </Typography>
              <Stack
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography fontWeight="300" fontSize="14px">
                  JANE APPLESEED
                </Typography>
                <Typography fontWeight="300" fontSize="14px">
                  00/00
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      )}
    </>
  );
});

export default Card;
