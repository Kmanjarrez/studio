'use client';
import { 
  onAuthStateChanged, 
  User, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut as firebaseSignOut 
} from 'firebase/auth';
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { auth } from '@/lib/firebase/client';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  signUpWithEmail: (email: string, password: string) => Promise<any>;
  signInWithEmail: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  signUpWithEmail: async () => {},
  signInWithEmail: async () => {},
  signOut: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  
  const signUpWithEmail = (email: string, password: string): Promise<any> => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmail = (email: string, password: string): Promise<any> => {
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signOut = (): Promise<void> => {
    return firebaseSignOut(auth);
  }

  return (
    <AuthContext.Provider value={{ user, loading, signUpWithEmail, signInWithEmail, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
