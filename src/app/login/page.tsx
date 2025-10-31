'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/firebase';
import { useToast } from "@/hooks/use-toast";
import {
  signInAnonymously,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  type AuthError,
} from 'firebase/auth';
import { User } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';

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
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M12 11.5a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5z" />
      <path d="M12 22V14" />
    </svg>
);

const GoogleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24px" height="24px" {...props}>
        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
        <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
        <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.223,0-9.655-3.373-11.303-8H6.306C9.656,35.663,16.318,40,24,40z" />
        <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.574l6.19,5.238C39.902,35.663,44,29.933,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
    </svg>
);

const formSchema = z.object({
  email: z.string().email({ message: 'Por favor ingresa un correo válido.' }),
  password: z.string().min(6, { message: 'La contraseña debe tener al menos 6 caracteres.' }),
});

export default function LoginPage() {
  const auth = useAuth();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<null | 'google' | 'anonymous' | 'email'>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: '', password: '' },
  });

  const handleAuthError = (error: AuthError) => {
    console.error("Authentication failed:", error);
    let description = 'Ocurrió un error inesperado. Inténtalo de nuevo.';
    if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
        description = 'Correo electrónico o contraseña incorrectos.';
    } else if (error.code === 'auth/email-already-in-use') {
        description = 'Este correo electrónico ya está registrado.';
    } else if (error.code === 'auth/popup-closed-by-user') {
        description = 'El proceso de inicio de sesión fue cancelado.';
    }
    toast({
        variant: "destructive",
        title: "Error de autenticación",
        description,
    });
  }

  const handleGoogleSignIn = () => {
    setIsLoading('google');
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .catch(handleAuthError)
      .finally(() => setIsLoading(null));
  };
  
  const handleAnonymousSignIn = () => {
    setIsLoading('anonymous');
    signInAnonymously(auth)
      .catch(handleAuthError)
      .finally(() => setIsLoading(null));
  };

  const onEmailSubmit = (values: z.infer<typeof formSchema>, isSignUp: boolean) => {
    setIsLoading('email');
    const authAction = isSignUp 
      ? createUserWithEmailAndPassword(auth, values.email, values.password)
      : signInWithEmailAndPassword(auth, values.email, values.password);

    authAction
      .catch(handleAuthError)
      .finally(() => setIsLoading(null));
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex items-center justify-center size-20 bg-primary/10 rounded-2xl">
            <WaterDropIcon />
          </div>
          <CardTitle className="text-2xl font-bold">Bienvenido a AquaGuard</CardTitle>
          <CardDescription>Elige un método para iniciar sesión.</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="email">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="email">Correo</TabsTrigger>
              <TabsTrigger value="social">Redes</TabsTrigger>
            </TabsList>
            <TabsContent value="email">
              <Form {...form}>
                <form className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Correo Electrónico</FormLabel>
                        <FormControl>
                          <Input placeholder="tu@correo.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Contraseña</FormLabel>
                        <FormControl>
                          <Input type="password" placeholder="••••••••" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                   <div className="flex gap-2">
                    <Button 
                      onClick={form.handleSubmit((values) => onEmailSubmit(values, false))} 
                      className="w-full"
                      disabled={isLoading === 'email'}
                    >
                      {isLoading === 'email' ? 'Ingresando...' : 'Iniciar Sesión'}
                    </Button>
                    <Button 
                      onClick={form.handleSubmit((values) => onEmailSubmit(values, true))} 
                      variant="secondary"
                      className="w-full"
                      disabled={isLoading === 'email'}
                    >
                       {isLoading === 'email' ? 'Creando...' : 'Registrarse'}
                    </Button>
                  </div>
                </form>
              </Form>
            </TabsContent>
            <TabsContent value="social" className="space-y-4">
               <Button className="w-full" onClick={handleGoogleSignIn} disabled={isLoading === 'google'}>
                 <GoogleIcon className="mr-2" />
                 {isLoading === 'google' ? 'Conectando...' : 'Continuar con Google'}
               </Button>
               <Button variant="secondary" className="w-full" onClick={handleAnonymousSignIn} disabled={isLoading === 'anonymous'}>
                <User className="mr-2" />
                {isLoading === 'anonymous' ? 'Ingresando...' : 'Ingresar como invitado'}
              </Button>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}
