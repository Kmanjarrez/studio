'use client';

import { useUser } from '@/firebase';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

export function AuthLayout({ children }: { children: React.ReactNode }) {
  const { user, isUserLoading } = useUser();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (isUserLoading) {
      // Don't redirect while loading
      return;
    }

    const isAuthPage = pathname === '/login';

    if (!user && !isAuthPage) {
      router.replace('/login');
    } else if (user && isAuthPage) {
      router.replace('/');
    }
  }, [user, isUserLoading, pathname, router]);

  if (isUserLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Cargando...</p>
      </div>
    );
  }
  
  // Show login page without the main app layout
  if (pathname === '/login') {
    return <>{children}</>;
  }
  
  // If user is logged in, show the main app layout
  if (user) {
    return <>{children}</>;
  }

  // If no user and not on login, we are in a redirect state, render nothing.
  return null;
}
