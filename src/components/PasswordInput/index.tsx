// ** MATERIAL UI
import { FormControl, InputLabel, OutlinedInput, InputAdornment, IconButton } from '@mui/material';
import { VisibilityOff, Visibility } from '@mui/icons-material';

// ** REACT
import { ChangeEvent, useState } from 'react';

interface PasswordInputProps {
  label: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  fullWidth?: boolean;
  required?: boolean;
}

const PasswordInput = ({ label, placeholder, onChange, fullWidth, required }: PasswordInputProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <FormControl fullWidth={fullWidth} required={required}>
      <InputLabel>{label}</InputLabel>

      <OutlinedInput
        label={label}
        placeholder={placeholder}
        type={showPassword ? 'text' : 'password'}
        fullWidth
        required={required}
        onChange={onChange}
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
