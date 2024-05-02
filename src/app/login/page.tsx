'use client';

// ** MATERIAL UI
import {
  Backdrop,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CircularProgress,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';

// ** REACT
import { MutableRefObject, useContext, useRef, useState } from 'react';

// ** CONTEXTS
import { AuthContext } from '@/contexts/auth/AuthContext';

// ** COMPONENTS
import PasswordInput from '@/components/PasswordInput';

const Login = () => {
  // * contexts
  const authContext = useContext(AuthContext);

  // * states
  const [loading, setLoading] = useState<boolean>(false);

  // * refs
  const loginRef: MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
  const passwordRef: MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

  // * handles
  const handleLogin = (): void => {
    setLoading(true);

    authContext.login({
      login: loginRef.current?.value,
      password: passwordRef.current?.value
    });

    setLoading(false);
  };

  return (
    <Grid container>
      <Card sx={{ margin: 'auto', marginTop: '10%' }}>
        <CardHeader
          title={
            <Box component='span' sx={{ textAlign: 'center' }} fontWeight='bold'>
              <Typography fontSize={32}>Ghost Bank</Typography>
            </Box>
          }
          subheader={
            <Box component='span' sx={{ textAlign: 'center' }}>
              <Typography fontSize={14}>O banco que faz tudo por você</Typography>
            </Box>
          }
        />

        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
              <TextField fullWidth label='Login' placeholder='Digite seu login' type='text' inputRef={loginRef} />
            </Grid>

            <Grid item xs={12} md={12}>
              <PasswordInput fullWidth label='Senha' placeholder='Digite sua senha' inputRef={passwordRef} />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <CardActions>
          <Button fullWidth variant='outlined' color='secondary' size='large' onClick={handleLogin}>
            Autenticar
          </Button>
        </CardActions>
      </Card>

      {loading && (
        <Backdrop
          open={loading}
          sx={{
            color: '#fff',
            zIndex: theme => theme.zIndex.drawer + 1
          }}
        >
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </Grid>
  );
};

export default Login;
