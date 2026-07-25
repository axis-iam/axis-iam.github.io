[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / PermissionResolver

# Interface: PermissionResolver

Interface for resolving permissions from roles

## Methods

### resolve()

> **resolve**(`appId`, `roles`): `Promise`\<`Set`\<`string`\>\>

Resolve permissions for given app + roles.
Returns a Set of permission authority strings ("resource:action").

#### Parameters

##### appId

`string`

##### roles

`string`[]

#### Returns

`Promise`\<`Set`\<`string`\>\>
