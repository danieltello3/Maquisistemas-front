import { BaseSelectProps, InputLabel, MenuItem, OutlinedSelectProps, Select } from "@mui/material";
import { ComboSelect } from "../../../../models/combo.model";

interface LabeledInputProps {
  selectProps: BaseSelectProps;
  required?: boolean;
  options: ComboSelect[];
}

const LabeledInput: React.FC<LabeledInputProps> = ({ selectProps, required, options }) => {
  const { id, label } = selectProps;
  return (
    <div style={{ width: "100%" }}>
      {label && (
        <InputLabel htmlFor={id} required={required}>
          {label}
        </InputLabel>
      )}
      <Select variant="outlined" id={id} fullWidth required={required} {...selectProps} label={null} defaultValue={1}>
        {options?.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </div>
  );
};

export default LabeledInput;