[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / usePermission

# Function: usePermission()

> **usePermission**(`permission`): `boolean`

Check if the current user has a specific permission.

## Parameters

### permission

`string` \| `PermissionKey`

## Returns

`boolean`

## Example

```tsx
function CreateButton() {
  const allowed = usePermission('orders:create')
  if (!allowed) return null
  return <button>Create Order</button>
}
```
