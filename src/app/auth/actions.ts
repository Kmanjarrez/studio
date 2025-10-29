'use server';

function mapFirebaseAuthError(errorCode: string): string {
  switch (errorCode) {
    case 'auth/email-already-in-use':
      return 'Este correo electrónico ya está en uso por otra cuenta.';
    case 'auth/user-not-found':
      return 'No se encontró ningún usuario con este correo electrónico.';
    case 'auth/wrong-password':
    case 'auth/invalid-credential':
      return 'La contraseña es incorrecta. Por favor, inténtalo de nuevo.';
    case 'auth/invalid-email':
      return 'El formato del correo electrónico no es válido.';
    case 'auth/weak-password':
      return 'La contraseña es demasiado débil. Debe tener al menos 6 caracteres.';
    default:
      return 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.';
  }
}

// This function can be used by client components if they need to map an error code.
// As we are moving logic to the client, we export it.
export async function getFirebaseAuthError(errorCode: string) {
    return mapFirebaseAuthError(errorCode);
}
