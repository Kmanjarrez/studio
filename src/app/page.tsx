'use client';
import KpiCard from '@/components/aquaguard/kpi-card';
import ValveControl from '@/components/aquaguard/valve-control';
import AlertsCard from '@/components/aquaguard/alerts-card';
import ConservationTipsCard from '@/components/aquaguard/conservation-tips-card';
import UsageChart from '@/components/aquaguard/usage-chart';
import {
  dailyUsage,
  weeklyUsage,
  monthlyUsage,
  alerts,
} from '@/lib/mock-data';
import { Droplets, Zap } from 'lucide-react';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

export default function Dashboard() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <Tabs defaultValue="overview">
        <TabsList className="mb-6">
          <TabsTrigger value="overview">Vista General</TabsTrigger>
          <TabsTrigger value="charts">Gráficas</TabsTrigger>
          <TabsTrigger value="alerts">Alertas</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-8">
          <section aria-labelledby="overview-heading" className="space-y-6">
            <h1
              id="overview-heading"
              className="text-2xl font-bold tracking-tight sr-only"
            >
              Vista General
            </h1>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              <ConservationTipsCard historicalData={weeklyUsage} />
              <AlertsCard alerts={alerts.slice(0, 2)} />
            </div>
          </section>
        </TabsContent>
        <TabsContent value="charts" className="space-y-8">
           <section aria-labelledby="details-heading" className="space-y-6">
              <h1 id="details-heading" className="text-2xl font-bold tracking-tight sr-only">
                Detalles de Consumo
              </h1>
              <div className="grid gap-6 lg:grid-cols-2">
                <UsageChart data={dailyUsage} timeInterval="day" />
                <UsageChart data={weeklyUsage} timeInterval="week" />
                <UsageChart data={monthlyUsage} timeInterval="month" />
              </div>
            </section>
        </TabsContent>
        <TabsContent value="alerts" className="space-y-8">
            <section aria-labelledby="alerts-heading" className="space-y-6">
                <h1 id="alerts-heading" className="text-2xl font-bold tracking-tight sr-only">
                    Alertas y Notificaciones
                </h1>
                <AlertsCard alerts={alerts} />
            </section>
        </TabsContent>
      </Tabs>
    </main>
  );
}
