'use client';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Power } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ValveControl() {
  const [isValveOpen, setIsValveOpen] = useState(true);

  return (
    <Card className="transition-all hover:shadow-md hover:-translate-y-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">Main Valve</CardTitle>
        <Power className="size-6 text-accent" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center justify-between space-x-2">
          <div className="flex-1">
            <div className="text-2xl font-bold">{isValveOpen ? 'Open' : 'Closed'}</div>
            <p className="text-xs text-muted-foreground">
              {isValveOpen ? 'Water supply is active' : 'Water supply is off'}
            </p>
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="valve-switch" className="sr-only">
              Main water valve switch
            </Label>
            <Switch
              id="valve-switch"
              checked={isValveOpen}
              onCheckedChange={setIsValveOpen}
              className={cn(
                isValveOpen ? 'data-[state=checked]:bg-primary' : 'data-[state=unchecked]:bg-destructive'
              )}
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
