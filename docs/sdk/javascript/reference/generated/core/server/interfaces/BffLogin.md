[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / BffLogin

# Interface: BffLogin

## Extends

- [`WebAuthTransaction`](WebAuthTransaction.md)

## Properties

### codeVerifier

> **codeVerifier**: `string`

#### Inherited from

[`WebAuthTransaction`](WebAuthTransaction.md).[`codeVerifier`](WebAuthTransaction.md#codeverifier)

***

### controlSecret?

> `optional` **controlSecret?**: `string`

***

### createdAt

> **createdAt**: `number`

#### Inherited from

[`WebAuthTransaction`](WebAuthTransaction.md).[`createdAt`](WebAuthTransaction.md#createdat)

***

### expiresAt

> **expiresAt**: `number`

#### Inherited from

[`WebAuthTransaction`](WebAuthTransaction.md).[`expiresAt`](WebAuthTransaction.md#expiresat)

***

### identifier?

> `optional` **identifier?**: `object`

#### kind

> **kind**: `"EMAIL"` \| `"USERNAME"` \| `"PHONE"`

#### region?

> `optional` **region?**: `string` \| `null`

#### value

> **value**: `string`

***

### kind

> **kind**: `"CUSTOM"` \| `"HOSTED"`

***

### magicConsumed?

> `optional` **magicConsumed?**: `boolean`

***

### nextAction?

> `optional` **nextAction?**: `"authenticate"` \| `"mfa"` \| `"complete"` \| `"authorize"` \| `"none"`

***

### nonce?

> `optional` **nonce?**: `string`

Present only for transactions requesting OpenID Connect.

#### Inherited from

[`WebAuthTransaction`](WebAuthTransaction.md).[`nonce`](WebAuthTransaction.md#nonce)

***

### state

> **state**: `string`

#### Inherited from

[`WebAuthTransaction`](WebAuthTransaction.md).[`state`](WebAuthTransaction.md#state)

***

### stateName

> **stateName**: `string`

***

### transactionId?

> `optional` **transactionId?**: `string`
