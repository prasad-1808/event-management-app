import { useAuth } from 'react-oidc-context';
import { useEffect } from 'react';

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const oidc = useAuth();

  useEffect(() => {
    if (!oidc.isLoading && !oidc.isAuthenticated) {
      oidc.signinRedirect(); // redirect to Keycloak or OIDC login
    }
  }, [oidc.isLoading, oidc.isAuthenticated, oidc]);

  if (oidc.isLoading) return <p>Loading...</p>;

  if (!oidc.isAuthenticated) {
    return null;
  }

  return <>{children}</>
  
};