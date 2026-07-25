[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / useImpersonation

# Function: useImpersonation()

> **useImpersonation**(): `object`

Detect and manage impersonation sessions.
When an admin impersonates a user, the JWT contains an `act` claim
with `sub` (admin ID) and `session_id` (impersonation session).

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
