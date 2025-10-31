'use client';
import UsageChart from '@/components/aquaguard/usage-chart';
import { dailyUsage, weeklyUsage, monthlyUsage } from '@/lib/mock-data';

export default function ChartsPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <section aria-labelledby="details-heading" className="space-y-6">
        <h1 id="details-heading" className="text-2xl font-bold tracking-tight">
          Detalles de Consumo
        </h1>
        <div className="grid gap-6 lg:grid-cols-2">
          <UsageChart data={dailyUsage} timeInterval="day" />
          <UsageChart data={weeklyUsage} timeInterval="week" />
          <div className="lg:col-span-2">
            <UsageChart data={monthlyUsage} timeInterval="month" />
          </div>
        </div>
      </section>
    </main>
  );
}
