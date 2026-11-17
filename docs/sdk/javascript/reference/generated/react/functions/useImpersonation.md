[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / useImpersonation

# Function: useImpersonation()

> **useImpersonation**(): `object`

Detect and manage impersonation sessions.
Reads the authenticated API context and its exact impersonation ID.

## Returns

`object`

### actorId

> **actorId**: `string` \| `undefined`

### endImpersonation

> **endImpersonation**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### isImpersonating

> **isImpersonating**: `boolean`

### sessionId

> **sessionId**: `string` \| `undefined`

## Example

```tsx
const { isImpersonating, actorId, endImpersonation } = useImpersonation()
if (isImpersonating) {
  return <Banner>Admin {actorId} is impersonating you</Banner>
}
```
