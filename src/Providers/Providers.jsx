'use client';

import { AppProvider } from "@/context/app-context";



export function Providers({ children }) {
  return (
    <AppProvider>
      {children}
    </AppProvider>
  );
}