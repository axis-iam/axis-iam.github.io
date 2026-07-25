[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / PermissionManifestError

# Class: PermissionManifestError

## Extends

- `Error`

## Constructors

### Constructor

> **new PermissionManifestError**(`message`, `status`, `code`, `details?`, `correlationId?`, `retryAfterSeconds?`): `PermissionManifestError`

#### Parameters

##### message

`string`

##### status

`number`

##### code

`string`

##### details?

`unknown`

##### correlationId?

`string`

##### retryAfterSeconds?

`number`

#### Returns

`PermissionManifestError`

#### Overrides

`Error.constructor`

## Properties

### code

> `readonly` **code**: `string`

***

### correlationId?

> `readonly` `optional` **correlationId?**: `string`

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

### retryAfterSeconds?

> `readonly` `optional` **retryAfterSeconds?**: `number`

***

### stack?

> `optional` **stack?**: `string`

#### Inherited from

`Error.stack`

***

### status

> `readonly` **status**: `number`

## Methods

### fromResponse()

> `static` **fromResponse**(`status`, `body`, `retryAfter`): `PermissionManifestError`

#### Parameters

##### status

`number`

##### body

`unknown`

##### retryAfter

`string` \| `null`

#### Returns

`PermissionManifestError`
