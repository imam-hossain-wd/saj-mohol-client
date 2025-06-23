
import { Loader2 } from 'lucide-react';

export function PageLoading() {
  return (
    <div className="fixed inset-0 z-50 bg-white/80 backdrop-blur-sm flex items-center justify-center">
      <div className="text-center space-y-4">
        <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto" />
        <h3 className="text-lg font-medium text-gray-900">Loading beauty...</h3>
        <p className="text-sm text-gray-500">Your perfect look is coming soon</p>
      </div>
    </div>
  );
}