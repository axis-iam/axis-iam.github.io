[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / IamJwtPayload

# Interface: IamJwtPayload

Verified JWT claims from IAM server

## Extends

- `JWTPayload`

## Indexable

> \[`propName`: `string`\]: `unknown`

Any other JWT Claim Set member.

## Properties

### acr?

> `optional` **acr?**: `string`

***

### act?

> `optional` **act?**: `object`

#### session\_id?

> `optional` **session\_id?**: `string`

#### sub

> **sub**: `string`

***

### app\_id?

> `optional` **app\_id?**: `string`

***

### aud?

> `optional` **aud?**: `string` \| `string`[]

JWT Audience

#### See

[RFC7519#section-4.1.3](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.3)

#### Inherited from

`JWTPayload.aud`

***

### azp?

> `optional` **azp?**: `string`

***

### client\_id?

> `optional` **client\_id?**: `string`

***

### exp?

> `optional` **exp?**: `number`

JWT Expiration Time

#### See

[RFC7519#section-4.1.4](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.4)

#### Inherited from

`JWTPayload.exp`

***

### iat?

> `optional` **iat?**: `number`

JWT Issued At

#### See

[RFC7519#section-4.1.6](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.6)

#### Inherited from

`JWTPayload.iat`

***

### iss?

> `optional` **iss?**: `string`

JWT Issuer

#### See

[RFC7519#section-4.1.1](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.1)

#### Inherited from

`JWTPayload.iss`

***

### jti?

> `optional` **jti?**: `string`

JWT ID

#### See

[RFC7519#section-4.1.7](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.7)

#### Inherited from

`JWTPayload.jti`

***

### nbf?

> `optional` **nbf?**: `number`

JWT Not Before

#### See

[RFC7519#section-4.1.5](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.5)

#### Inherited from

`JWTPayload.nbf`

***

### org\_id?

> `optional` **org\_id?**: `string`

***

### org\_role?

> `optional` **org\_role?**: `string`

***

### roles?

> `optional` **roles?**: `string`[]

***

### sub

> **sub**: `string`

JWT Subject

#### See

[RFC7519#section-4.1.2](https://www.rfc-editor.org/rfc/rfc7519#section-4.1.2)

#### Overrides

`JWTPayload.sub`

***

### workspace\_id?

> `optional` **workspace\_id?**: `string`
