'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { useUser } from '@/firebase';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { LogOut } from 'lucide-react';
import { useAuth } from '@/firebase';
import { signOut } from 'firebase/auth';

function getInitials(name: string | null | undefined) {
    if (!name) return 'AG';
    const parts = name.split(' ');
    if (parts.length > 1) {
        return parts[0][0] + parts[parts.length - 1][0];
    }
    return name.substring(0, 2);
}


export default function Header() {
  const { user } = useUser();
  const auth = useAuth();

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <header className="p-4 border-b border-border/50 shadow-sm sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center justify-between gap-4">
        <div className='flex items-center gap-4'>
            <SidebarTrigger className="md:hidden" />
            <div>
            <h1 className="text-xl font-bold text-foreground">
                Hola, {user?.displayName || 'Guardián del Agua'}
            </h1>
            <p className="text-sm text-muted-foreground">Cada gota cuenta. ¡Revisa tu consumo de hoy!</p>
            </div>
        </div>

        <div className="flex items-center gap-4">
            <Avatar>
                <AvatarImage src={user?.photoURL || ''} alt={user?.displayName || 'Usuario'} />
                <AvatarFallback>{getInitials(user?.displayName)}</AvatarFallback>
            </Avatar>
             <button onClick={handleSignOut} className="text-muted-foreground hover:text-foreground">
                <LogOut className="size-5" />
                <span className="sr-only">Cerrar Sesión</span>
            </button>
        </div>
      </div>
    </header>
  );
}
