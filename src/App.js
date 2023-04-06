import { Stack, Grid, Container, Box, useMediaQuery } from "@mui/material";
import Card from "./components/Card";
import Form from "./components/Form";

const App = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));

  return (
    <Grid container width="100vw" height="100vh">
      <Grid
        item
        xs={12}
        lg={4}
        sx={{
          background: "url(/Frame.png) no-repeat",
          backgroundSize: "cover",
        }}
      >
        {!isMobile && (
          <Stack justifyContent="center" height="100%" alignItems="end">
            <Card sx={{ mr: "-10rem" }} />
          </Stack>
        )}
        {isMobile && (
          <Stack justifyContent="end" height="100%" alignItems="center">
            <Card sx={{ mb: "-4rem" }} />
          </Stack>
        )}
      </Grid>
      <Grid item xs={12} lg={8}>
        <Stack justifyContent={{ xs: "center", lg: "center" }} height="100%">
          <Container>
            <Stack alignItems="center">
              <Box maxWidth="23rem" pt="6rem">
                <Form />
              </Box>
            </Stack>
          </Container>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
