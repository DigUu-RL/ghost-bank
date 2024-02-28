'use client';

// ** NEXT
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// ** HOOKS
import { useAuth } from '@/hooks/auth/useAuth';

// ** TYPES
import { TAuth } from '@/types/contexts/auth';

const Index = () => {
  const router: AppRouterInstance = useRouter();
  const { user }: TAuth = useAuth();

  const url = user ? '/home' : '/login';

  router.push(url);
};

export default Index;
