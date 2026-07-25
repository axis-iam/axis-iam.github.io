[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / useIam

# Function: useIam()

> **useIam**(): `object`

Access the full IAM user context — identity, roles, permissions, org.

## Returns

### actorId

> **actorId**: `string` \| `undefined` = `user.actorId`

The impersonating admin's ID (if impersonation)

### isAuthenticated

> **isAuthenticated**: `boolean`

Whether user is authenticated

### isImpersonating

> **isImpersonating**: `boolean`

Whether the session is an impersonation

### isLoaded

> **isLoaded**: `boolean`

SDK initialization complete

### orgId

> **orgId**: `string` \| `undefined` = `user.orgId`

Current organization ID

### orgRole

> **orgRole**: `string` \| `undefined` = `user.orgRole`

User's role in current organization

### orgSlug

> **orgSlug**: `string` \| `undefined` = `user.orgSlug`

Current organization slug

### permissions

> **permissions**: `string`[]

User's permissions (resource:action format)

### roles

> **roles**: `string`[]

User's roles

### user

> **user**: [`IamUser`](../interfaces/IamUser.md) \| `null`

Current user object

## Example

```tsx
function Dashboard() {
  const { user, roles, permissions, isAuthenticated } = useIam()
  if (!isAuthenticated) return <p>Please log in</p>
  return <p>Hello {user.email}, you have {permissions.length} permissions</p>
}
```
