'use client';

// ** MATERIAL UI
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';

// ** REACT
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';

// ** NEXT
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { useRouter } from 'next/navigation';

// ** CONTEXTS
import { AuthContext } from '@/contexts/auth/AuthContext';

// ** TYPES
import { TUser } from '@/types/identity/user';
import { TAccessToken } from '@/types/identity';
import { AppDispatch } from '@/store';

// ** COMPONENTS
import PasswordInput from '@/components/PasswordInput';

// ** STORES
import { me, signIn } from '@/store/api/auth';
import { TError } from '@/types/api';

const Login = () => {
  // * contexts
  const authContext = useContext(AuthContext);

  // * hooks
  const dispatch = useDispatch<AppDispatch>();
  const router: AppRouterInstance = useRouter();

  // * states
  const [loading, setLoading] = useState<boolean>(false);
  const [login, setLogin] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [user, setUser] = useState<TUser | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<TAccessToken | undefined>(undefined);

  // * handles
  const handleLogin = () => {
    setLoading(true);

    if (login === '') {
      toast.error('É obrigatório informar o login');
      setLoading(false);

      return;
    }

    if (password === '') {
      toast.error('É obrigatório informar a senha');
      setLoading(false);

      return;
    }

    dispatch(
      signIn({
        login,
        password
      })
    )
      .unwrap()
      .then(response => setAccessToken(response))
      .catch(error => {
        toast.error(`Ocorreu um erro ao se autenticar: ${error}`);
      });

    setLoading(false);
  };

  useEffect(() => {
    if (accessToken) {
      setLoading(true);

      dispatch(
        me({
          accessToken: accessToken.token!
        })
      )
        .unwrap()
        .then(response => setUser(response))
        .catch(error => toast.error(`Ocorreu um erro ao se autenticar: ${error}`));

      setLoading(false);
    }
  }, [accessToken]);

  useEffect(() => {
    setLoading(true);

    if (!accessToken || !user) {
      setLoading(false);
      return;
    }

    authContext.setAccessToken!(accessToken);
    authContext.setUser!(user);

    setLoading(false);

    router.push('/home');
  }, [user]);

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
              <TextField
                label='Login'
                placeholder='Digite seu login'
                type='text'
                fullWidth
                onChange={(event: ChangeEvent<HTMLInputElement>) => setLogin(event.target.value)}
              />
            </Grid>

            <Grid item xs={12} md={12}>
              <PasswordInput
                label='Senha'
                placeholder='Digite sua senha'
                onChange={(event: ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider />

        <CardActions>
          <Button fullWidth variant='outlined' color='secondary' size='large' onClick={handleLogin} disabled={loading}>
            {!loading ? 'Autenticar' : 'Aguarde...'}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Login;
