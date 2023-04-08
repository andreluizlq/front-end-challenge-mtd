import { forwardRef } from "react";
import { Typography, Stack, Box, styled } from "@mui/material";
import CodCard from "../assets/CodCard";

const StyledBox = styled((props) => <Stack {...props} />)(({ theme }) => ({
  width: "100%",
  height: "100%",
  transition: "all 0.9s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  transformStyle: "preserve-3d",
  position: "relative",
}));

const Card = forwardRef(
  ({ values, isMobile = false, focused = false, sx, ...other }, ref) => {
    return (
      <>
        {!isMobile && (
          <Box position="fixed" {...other} sx={sx} ref={ref}>
            <Box>
              <Stack
                width="450px"
                height="238px"
                justifyContent="end"
                color="#fff"
                borderRadius="12px"
                sx={{
                  background: "url(/Card.png) no-repeat",
                  backgroundSize: "100%",
                }}
              >
                <Stack m="1.5rem">
                  <Typography
                    fontSize="1.6rem"
                    letterSpacing="0.2em"
                    fontWeight="300"
                    mb="0.8rem"
                  >
                    {values.number ? values.number : "0000 0000 0000 0000"}
                  </Typography>
                  <Stack
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                  >
                    <Typography
                      fontWeight="300"
                      fontSize="1rem"
                      textTransform="uppercase"
                    >
                      {values.name ? values.name : "your name here"}
                    </Typography>
                    <Typography fontWeight="300" fontSize="1rem">
                      {values.mm ? values.mm : "00"}/
                      {values.yy ? values.yy : "00"}
                    </Typography>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Box ml="4.4rem" mt="3rem">
              <Stack
                width="450px"
                height="238px"
                borderRadius="12px"
                sx={{
                  background:
                    "linear-gradient(98.33deg, #FCF9FB 0%, #D3D4D8 99.59%)",
                }}
              >
                <Stack mt="2rem">
                  <Box mb="0.4rem" p="1.6rem" sx={{ background: "#2F2F2F" }} />

                  <Stack
                    alignItems="end"
                    mx="3rem"
                    my="0.8rem"
                    p="0.4rem"
                    borderRadius="4px"
                    sx={{ background: "#AAB5BE" }}
                  >
                    <Typography
                      mr="1rem"
                      color="#fff"
                      fontSize="1.1rem"
                      fontWeight="300"
                    >
                      {values.cvc ? values.cvc : "000"}
                    </Typography>
                  </Stack>
                  <Stack alignItems="center" mt="1rem">
                    <CodCard />
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </Box>
        )}
        {isMobile && (
          <Box {...other} sx={sx} ref={ref}>
            <Box
              width="340px"
              height="180px"
              sx={{ perspective: "60em", cursor: "pointer" }}
            >
              <StyledBox
                sx={{
                  transform: focused ? "rotateY(180deg)" : "rotateY(0)",
                  "&:hover, &:active": {
                    transform: "rotateY(180deg)",
                  },
                }}
              >
                <Stack
                  width="inherit"
                  height="inherit"
                  justifyContent="end"
                  color="#fff"
                  borderRadius="12px"
                  position="absolute"
                  sx={{
                    background: "url(/Card.png) no-repeat",
                    backgroundSize: "100%",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Stack m="1rem">
                    <Typography
                      fontSize="1.3rem"
                      letterSpacing="0.2em"
                      fontWeight="300"
                      mb="0.8rem"
                    >
                      {values.number ? values.number : "0000 0000 0000 0000"}
                    </Typography>
                    <Stack
                      flexDirection="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        fontWeight="300"
                        fontSize="0.9rem"
                        textTransform="uppercase"
                      >
                        {values.name ? values.name : "your name here"}
                      </Typography>
                      <Typography fontWeight="300" fontSize="0.9rem">
                        {values.mm ? values.mm : "00"}/
                        {values.yy ? values.yy : "00"}
                      </Typography>
                    </Stack>
                  </Stack>
                </Stack>

                <Stack
                  borderRadius="12px"
                  width="inherit"
                  height="inherit"
                  position="absolute"
                  sx={{
                    background:
                      "linear-gradient(98.33deg, #FCF9FB 0%, #D3D4D8 99.59%)",
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <Stack mt="1rem">
                    <Box
                      mb="0.4rem"
                      p="1.4rem"
                      sx={{ background: "#2F2F2F" }}
                    />

                    <Stack
                      alignItems="end"
                      mx="3rem"
                      my="0.9rem"
                      p="0.2rem"
                      borderRadius="4px"
                      sx={{ background: "#AAB5BE" }}
                    >
                      <Typography mr="1rem" color="#fff" fontWeight="300">
                        {values.cvc ? values.cvc : "000"}
                      </Typography>
                    </Stack>
                    <Stack alignItems="center" mt="0.8rem">
                      <CodCard />
                    </Stack>
                  </Stack>
                </Stack>
              </StyledBox>
            </Box>
          </Box>
        )}
      </>
    );
  }
);

export default Card;
