'use client';

// ** NEXT
import { useRouter } from 'next/navigation';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

// ** HOOKS
import { useAuth } from '@/hooks/auth/useAuth';

// ** TYPES
import { TAuth } from '@/types/contexts/auth';

const Index = () => {
  // * hooks
  const { push }: AppRouterInstance = useRouter();
  const { user }: TAuth = useAuth();

  push(user ? '/home' : '/login');
};

export default Index;
