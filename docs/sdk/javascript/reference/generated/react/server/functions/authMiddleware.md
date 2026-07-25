[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [server](../README.md) / authMiddleware

# Function: authMiddleware()

> **authMiddleware**(`config`): (`request`) => `Promise`\<`Response` \| `undefined`\>

Next.js middleware for bearer-token route guarding.

Unauthenticated protected routes use a limited legacy handoff to the
iam-server login page. This middleware does not generate or store OAuth
state, does not generate or store a PKCE verifier, does not send
code_challenge/code_challenge_method, and does not perform a confidential
token exchange callback.

Java IAM now requires WEB authorization-code clients to use confidential
client authentication plus S256 PKCE. This middleware is therefore not a
complete WEB browser login helper. Use @axis-iam/vertex-react with a SPA
public client for browser login, or implement a dedicated WEB/BFF login flow
with server-side state/verifier storage, S256 PKCE, and client-secret token
endpoint authentication.

## Parameters

### config

[`AuthMiddlewareConfig`](../interfaces/AuthMiddlewareConfig.md)

## Returns

(`request`) => `Promise`\<`Response` \| `undefined`\>

## Example

```ts
// middleware.ts
import { authMiddleware } from '@axis-iam/vertex-react/server'
export default authMiddleware({
  clientId: process.env.IAM_CLIENT_ID!,
  clientSecret: process.env.IAM_CLIENT_SECRET!,
  issuerUri: 'https://auth.example.com',
  publicRoutes: ['/', '/about'],
  protectedRoutes: ['/dashboard(.*)'],
})
```
