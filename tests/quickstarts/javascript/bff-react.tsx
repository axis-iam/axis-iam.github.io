import {ConnectedAppSessionTransport} from '@axis-iam/vertex';
import {IamProvider, SignIn} from '@axis-iam/vertex-react';

const transport = new ConnectedAppSessionTransport({
  origin: 'https://app.example.com',
  basePath: '/auth',
});

export function BffApp() {
  return (
    <IamProvider
      issuerUri="https://auth.example.com"
      clientId="your-web-client-id"
      redirectUri="https://app.example.com/auth/callback"
      sessionMode="server_session"
      sessionTransport={transport}
      sessionLoginUri="/auth/login"
      sessionProviderReturnUri="https://app.example.com/signed-in"
    >
      <SignIn mode="redirect" />
    </IamProvider>
  );
}
