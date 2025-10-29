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
  consumption: number;
};

type UsageChartProps = {
  data: UsageData[];
  timeInterval: 'day' | 'week';
};

export default function UsageChart({ data, timeInterval }: UsageChartProps) {
  const isWeekly = timeInterval === 'week';
  const dataKey = isWeekly ? 'day' : 'hour';

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isWeekly ? 'Consumo Semanal de Agua' : 'Consumo de Agua de Hoy'}
        </CardTitle>
        <CardDescription>
          {isWeekly
            ? 'Consumo diario en Litros durante la última semana'
            : 'Consumo por hora en Litros'}
        </CardDescription>
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
                if (isWeekly) return value;
                return parseInt(value) % 2 === 0 ? `${value}` : '';
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
