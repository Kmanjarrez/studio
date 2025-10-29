import { Droplets } from 'lucide-react';

export default function Header() {
  return (
    <header className="p-4 border-b border-border/50 shadow-sm sticky top-0 bg-background/80 backdrop-blur-sm z-10">
      <div className="container mx-auto flex items-center gap-3">
        <div className="bg-primary/10 p-2 rounded-lg">
           <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-6 text-primary"
          >
            <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
            <path d="M12 12v10" />
          </svg>
        </div>
        <h1 className="text-xl font-bold font-headline text-primary">
          AquaGuard
        </h1>
      </div>
    </header>
  );
}
