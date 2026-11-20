[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / ConnectedAppSessionTransport

# Class: ConnectedAppSessionTransport

Finite C0 application contract. Console keeps its existing transport and default.

## Implements

- [`SessionTransport`](../interfaces/SessionTransport.md)

## Constructors

### Constructor

> **new ConnectedAppSessionTransport**(`config`): `ConnectedAppSessionTransport`

#### Parameters

##### config

###### basePath?

`string`

###### origin

`string`

#### Returns

`ConnectedAppSessionTransport`

## Methods

### request()

> **request**(`request`): `Promise`\<`unknown`\>

#### Parameters

##### request

[`SessionRequest`](../type-aliases/SessionRequest.md)

#### Returns

`Promise`\<`unknown`\>

#### Implementation of

[`SessionTransport`](../interfaces/SessionTransport.md).[`request`](../interfaces/SessionTransport.md#request)
