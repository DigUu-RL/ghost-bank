'use client';

import { useAuth } from '@/hooks/auth/useAuth';
import { TAuth } from '@/types/contexts/auth';

const Home = () => {
  const { user }: TAuth = useAuth();

  return <>{}</>;
};

export default Home;
