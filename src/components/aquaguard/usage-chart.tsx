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

type UsageChartProps = {
  data: { hour: string; consumption: number }[];
};

export default function UsageChart({ data }: UsageChartProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Consumo de Agua de Hoy</CardTitle>
        <CardDescription>Consumo por hora en Litros</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="h-[250px] w-full">
          <BarChart
            accessibilityLayer
            data={data}
            margin={{
              left: -20,
              top: 10
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="hour"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => (parseInt(value) % 2 === 0 ? `${value}` : '')}
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
