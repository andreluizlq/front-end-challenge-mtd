import { Controller } from "react-hook-form";
import { Stack, Grid } from "@mui/material";
import LabelFields from "./LabelFields";
import InputForm from "./InputForm";

const Form = ({ methods, handleOnFocus, handleOnBlur }) => {
  return (
    <Stack>
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <LabelFields title="CARDHOLDER NAME" />
          <Controller
            name="name"
            control={methods.control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <InputForm
                {...field}
                fullWidth
                size="small"
                placeholder="e.g. Jane Appleseed"
                error={Boolean(error)}
                helperText={error?.message}
                inputProps={{ maxLength: 40 }}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <LabelFields title="CARD NUMBER" />
          <Controller
            name="number"
            control={methods.control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <>
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
          <LabelFields title="EXP.DATE (MM/YY)" />
          <Stack flexDirection="row">
            <Grid item xs={6} mr="0.75rem">
              <Controller
                name="mm"
                control={methods.control}
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
                    inputProps={{ maxLength: 2 }}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Controller
                name="yy"
                control={methods.control}
                rules={{ required: true }}
                render={({ field, fieldState: { error } }) => (
                  <InputForm
                    {...field}
                    fullWidth
                    mask="99"
                    size="small"
                    placeholder="YY"
                    error={Boolean(error)}
                    helperText={error?.message}
                    inputProps={{ maxLength: 2 }}
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
            control={methods.control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <InputForm
                {...field}
                fullWidth
                mask="999"
                placeholder="e.g. 523"
                size="small"
                onFocus={handleOnFocus}
                onBlur={handleOnBlur}
                error={Boolean(error)}
                helperText={error?.message}
                inputProps={{ maxLength: 30 }}
              />
            )}
          />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default Form;
