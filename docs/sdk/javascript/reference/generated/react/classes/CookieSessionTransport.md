[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / CookieSessionTransport

# Class: CookieSessionTransport

Same-origin adapter for the delivered finite Console contract, also replaceable by customer BFFs.

## Implements

- [`SessionTransport`](../interfaces/SessionTransport.md)

## Constructors

### Constructor

> **new CookieSessionTransport**(`config`): `CookieSessionTransport`

#### Parameters

##### config

###### basePath?

`string`

###### origin

`string`

#### Returns

`CookieSessionTransport`

## Methods

### request()

> **request**(`input`): `Promise`\<`unknown`\>

#### Parameters

##### input

[`SessionRequest`](../type-aliases/SessionRequest.md)

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[`SessionTransport`](../interfaces/SessionTransport.md).[`request`](../interfaces/SessionTransport.md#request)
