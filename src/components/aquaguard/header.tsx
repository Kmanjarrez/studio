'use client';

import { SidebarTrigger } from '@/components/ui/sidebar';
import { format } from 'date-fns';
import { es } from 'date-fns/locale';

export default function Header() {
  const today = format(new Date(), "eeee, d 'de' MMMM", { locale: es });

  return (
    <header className="p-4 border-b border-border/50 shadow-sm sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        <div>
          <h1 className="text-xl font-bold text-foreground">
            Hola,
          </h1>
          <p className="text-sm text-muted-foreground">Cada gota cuenta. ¡Revisa tu consumo de hoy!</p>
        </div>
      </div>
    </header>
  );
}
