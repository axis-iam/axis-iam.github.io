[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / JwtVerifier

# Class: JwtVerifier

JWT verifier using JWKS from IAM server.
Caches JWKS keys per jose defaults, with configurable refresh interval.

## Constructors

### Constructor

> **new JwtVerifier**(`config`): `JwtVerifier`

#### Parameters

##### config

`Pick`\<[`IamSdkConfig`](../../server/interfaces/IamSdkConfig.md), `"endpoint"` \| `"resourceAudience"` \| `"jwksRefreshMs"`\>

#### Returns

`JwtVerifier`

## Methods

### verify()

> **verify**(`token`): `Promise`\<[`IamJwtPayload`](../interfaces/IamJwtPayload.md)\>

Verify a JWT and return decoded payload

#### Parameters

##### token

`string`

#### Returns

`Promise`\<[`IamJwtPayload`](../interfaces/IamJwtPayload.md)\>
