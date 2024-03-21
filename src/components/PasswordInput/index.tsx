// ** MATERIAL UI
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

// ** REACT
import { ChangeEvent, MutableRefObject, useState } from 'react';

interface PasswordInputProps {
  fullWidth?: boolean;
  required?: boolean;
  label: string;
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  inputRef?: MutableRefObject<HTMLInputElement | undefined>;
}

const PasswordInput = ({
  fullWidth,
  required,
  label,
  placeholder,
  onChange,
  inputRef
}: PasswordInputProps): JSX.Element => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl fullWidth={fullWidth} required={required}>
      <InputLabel>{label}</InputLabel>

      <OutlinedInput
        fullWidth
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        required={required}
        onChange={onChange}
        inputRef={inputRef}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton onClick={() => setShowPassword(prev => !prev)} edge='end'>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
};

export default PasswordInput;
