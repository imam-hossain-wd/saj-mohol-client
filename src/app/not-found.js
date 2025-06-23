// app/not-found.js
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Frown } from 'lucide-react';


export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-gray-50 px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex items-center justify-center bg-primary/10 p-6 rounded-full">
          <Frown className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 font-playfair">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800">Page Not Found</h2>
        <p className="text-gray-500">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild className="gap-2 mt-6">
          <Link href="/">
            Return Home <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}