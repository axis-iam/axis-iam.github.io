[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / IdTokenVerifier

# Class: IdTokenVerifier

ID Tokens identify the OIDC response; Access Tokens remain opaque to this client.

## Constructors

### Constructor

> **new IdTokenVerifier**(`config`): `IdTokenVerifier`

#### Parameters

##### config

###### clientId

`string`

###### issuer

`string`

###### jwksUri

`string`

###### now?

() => `number`

#### Returns

`IdTokenVerifier`

## Methods

### verify()

> **verify**(`token`, `expectedNonce`): `Promise`\<`void`\>

#### Parameters

##### token

`string` \| `undefined`

##### expectedNonce

`string`

#### Returns

`Promise`\<`void`\>
