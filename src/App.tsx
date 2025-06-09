import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { AppRoutes } from "@/routes";
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
      <div className="p-4 rounded-lg bg-destructive/10 border border-destructive">
        <h2 className="text-lg font-semibold mb-2">Something went wrong:</h2>
        <pre className="text-sm text-destructive">{error.message}</pre>
      </div>
    </div>
  );
}

const App = () => {
  // Check if user prefers dark mode
  React.useEffect(() => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Toaster />
            <Sonner />
            <AppRoutes />
          </ErrorBoundary>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
