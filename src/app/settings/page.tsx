'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';

export default function SettingsPage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 space-y-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
      <div className="space-y-6">
        <h1 className="text-2xl font-bold tracking-tight">Configuración</h1>

        <Card>
          <CardHeader>
            <CardTitle>Perfil</CardTitle>
            <CardDescription>
              Actualiza la información de tu perfil.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input id="name" defaultValue="Usuario AquaGuard" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" defaultValue="usuario@example.com" />
            </div>
            <Button>Guardar Cambios</Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Notificaciones</CardTitle>
            <CardDescription>
              Gestiona cómo recibes las notificaciones.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label className="text-base">Notificaciones Push</Label>
                    <p className="text-sm text-muted-foreground">
                        Recibe alertas directamente en tu dispositivo.
                    </p>
                </div>
                <Switch defaultChecked />
            </div>
             <div className="flex items-center justify-between rounded-lg border p-4">
                <div className="space-y-0.5">
                    <Label className="text-base">Resumen por Email</Label>
                    <p className="text-sm text-muted-foreground">
                        Recibe un resumen semanal de tu consumo.
                    </p>
                </div>
                <Switch />
            </div>
          </CardContent>
        </Card>

        <Card>
            <CardHeader>
                <CardTitle>Valores de Alerta</CardTitle>
                <CardDescription>
                    Define los umbrales para las alertas de alto consumo o fugas.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="leak-threshold">Umbral de Fuga (L/min)</Label>
                    <Input id="leak-threshold" type="number" defaultValue="0.5" />
                     <p className="text-xs text-muted-foreground pt-1">
                        Flujo continuo por encima de este valor (durante más de 30 min) activará una alerta de fuga.
                    </p>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="usage-threshold">Umbral de Alto Consumo (Litros/día)</Label>
                    <Input id="usage-threshold" type="number" defaultValue="250" />
                     <p className="text-xs text-muted-foreground pt-1">
                        El consumo diario por encima de este valor activará una notificación.
                    </p>
                </div>
                 <Button>Guardar Umbrales</Button>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
