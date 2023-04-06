import { useForm, Controller } from "react-hook-form";
import LoadingButton from "@mui/lab/LoadingButton";
import { Stack, Grid } from "@mui/material";
import LabelFields from "./LabelFields";
import { enqueueSnackbar } from "notistack";
import { useState } from "react";
import InputForm from "./InputForm";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const Form = () => {
  const FormSchema = Yup.object()
    .shape({
      name: Yup.string().required("Name is required"),
      number: Yup.string()
        .min(19, "Card number requires 16 digits.")
        .required("Card number is required"),
      cvc: Yup.string()
        .min(3, "Requires 3 digits.")
        .required("CVC is mandatory"),
    })
    .required();

  const [loading, setLoading] = useState(false);
  const { control, handleSubmit, reset } = useForm({
    mode: "onChange",
    resolver: yupResolver(FormSchema),
    defaultValues: {
      name: "",
      number: "",
      MM: "",
      YY: "",
      cvc: "",
    },
  });

  const onSubmit = (values) => {
    setLoading(true);
    setTimeout(() => {
      if (values) {
        setLoading(true);
        reset({
          name: "",
          number: "",
          MM: "",
          YY: "",
          cvc: "",
        });
        setLoading(false);
        enqueueSnackbar("Cadastrado com sucesso", {
          variant: "success",
        });
      }
    }, 1000);
  };

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <LabelFields title="CARDHOLDER NAME" />
          <Controller
            name="name"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <InputForm
                {...field}
                fullWidth
                size="small"
                placeholder="e.g. Jane Appleseed"
                error={Boolean(error)}
                helperText={error?.message}
                inputProps={{ maxLength: 60 }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LabelFields title="CARD NUMBER" />
          <Controller
            name="number"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <>
                {console.log(error)}
                <InputForm
                  {...field}
                  fullWidth
                  mask="9999 9999 9999 9999"
                  size="small"
                  placeholder="e.g. 1234 5678 9123 0000"
                  error={Boolean(error)}
                  helperText={error?.message}
                  inputProps={{ maxLength: 30 }}
                />
              </>
            )}
          />
        </Grid>
        <Grid item xs={6}>
          <LabelFields title="EXP. DATE (MM/YY)" />
          <Stack flexDirection="row">
            <Grid xs={6} mr="12px">
              <Controller
                name="MM"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <InputForm
                    {...field}
                    fullWidth
                    size="small"
                    mask="99"
                    placeholder="MM"
                    error={Boolean(error)}
                    helperText={error?.message}
                    inputProps={{ maxLength: 30 }}
                  />
                )}
              />
            </Grid>
            <Grid xs={6}>
              <Controller
                name="YY"
                control={control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <InputForm
                    {...field}
                    fullWidth
                    mask="9999"
                    size="small"
                    placeholder="YY"
                    error={Boolean(error)}
                    helperText={error?.message}
                    inputProps={{ maxLength: 30 }}
                  />
                )}
              />
            </Grid>
          </Stack>
        </Grid>
        <Grid item xs={6}>
          <LabelFields title="CVC" />
          <Controller
            name="cvc"
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <InputForm
                {...field}
                fullWidth
                mask="999"
                placeholder="e.g. 523"
                size="small"
                error={Boolean(error)}
                helperText={error?.message}
                inputProps={{ maxLength: 30 }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Form;
