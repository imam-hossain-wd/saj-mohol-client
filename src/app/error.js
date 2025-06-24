'use client';

import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { AlertTriangle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-rose-50 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center bg-rose-100 p-6 rounded-full">
          <AlertTriangle className="h-12 w-12 text-rose-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 font-playfair">Oops!</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Something went wrong</h2>
        <p className="text-gray-500">
          We're working to fix the issue. Please try again later.
        </p>
        <div className="flex gap-4 justify-center mt-6">
          <Button variant="outline" onClick={() => reset()}>
            Try Again
          </Button>
          <Button asChild className="gap-2">
            <Link href="/">
              Go Home <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}