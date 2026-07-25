[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / IamModuleConfig

# Interface: IamModuleConfig

## Extends

- `IamSdkConfig`

## Properties

### clientId

> **clientId**: `string`

ApplicationClient.clientId. Server-side packages should use a WEB/M2M confidential client.

#### Inherited from

`IamSdkConfig.clientId`

***

### clientSecret

> **clientSecret**: `string`

WEB/M2M confidential ApplicationClient secret (server-side only, never expose to browser)

#### Inherited from

`IamSdkConfig.clientSecret`

***

### endpoint

> **endpoint**: `string`

IAM server endpoint (e.g. https://auth.example.com)

#### Inherited from

`IamSdkConfig.endpoint`

***

### failMode?

> `optional` **failMode?**: `"open"` \| `"close"`

Behavior when permission resolution fails (default: 'close')

#### Inherited from

`IamSdkConfig.failMode`

***

### jwksRefreshMs?

> `optional` **jwksRefreshMs?**: `number`

JWKS cache duration in ms (default: 3600000 = 1 hour)

#### Inherited from

`IamSdkConfig.jwksRefreshMs`

***

### permissionCacheMax?

> `optional` **permissionCacheMax?**: `number`

Permission cache max entries (default: 10000)

#### Inherited from

`IamSdkConfig.permissionCacheMax`

***

### permissionCacheTtlMs?

> `optional` **permissionCacheTtlMs?**: `number`

Permission cache TTL in ms (default: 300000 = 5 min)

#### Inherited from

`IamSdkConfig.permissionCacheTtlMs`

***

### permissionManifest?

> `optional` **permissionManifest?**: `object`

#### manifest

> **manifest**: `PermissionManifest`

#### portalApiEndpoint

> **portalApiEndpoint**: `string`

#### startup?

> `optional` **startup?**: `PermissionManifestStartupOptions`

***

### resolveMode?

> `optional` **resolveMode?**: `"full-sync"` \| `"on-demand"`

Permission resolve mode (default: 'on-demand')

#### Inherited from

`IamSdkConfig.resolveMode`

***

### resourceAudience

> **resourceAudience**: `string`

Application.resourceAudience. Used to verify access-token aud; this is not clientId.

#### Inherited from

`IamSdkConfig.resourceAudience`
