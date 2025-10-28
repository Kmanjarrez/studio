import { Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="p-4 border-b border-border shadow-sm sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-lg">
          <Droplets className="size-6 text-primary" />
        </div>
        <h1 className="text-xl font-bold font-headline text-primary">
          AquaGuard
        </h1>
      </div>
    </header>
  );
}
