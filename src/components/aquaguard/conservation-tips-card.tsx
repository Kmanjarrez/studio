'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { getConservationTips } from '@/app/actions';
import { Lightbulb, Sparkles } from 'lucide-react';
import { ScrollArea } from '@/components/ui/scroll-area';

type ConservationTipsCardProps = {
  historicalData: any[];
};

export default function ConservationTipsCard({
  historicalData,
}: ConservationTipsCardProps) {
  const [tips, setTips] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleGetTips = async () => {
    setIsLoading(true);
    setIsDialogOpen(true);
    const generatedTips = await getConservationTips(historicalData);
    setTips(generatedTips);
    setIsLoading(false);
  };

  return (
    <>
      <Card className="bg-primary/10 border-primary/20 transition-all hover:shadow-md hover:-translate-y-1">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium text-primary">
            Consejos de Ahorro por IA
          </CardTitle>
          <Lightbulb className="size-6 text-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-xs text-primary/80 mb-3">
            Recibe consejos personalizados para ahorrar agua según tu consumo.
          </p>
          <Button onClick={handleGetTips} className="w-full" size="sm">
            <Sparkles className="mr-2 size-4" />
            Generar Consejos
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Tus Consejos Personalizados para Ahorrar Agua</DialogTitle>
            <DialogDescription>
              Según tu consumo reciente, aquí tienes algunas formas de ahorrar agua:
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-72 w-full rounded-md border p-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Generando consejos...</p>
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                {tips}
              </div>
            )}
          </ScrollArea>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Cerrar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
