import express from 'express';
import {MemorySessionProvider} from '@axis-iam/vertex/server';
import {createBff, getBffUser} from '@axis-iam/vertex-express';

export function createApp() {
  const app = express();
  const provider = new MemorySessionProvider({workers: 1, replicas: 1});
  const bff = createBff({
    provider,
    issuer: process.env.IAM_ENDPOINT!,
    audience: process.env.IAM_RESOURCE_AUDIENCE!,
    clientId: process.env.IAM_WEB_CLIENT_ID!,
    clientSecret: process.env.IAM_WEB_CLIENT_SECRET!,
    applicationOrigin: 'https://app.example.com',
    redirectUri: 'https://app.example.com/auth/callback',
    successRedirect: '/signed-in',
    postLogoutRedirect: '/signed-out',
    scopes: ['openid', 'profile'],
  });
  app.use(bff.basePath, bff.router);
  app.get('/api/me', bff.requireSession, (request, response) => {
    response.json({userId: getBffUser(request)!.id});
  });
  return {app, close: () => provider.close()};
}
