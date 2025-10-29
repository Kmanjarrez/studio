import Header from '@/components/aquaguard/header';
import KpiCard from '@/components/aquaguard/kpi-card';
import ValveControl from '@/components/aquaguard/valve-control';
import UsageChart from '@/components/aquaguard/usage-chart';
import AlertsCard from '@/components/aquaguard/alerts-card';
import ConservationTipsCard from '@/components/aquaguard/conservation-tips-card';
import { weeklyUsage, alerts } from '@/lib/mock-data';
import { Droplets, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="sr-only">
            Resumen
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in-0 slide-in-from-top-4 duration-500">
            <KpiCard
              title="Flujo Actual"
              value="5.2"
              unit="L/min"
              icon={<Droplets className="size-6 text-accent" />}
            />
            <KpiCard
              title="Consumo de Hoy"
              value="120.5"
              unit="Litros"
              icon={<Zap className="size-6 text-accent" />}
            />
            <ValveControl />
            <ConservationTipsCard historicalData={weeklyUsage} />
          </div>
        </section>
        <section aria-labelledby="details-heading">
          <h2 id="details-heading" className="sr-only">
            Detalles de Consumo
          </h2>
          <div className="grid gap-6 lg:grid-cols-1 animate-in fade-in-0 slide-in-from-top-8 duration-700">
            <div className="lg:col-span-1">
              <UsageChart data={weeklyUsage} timeInterval="week" />
            </div>
            <div className="lg:col-span-1">
              <AlertsCard alerts={alerts} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
