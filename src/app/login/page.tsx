'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/firebase';
import { signInAnonymously } from 'firebase/auth';
import { User } from 'lucide-react';

const WaterDropIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-10 text-primary"
    >
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 0 0 7 7z" />
      <path d="M12 12v10" />
    </svg>
  );

export default function LoginPage() {
  const auth = useAuth();

  const handleAnonymousSignIn = () => {
    signInAnonymously(auth).catch((error) => {
      console.error("Anonymous sign-in failed:", error);
    });
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center size-20 bg-primary/10 rounded-2xl">
            <WaterDropIcon />
          </div>
          <CardTitle className="text-2xl font-bold">Bienvenido a AquaGuard</CardTitle>
          <CardDescription>Inicia sesión para empezar a monitorear y ahorrar agua.</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
             {/* TODO: Add email/password and Google sign-in */}
            <Button className="w-full" onClick={handleAnonymousSignIn}>
              <User className="mr-2" />
              Ingresar como invitado
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
