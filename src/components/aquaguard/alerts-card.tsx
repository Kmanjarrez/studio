import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { Bell, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

type Alert = {
  id: number;
  type: 'warning' | 'info';
  message: string;
  time: string;
};

type AlertsCardProps = {
  alerts: Alert[];
};

const alertIcons = {
  warning: <ShieldAlert className="size-5 text-destructive" />,
  info: <CheckCircle2 className="size-5 text-primary" />,
};

const alertColors = {
  warning: 'bg-destructive/10',
  info: 'bg-primary/10',
};

export default function AlertsCard({ alerts }: AlertsCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Notificaciones</CardTitle>
        <CardDescription>Alertas y actualizaciones recientes sobre tu consumo de agua.</CardDescription>
      </CardHeader>
      <CardContent>
        {alerts.length > 0 ? (
          <ul className="space-y-4">
            {alerts.map((alert) => (
              <li key={alert.id} className="flex items-start gap-4">
                <div
                  className={cn(
                    'p-2 rounded-full',
                    alertColors[alert.type]
                  )}
                >
                  {alertIcons[alert.type]}
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{alert.message}</p>
                  <p className="text-xs text-muted-foreground">{alert.time}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-center text-muted-foreground py-8">
            <Bell className="mx-auto size-12" />
            <p className="mt-4">No hay notificaciones nuevas.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
