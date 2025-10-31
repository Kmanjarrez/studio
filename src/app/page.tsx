'use client';
import KpiCard from '@/components/aquaguard/kpi-card';
import ValveControl from '@/components/aquaguard/valve-control';
import UsageChart from '@/components/aquaguard/usage-chart';
import AlertsCard from '@/components/aquaguard/alerts-card';
import ConservationTipsCard from '@/components/aquaguard/conservation-tips-card';
import {
  dailyUsage,
  weeklyUsage,
  monthlyUsage,
  alerts,
} from '@/lib/mock-data';
import { Droplets, Zap, BarChart, Bell } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function Dashboard() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3 max-w-lg mx-auto">
          <TabsTrigger value="overview">
            <Droplets className="mr-2" />
            Vista General
          </TabsTrigger>
          <TabsTrigger value="charts">
            <BarChart className="mr-2" />
            Gráficas
          </TabsTrigger>
          <TabsTrigger value="alerts">
            <Bell className="mr-2" />
            Alertas
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <section
            aria-labelledby="overview-heading"
            className="space-y-6"
          >
            <h2 id="overview-heading" className="sr-only">
              Resumen
            </h2>
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
                <AlertsCard alerts={alerts.slice(0,2)} />
            </div>
          </section>
        </TabsContent>
        <TabsContent value="charts">
          <section
            aria-labelledby="details-heading"
            className="space-y-6"
          >
            <h2 id="details-heading" className="sr-only">
              Detalles de Consumo
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <UsageChart data={dailyUsage} timeInterval="day" />
              <UsageChart data={weeklyUsage} timeInterval="week" />
              <div className="lg:col-span-2">
                <UsageChart data={monthlyUsage} timeInterval="month" />
              </div>
            </div>
          </section>
        </TabsContent>
         <TabsContent value="alerts">
          <section
            aria-labelledby="alerts-heading"
          >
             <h2 id="alerts-heading" className="sr-only">
              Alertas y Notificaciones
            </h2>
            <AlertsCard alerts={alerts} />
          </section>
        </TabsContent>
      </Tabs>
    </main>
  );
}
