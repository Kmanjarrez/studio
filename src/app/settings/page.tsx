'use client';

import { ThemeCustomizer } from '@/components/aquaguard/theme-customizer';

export default function SettingsPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <div className="mx-auto max-w-2xl">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Configuración
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
              Personaliza la apariencia de la aplicación a tu gusto.
            </p>
          </div>
          <ThemeCustomizer />
        </div>
      </div>
    </main>
  );
}
