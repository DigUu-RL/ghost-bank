'use client';

import { useAuth } from '@/hooks/auth/useAuth';
import { TAuth } from '@/types/contexts/auth';

const Home = () => {
  const auth: TAuth = useAuth();

  return <>Home</>;
};

export default Home;
