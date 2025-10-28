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
            AI Conservation Tips
          </CardTitle>
          <Lightbulb className="size-6 text-primary" />
        </CardHeader>
        <CardContent>
          <p className="text-xs text-primary/80 mb-3">
            Get personalized tips to save water based on your usage.
          </p>
          <Button onClick={handleGetTips} className="w-full" size="sm">
            <Sparkles className="mr-2 size-4" />
            Generate Tips
          </Button>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Your Personalized Water Saving Tips</DialogTitle>
            <DialogDescription>
              Based on your recent consumption, here are some ways you can save water:
            </DialogDescription>
          </DialogHeader>
          <ScrollArea className="h-72 w-full rounded-md border p-4">
            {isLoading ? (
              <div className="flex items-center justify-center h-full">
                <p className="text-muted-foreground">Generating tips...</p>
              </div>
            ) : (
              <div className="whitespace-pre-wrap text-sm text-muted-foreground">
                {tips}
              </div>
            )}
          </ScrollArea>
          <DialogFooter>
            <Button onClick={() => setIsDialogOpen(false)}>Close</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
