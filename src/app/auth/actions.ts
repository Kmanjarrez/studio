'use server';

import { z } from 'zod';
import { getAuth } from 'firebase-admin/auth';
import { initAdmin } from '@/lib/firebase/admin';

const authSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

async function firebaseSafeCall<T>(callback: () => Promise<T>): Promise<{ data: T; error: null } | { data: null; error: string }> {
  try {
    await initAdmin();
    const data = await callback();
    return { data, error: null };
  } catch (error: any) {
    console.error('Firebase Admin Error:', error.message);
    return { data: null, error: mapFirebaseAuthError(error.code) };
  }
}

export async function signUpUser(values: z.infer<typeof authSchema>) {
  const validated = authSchema.safeParse(values);
  if (!validated.success) {
    return { data: null, error: 'Datos de entrada inválidos.' };
  }
  const { email, password } = validated.data;
  return firebaseSafeCall(() => getAuth().createUser({ email, password }));
}

export async function signInUser(values: z.infer<typeof authSchema>) {
  // Note: signIn is client-side, this action is a placeholder and we need a way to create a session token.
  // For now, this just validates credentials on the server.
  const validated = authSchema.safeParse(values);
  if (!validated.success) {
      return { error: 'Datos de entrada inválidos.' };
  }
  // This is not a real sign in, Firebase client SDK handles that.
  // This is a conceptual server action. In a real app we'd create a session cookie.
  try {
    await initAdmin();
    // This just checks if the user exists, doesn't sign them in server-side
    const user = await getAuth().getUserByEmail(validated.data.email);
    // In a real app, you would verify password here, but Admin SDK doesn't do that.
    // The actual sign in happens on the client.
    return { success: true };
  } catch (error: any) {
    return { error: mapFirebaseAuthError(error.code) };
  }
}


function mapFirebaseAuthError(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-already-exists':
      return 'Este correo electrónico ya está en uso por otra cuenta.';
    case 'auth/user-not-found':
      return 'No se encontró ningún usuario con este correo electrónico.';
    case 'auth/wrong-password':
      return 'La contraseña es incorrecta. Por favor, inténtalo de nuevo.';
    case 'auth/invalid-email':
      return 'El formato del correo electrónico no es válido.';
    case 'auth/weak-password':
      return 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.';
    default:
      return 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.';
  }
}
