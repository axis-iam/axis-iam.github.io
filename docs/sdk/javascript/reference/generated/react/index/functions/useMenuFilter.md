[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / useMenuFilter

# Function: useMenuFilter()

> **useMenuFilter**\<`T`\>(`items`): `T`[]

Filter menu items based on the current user's permissions.
Items without a `permission` field are always included.
Recursively filters `children`.

## Type Parameters

### T

`T` *extends* [`MenuItem`](../interfaces/MenuItem.md)

## Parameters

### items

`T`[]

## Returns

`T`[]

## Example

```tsx
const menu = [
  { path: '/dashboard', label: 'Dashboard' },
  { path: '/orders', label: 'Orders', permission: 'orders:read' },
  { path: '/admin', label: 'Admin', permission: 'admin:access' },
]
const filtered = useMenuFilter(menu)
// If user has ["orders:read"], filtered = [dashboard, orders]
```
