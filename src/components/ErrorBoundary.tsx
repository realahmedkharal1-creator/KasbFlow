import { ErrorBoundary as ReactErrorBoundary } from "react-error-boundary";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { ReactNode } from "react";

function ErrorFallback({ resetErrorBoundary }: { resetErrorBoundary: () => void }) {
  return (
    <div className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <div className="w-20 h-20 bg-red-100 dark:bg-red-900/20 rounded-full flex items-center justify-center text-red-500 mb-6">
        <AlertCircle size={40} />
      </div>
      <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 dark:text-white mb-4">
        Something went wrong
      </h2>
      <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-md">
        We're sorry, but the page you were looking for encountered an error.
      </p>
      <Link 
        to="/" 
        className="bg-brand-accent hover:bg-brand-accent/90 text-white dark:text-neutral-900 px-8 py-3 rounded-full font-bold transition-all hover:scale-105"
        onClick={resetErrorBoundary}
      >
        Return Home
      </Link>
    </div>
  );
}

export default function ErrorBoundary({ children }: { children: ReactNode }) {
  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback}>
      {children}
    </ReactErrorBoundary>
  );
}
