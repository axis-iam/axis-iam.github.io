[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / matchPermission

# Function: matchPermission()

> **matchPermission**(`userPerm`, `required`): `boolean`

Check if a user permission matches a required permission.
Supports wildcard: "orders:*" matches "orders:read", "orders:create", etc.

## Parameters

### userPerm

`string`

A permission the user has (e.g. "orders:*")

### required

`string`

The permission being checked (e.g. "orders:read")

## Returns

`boolean`
