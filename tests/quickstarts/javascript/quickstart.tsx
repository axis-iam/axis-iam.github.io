import {IamProvider, SignIn, useAuth} from '@axis-iam/vertex-react';

function Session() {
  const {isAuthenticated, user, logout} = useAuth();
  if (!isAuthenticated) return <SignIn />;
  return <button onClick={() => void logout({redirect: true})}>Sign out {user?.name}</button>;
}

export function App() {
  return (
    <IamProvider
      issuerUri="https://auth.example.com"
      clientId="your-spa-public-client-id"
      redirectUri="https://app.example.com/callback"
      postLogoutRedirectUri="https://app.example.com/signed-out"
    >
      <Session />
    </IamProvider>
  );
}
