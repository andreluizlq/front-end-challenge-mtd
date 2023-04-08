import { Stack, Grid, Box, useMediaQuery } from "@mui/material";
import Card from "./components/Card";
import Form from "./components/Form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { enqueueSnackbar } from "notistack";
import LoadingButton from "@mui/lab/LoadingButton";

const App = () => {
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  const [focused, setFocused] = useState(false);
  const [loading, setLoading] = useState(false);

  const FormSchema = Yup.object()
    .shape({
      name: Yup.string().required("Name is required"),
      number: Yup.string()
        .min(19, "Card number requires 16 digits.")
        .required("Card number is required"),

      yy: Yup.string()
        .required("Year is required")
        .test(
          "",
          "Invalid month",
          (value) => new Date().getFullYear() % 1000 < parseInt(value)
        ),
      mm: Yup.string()
        .required("Month is required")
        .test(
          "",
          "invalid",
          (value) => parseInt(value) < 13 && parseInt(value) > 0
        ),
      cvc: Yup.string()
        .min(3, "Requires 3 digits.")
        .required("CVC is mandatory"),
    })
    .required();

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: "",
      number: "",
      mm: "",
      yy: "",
      cvc: "",
    },
  });

  const watchAllFields = methods.watch();

  const handleOnFocus = () => {
    setFocused(true);
  };

  const handleOnBlur = () => {
    setFocused(false);
  };

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      if (values) {
        setLoading(true);
        methods.reset({
          name: "",
          number: "",
          mm: "",
          yy: "",
          cvc: "",
        });
        setLoading(false);
        enqueueSnackbar("Cadastrado com sucesso", {
          variant: "success",
          style: { fontFamily: "sans-serif" },
        });
      }
    }, 1000);
  };

  return (
    <Grid
      container
      width="100vw"
      height="100vh"
      component="form"
      onSubmit={methods.handleSubmit(onSubmit)}
    >
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
            <Card sx={{ mr: "-10rem" }} values={watchAllFields} />
          </Stack>
        )}
        {isMobile && (
          <Stack justifyContent="end" height="100%" alignItems="center">
            <Card
              sx={{ mb: "-4rem" }}
              isMobile
              values={watchAllFields}
              focused={focused}
            />
          </Stack>
        )}
      </Grid>
      <Grid item xs={12} lg={8} p="2rem">
        <Stack
          height="100%"
          justifyContent={{ xs: "space-between", lg: "center" }}
        >
          <Stack alignItems="center" width="100%">
            <Box maxWidth="23rem" pt={{ xs: "6rem", lg: 0 }}>
              <Form
                methods={methods}
                loading={loading}
                handleOnFocus={handleOnFocus}
                handleOnBlur={handleOnBlur}
                onSubmit={onSubmit}
              />
            </Box>
          </Stack>
          <Stack alignItems="center" mt={{ xs: 0, lg: 4 }}>
            <Box width="23rem">
              <LoadingButton
                loading={loading}
                variant="contained"
                size="large"
                type="submit"
                fullWidth
                sx={{ textTransform: "capitalize" }}
              >
                Confirm
              </LoadingButton>
            </Box>
          </Stack>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default App;
