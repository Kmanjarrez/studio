'use server';

// This file is kept for potential future server-side auth logic,
// but the client-side mapping has been moved to the respective pages.
export async function getFirebaseAuthError(errorCode: string) {
    // This function is deprecated for client-side use.
    // Error mapping is now handled directly in the login/register components.
    return 'Ha ocurrido un error inesperado. Por favor, inténtalo de nuevo más tarde.';
}
