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
  const router: AppRouterInstance = useRouter();
  const { user }: TAuth = useAuth();

  if (!user) {
    router.push('/login');
    return;
  }

  return <Home />;
};

export default Index;
