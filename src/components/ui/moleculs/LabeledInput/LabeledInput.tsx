import { BaseTextFieldProps, TextField, InputLabel, FormControl, Grid } from "@mui/material";

interface LabeledInputProps {
  BaseTextFieldProps: BaseTextFieldProps;
  required?: boolean;
}

const LabeledInput: React.FC<LabeledInputProps> = ({ BaseTextFieldProps, required }) => {
  const { id, label } = BaseTextFieldProps;
  return (
    <Grid item style={{ width: "100%" }} md={6} xs={12}>
      {label && (
        <InputLabel htmlFor={id} required={required}>
          {label}
        </InputLabel>
      )}
      <TextField id={id} fullWidth required={required} {...BaseTextFieldProps} label={null}/>
    </Grid>
  );
};

export default LabeledInput;
