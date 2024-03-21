// ** MATERIAL UI
import { FormControl, InputLabel, OutlinedInput, InputAdornment } from '@mui/material';

// ** REACT
import { ChangeEvent, MutableRefObject, ReactNode } from 'react';

interface IconInputProps {
  fullWidth?: boolean;
  label: string;
  placeholder: string;
  type: string;
  icon: ReactNode;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
}

const IconInput = ({ fullWidth, label, placeholder, type, icon, onChange, inputRef }: IconInputProps): JSX.Element => {
  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel>{label}</InputLabel>

      <OutlinedInput
        fullWidth
        label={label}
        placeholder={placeholder}
        type={type}
        onChange={onChange}
        inputRef={inputRef}
        endAdornment={<InputAdornment position='end'>{icon}</InputAdornment>}
      />
    </FormControl>
  );
};

export default IconInput;
