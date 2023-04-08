import { useState, forwardRef } from "react";
import InputMask from "react-input-mask";
import { TextField, Typography, Stack, Select, MenuItem } from "@mui/material";
import InfoIcon from "@mui/icons-material/Error";

const InputForm = forwardRef(
  (
    {
      children,
      label,
      onChange,
      value,
      required = false,
      select = false,
      onFocus,
      onBlur,
      placeholder,
      error,
      helperText,
      mask,
      type,
      maskChar,
      ...other
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState(value || null);
    const [focused, setFocused] = useState(false);

    const handleChange = (event) => {
      const newValue =
        type === "number"
          ? event.target.value.replace(/\D/g, "")
          : event.target.value;
      setInputValue(newValue);
      if (onChange) {
        event.target.value = newValue;
        onChange(event);
      }
    };

    const handleOnFocus = (event) => {
      setFocused(true);
      if (onFocus) onFocus(event);
    };
    const handleOnBlur = (event) => {
      setFocused(false);
      if (onBlur) onBlur(event);
    };

    return (
      <>
        {/*COMMENT: Não utilizei todas as variantes desenvolvidas para o componente, entretanto deixei salvo no código para demostrar melhor meus conheciemntos na criação de componentes genéricos*/}
        {(!!inputValue || focused) && (
          <Typography variant="subtitle2" color="primary">
            {label}
          </Typography>
        )}
        {!select && !mask && (
          <TextField
            ref={ref}
            type={type === "number" ? undefined : type}
            value={value}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            placeholder={placeholder}
            error={error}
            {...other}
          />
        )}
        {!select && !!mask && (
          <InputMask
            ref={ref}
            value={value}
            maskChar={maskChar ? maskChar : ""}
            type={type === "number" ? undefined : type}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            mask={mask}
            {...other}
          >
            {(props) => (
              <TextField
                placeholder={placeholder}
                error={error}
                {...other}
                {...props}
              />
            )}
          </InputMask>
        )}
        {select && (
          <Select
            ref={ref}
            type={type === "number" ? undefined : type}
            value={value || "none"}
            onChange={handleChange}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            error={error}
            {...other}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="none" disabled>
              <Typography variant="body1" color="#919EAB">
                {placeholder}
              </Typography>
            </MenuItem>

            {children}
          </Select>
        )}
        {error && (
          <Stack direction="row" spacing={0.3} mt="0.646rem">
            <InfoIcon color="error" sx={{ fontSize: "1rem", mt: "1px" }} />
            <Typography variant="caption" color="error">
              {helperText}
            </Typography>
          </Stack>
        )}
      </>
    );
  }
);

export default InputForm;
