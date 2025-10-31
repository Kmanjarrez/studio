'use client';
import AlertsCard from '@/components/aquaguard/alerts-card';
import { alerts } from '@/lib/mock-data';

export default function AlertsPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <section aria-labelledby="alerts-heading" className="space-y-6">
        <h1 id="alerts-heading" className="text-2xl font-bold tracking-tight">
          Alertas y Notificaciones
        </h1>
        <AlertsCard alerts={alerts} />
      </section>
    </main>
  );
}
