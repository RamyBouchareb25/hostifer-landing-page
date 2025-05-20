import type React from "react";
import { AlertTriangle } from "lucide-react";

export default function ApiLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col">
      <div className="bg-red-100 border-b border-red-200">
        <div className="container px-4 md:px-6 py-3">
          <div className="flex items-center gap-2 text-red-800">
            <AlertTriangle className="h-5 w-5" />
            <p className="text-sm font-medium">
              The AlgCloud API is still under development and not yet deployed.
              This documentation is for preview purposes only.
            </p>
          </div>
        </div>
      </div>
      <main className="flex-1">{children}</main>
    </div>
  );
}
