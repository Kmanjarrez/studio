'use client';
import GameCard from '@/components/aquaguard/game-card';
import { waterSavingQuestions } from '@/lib/game-data';

export default function GamePage() {
  return (
    <main className="flex-1 p-4 md:p-6 lg:p-8 animate-in fade-in-0 slide-in-from-top-4 duration-500">
       <div className="mx-auto max-w-2xl">
         <div className="text-center mb-8">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Juego: Gota a Gota
            </h1>
            <p className="mt-2 text-lg text-muted-foreground">
                ¡Pon a prueba tus conocimientos sobre el ahorro de agua y aprende a ser un héroe del agua!
            </p>
        </div>
        <GameCard questions={waterSavingQuestions} />
       </div>
    </main>
  );
}
