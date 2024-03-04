'use client';

import PasswordInput from '@/components/PasswordInput';
// ** MATERIAL UI
import { Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';

// ** REACT
import { FormEvent } from 'react';

interface IFormProps {
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const Form = ({ handleSubmit }: IFormProps) => {
  return (
    <Card sx={{ margin: '0 auto', marginTop: '10%' }}>
      <form onSubmit={handleSubmit}>
        <CardHeader title={<>Dados pessoais</>} />

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <TextField fullWidth required label='Nome' placeholder='Informe o nome' name='firstName' type='text' />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                required
                label='Sobrenome'
                placeholder='Informe o Sobrenome'
                name='lastName'
                type='text'
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth required label='CPF' placeholder='Informe o CPF' name='cpf' type='text' />
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField fullWidth label='CNPJ' placeholder='Informe o CNPJ' name='cnpj' type='text' />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                required
                label='Nome de usuário'
                placeholder='Informe o nome de usuário'
                name='email'
                type='email'
              />
            </Grid>

            <Grid item xs={12}>
              <TextField fullWidth required label='E-mail' placeholder='Informe o e-mail' name='userName' type='text' />
            </Grid>

            <Grid item xs={12} md={6}>
              {<PasswordInput fullWidth required label='Senha' placeholder='Informe a senha' onChange={() => {}} />}
            </Grid>

            <Grid item xs={12} md={6}>
              <PasswordInput
                fullWidth
                required
                label='Confirmação da senha'
                placeholder='Informe a confirmação da senha'
                onChange={() => {}}
              />
            </Grid>
          </Grid>
        </CardContent>
      </form>
    </Card>
  );
};

export default Form;
