// Example usage
'use client'
import { useState } from "react";
import { CustomToast } from "./Toast";

export function ExampleComponent() {
  const [showToast, setShowToast] = useState(false);

  return (
    <div>
      <button 
        onClick={() => setShowToast(true)}
        className="px-4 py-2 bg-primary text-white rounded-lg"
      >
        Show Toast
      </button>

      {showToast && (
        <div className="fixed bottom-4 right-4 z-50 max-w-md w-full">
          <CustomToast
            message="Your action was completed successfully!"
            onClose={() => setShowToast(false)}
            type="success"
          />
        </div>
      )}
    </div>
  );
}