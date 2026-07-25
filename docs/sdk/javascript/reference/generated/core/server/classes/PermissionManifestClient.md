[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / PermissionManifestClient

# Class: PermissionManifestClient

## Constructors

### Constructor

> **new PermissionManifestClient**(`config`): `PermissionManifestClient`

#### Parameters

##### config

[`PermissionManifestClientConfig`](../interfaces/PermissionManifestClientConfig.md)

#### Returns

`PermissionManifestClient`

## Methods

### clearTokenCache()

> **clearTokenCache**(): `void`

#### Returns

`void`

***

### upsert()

> **upsert**(`manifest`, `idempotencyKey`, `options?`): `Promise`\<[`PermissionManifestResult`](../interfaces/PermissionManifestResult.md)\>

#### Parameters

##### manifest

[`PermissionManifest`](../interfaces/PermissionManifest.md)

##### idempotencyKey

`string`

##### options?

[`PermissionManifestRequestOptions`](../interfaces/PermissionManifestRequestOptions.md) = `{}`

#### Returns

`Promise`\<[`PermissionManifestResult`](../interfaces/PermissionManifestResult.md)\>

***

### validate()

> **validate**(`manifest`, `options?`): `Promise`\<[`PermissionManifestResult`](../interfaces/PermissionManifestResult.md)\>

#### Parameters

##### manifest

[`PermissionManifest`](../interfaces/PermissionManifest.md)

##### options?

[`PermissionManifestRequestOptions`](../interfaces/PermissionManifestRequestOptions.md) = `{}`

#### Returns

`Promise`\<[`PermissionManifestResult`](../interfaces/PermissionManifestResult.md)\>
