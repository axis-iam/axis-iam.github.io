[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / PortalOpenApiError

# Class: PortalOpenApiError

## Extends

- `Error`

## Constructors

### Constructor

> **new PortalOpenApiError**(`message`, `status`, `code`, `details?`, `retryAfter?`): `PortalOpenApiError`

#### Parameters

##### message

`string`

##### status

`number`

##### code

`string`

##### details?

`unknown`

##### retryAfter?

`string`

#### Returns

`PortalOpenApiError`

#### Overrides

`Error.constructor`

## Properties

### code

> `readonly` **code**: `string`

***

### details

> `readonly` **details**: `unknown`

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

### retryAfter?

> `readonly` `optional` **retryAfter?**: `string`

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

***

### status

> `readonly` **status**: `number`
