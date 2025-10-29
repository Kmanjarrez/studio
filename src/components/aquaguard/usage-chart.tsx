'use client';

import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from 'recharts';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';

const chartConfig = {
  consumption: {
    label: 'Consumo (L)',
    color: 'hsl(var(--primary))',
  },
} satisfies ChartConfig;

type UsageData = {
  hour?: string;
  day?: string;
  week?: string;
  consumption: number;
};

type UsageChartProps = {
  data: UsageData[];
  timeInterval: 'day' | 'week' | 'month';
};

const intervalConfig = {
  day: {
    title: 'Consumo de Agua de Hoy',
    description: 'Consumo por hora en Litros',
    dataKey: 'hour',
  },
  week: {
    title: 'Consumo Semanal de Agua',
    description: 'Consumo diario en Litros durante la última semana',
    dataKey: 'day',
  },
  month: {
    title: 'Consumo Mensual de Agua',
    description: 'Consumo semanal en Litros durante el último mes',
    dataKey: 'week',
  },
};

export default function UsageChart({ data, timeInterval }: UsageChartProps) {
  const config = intervalConfig[timeInterval];
  const dataKey = config.dataKey as keyof UsageData;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{config.title}</CardTitle>
        <CardDescription>{config.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              left: -20,
              top: 10,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dataKey}
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                if (timeInterval === 'day') {
                  return parseInt(value) % 3 === 0 ? `${value}h` : '';
                }
                return value;
              }}
            />
            <YAxis
              stroke="hsl(var(--muted-foreground))"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              tickMargin={10}
              unit="L"
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Bar
              dataKey="consumption"
              fill="var(--color-consumption)"
              radius={4}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
