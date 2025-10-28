import Header from '@/components/aquaguard/header';
import KpiCard from '@/components/aquaguard/kpi-card';
import ValveControl from '@/components/aquaguard/valve-control';
import UsageChart from '@/components/aquaguard/usage-chart';
import AlertsCard from '@/components/aquaguard/alerts-card';
import ConservationTipsCard from '@/components/aquaguard/conservation-tips-card';
import { dailyUsage, weeklyUsage, alerts } from '@/lib/mock-data';
import { Droplets, Zap } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8">
        <section aria-labelledby="overview-heading">
          <h2 id="overview-heading" className="sr-only">
            Overview
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 animate-in fade-in-0 slide-in-from-top-4 duration-500">
            <KpiCard
              title="Current Flow"
              value="5.2"
              unit="L/min"
              icon={<Droplets className="size-6 text-accent" />}
            />
            <KpiCard
              title="Today's Usage"
              value="120.5"
              unit="Litres"
              icon={<Zap className="size-6 text-accent" />}
            />
            <ValveControl />
            <ConservationTipsCard historicalData={weeklyUsage} />
          </div>
        </section>
        <section aria-labelledby="details-heading">
          <h2 id="details-heading" className="sr-only">
            Consumption Details
          </h2>
          <div className="grid gap-6 lg:grid-cols-5 animate-in fade-in-0 slide-in-from-top-8 duration-700">
            <div className="lg:col-span-3">
              <UsageChart data={dailyUsage} />
            </div>
            <div className="lg:col-span-2">
              <AlertsCard alerts={alerts} />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
