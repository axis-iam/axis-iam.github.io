[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / HttpPermissionResolver

# Class: HttpPermissionResolver

HTTP-based permission resolver with LRU caching.
Calls POST /open/v1/permissions:resolve on cache miss.

## Implements

- [`PermissionResolver`](../../index/interfaces/PermissionResolver.md)

## Constructors

### Constructor

> **new HttpPermissionResolver**(`client`, `config`): `HttpPermissionResolver`

#### Parameters

##### client

[`IamClient`](IamClient.md)

##### config

`Pick`\<[`IamSdkConfig`](../interfaces/IamSdkConfig.md), `"permissionCacheTtlMs"` \| `"permissionCacheMax"` \| `"clientId"` \| `"failMode"`\>

#### Returns

`HttpPermissionResolver`

## Methods

### clear()

> **clear**(): `void`

Invalidate all cached entries

#### Returns

`void`

***

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

#### Implementation of

[`PermissionResolver`](../../index/interfaces/PermissionResolver.md).[`resolve`](../../index/interfaces/PermissionResolver.md#resolve)
