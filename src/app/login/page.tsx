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
import { MutableRefObject, useContext, useEffect, useRef, useState } from 'react';
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

const Login = () => {
  // * contexts
  const authContext = useContext(AuthContext);

  // * hooks
  const dispatch = useDispatch<AppDispatch>();
  const { push }: AppRouterInstance = useRouter();

  // * states
  const [loading, setLoading] = useState<boolean>(false);
  const [user, setUser] = useState<TUser | undefined>(undefined);
  const [accessToken, setAccessToken] = useState<TAccessToken | undefined>(undefined);

  // * refs
  const loginRef: MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();
  const passwordRef: MutableRefObject<HTMLInputElement | undefined> = useRef<HTMLInputElement>();

  // * handles
  const handleLogin = (): void => {
    setLoading(true);

    if (!loginRef.current!.value) {
      toast.error('É obrigatório informar o login');
      setLoading(false);

      return;
    }

    if (!passwordRef.current!.value) {
      toast.error('É obrigatório informar a senha');
      setLoading(false);

      return;
    }

    dispatch(
      signIn({
        login: loginRef.current!.value,
        password: passwordRef.current!.value
      })
    )
      .unwrap()
      .then(response => {
        setLoading(false);
        setAccessToken(response);
      })
      .catch(error => {
        setLoading(false);
        toast.error(`Ocorreu um erro ao se autenticar: ${error}`);
      });
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
        .then(response => {
          setLoading(false);
          setUser(response);
        })
        .catch(error => {
          setLoading(false);
          toast.error(`Ocorreu um erro ao se autenticar: ${error}`);
        });
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

    push('/home');
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
        <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }} open={loading}>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </Grid>
  );
};

export default Login;
