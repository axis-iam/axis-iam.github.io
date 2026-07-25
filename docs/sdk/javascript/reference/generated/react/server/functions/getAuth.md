[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [server](../README.md) / getAuth

# Function: getAuth()

> **getAuth**(`request`, `options?`): [`AuthResult`](../interfaces/AuthResult.md)

Extract auth information from a request's Authorization header.
Decodes the JWT client-side (no signature verification — that's the server's job
before the request reaches your handler). Final permissions are not read from
JWT claims; pass resolved permissions explicitly when this helper should
evaluate route-level permissions.

## Parameters

### request

`Request`

### options?

[`GetAuthOptions`](../interfaces/GetAuthOptions.md) = `{}`

## Returns

[`AuthResult`](../interfaces/AuthResult.md)

## Example

```ts
// Next.js API Route
import { getAuth } from '@axis-iam/vertex-react/server'

export async function GET(request: Request) {
  const auth = getAuth(request, { permissions: resolvedPermissions })
  if (!auth.userId) return Response.json({ error: 'Unauthorized' }, { status: 401 })
  if (!auth.hasPermission('orders:read')) return Response.json({ error: 'Forbidden' }, { status: 403 })
}
```
