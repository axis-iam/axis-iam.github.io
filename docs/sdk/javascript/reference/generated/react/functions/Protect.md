[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / Protect

# Function: Protect()

> **Protect**(`__namedParameters`): `Element`

Shorthand for PermissionGate without fallback.

## Parameters

### \_\_namedParameters

#### children

`ReactNode`

#### permission

`string` \| [`PermissionKey`](../interfaces/PermissionKey.md)

## Returns

`Element`

## Example

```tsx
<Protect permission="orders:create">
  <button>Create Order</button>
</Protect>
```
