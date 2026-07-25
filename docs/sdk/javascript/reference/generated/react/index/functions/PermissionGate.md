[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / PermissionGate

# Function: PermissionGate()

> **PermissionGate**(`__namedParameters`): `Element`

Conditionally render children based on permission check.

## Parameters

### \_\_namedParameters

[`PermissionGateProps`](../interfaces/PermissionGateProps.md)

## Returns

`Element`

## Example

```tsx
<PermissionGate permission="orders:read" fallback={<p>No access</p>}>
  <OrderList />
</PermissionGate>
```
