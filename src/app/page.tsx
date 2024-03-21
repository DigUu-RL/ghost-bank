'use client';

// ** NEXT
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// ** HOOKS
import { useAuth } from '@/hooks/auth/useAuth';

// ** TYPES
import { TAuth } from '@/types/contexts/auth';

// ** PAGES
import Home from './home/page';

const Index = () => {
  const { push }: AppRouterInstance = useRouter();
  const { user }: TAuth = useAuth();

  if (!user) {
    push('/login');
    return;
  }

  return <Home />;
};

export default Index;
