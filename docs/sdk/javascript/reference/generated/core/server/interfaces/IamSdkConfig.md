[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / IamSdkConfig

# Interface: IamSdkConfig

Core SDK configuration

## Properties

### clientId

> **clientId**: `string`

ApplicationClient.clientId. Server-side packages should use a WEB/M2M confidential client.

***

### clientSecret

> **clientSecret**: `string`

WEB/M2M confidential ApplicationClient secret (server-side only, never expose to browser)

***

### endpoint

> **endpoint**: `string`

IAM server endpoint (e.g. https://auth.example.com)

***

### failMode?

> `optional` **failMode?**: `"open"` \| `"close"`

Behavior when permission resolution fails (default: 'close')

***

### jwksRefreshMs?

> `optional` **jwksRefreshMs?**: `number`

JWKS cache duration in ms (default: 3600000 = 1 hour)

***

### permissionCacheMax?

> `optional` **permissionCacheMax?**: `number`

Permission cache max entries (default: 10000)

***

### permissionCacheTtlMs?

> `optional` **permissionCacheTtlMs?**: `number`

Permission cache TTL in ms (default: 300000 = 5 min)

***

### resolveMode?

> `optional` **resolveMode?**: `"full-sync"` \| `"on-demand"`

Permission resolve mode (default: 'on-demand')

***

### resourceAudience

> **resourceAudience**: `string`

Application.resourceAudience. Used to verify access-token aud; this is not clientId.
