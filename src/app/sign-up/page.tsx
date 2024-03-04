'use client';

// ** MATERIAL UI
import { Grid } from '@mui/material';

// ** REACT
import { FormEvent } from 'react';

// ** VIEWS
import Form from '@/views/forms/identity/user/form';

const SignUp = () => {
  // * handles
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    alert('enviado');
  };

  return (
    <Grid container>
      <Form handleSubmit={handleSubmit} />
    </Grid>
  );
};

export default SignUp;
