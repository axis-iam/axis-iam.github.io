[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / IamApiError

# Class: IamApiError

## Extends

- `Error`

## Constructors

### Constructor

> **new IamApiError**(`message`, `options?`): `IamApiError`

#### Parameters

##### message

`string`

##### options?

[`IamApiErrorOptions`](../interfaces/IamApiErrorOptions.md) = `{}`

#### Returns

`IamApiError`

#### Overrides

`Error.constructor`

## Properties

### code?

> `optional` **code?**: `string`

***

### details?

> `optional` **details?**: [`IamApiErrorDetails`](../interfaces/IamApiErrorDetails.md)

***

### message

> **message**: `string`

#### Inherited from

`Error.message`

***

### name

> **name**: `string`

#### Inherited from

`Error.name`

***

### retryAfterSeconds?

> `optional` **retryAfterSeconds?**: `number`

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

***

### status?

> `optional` **status?**: `number`
