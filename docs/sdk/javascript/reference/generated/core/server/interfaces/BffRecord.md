[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / BffRecord

# Interface: BffRecord

Server-only record. Never serialize this as an HTTP response.

## Properties

### absoluteExpiresAt

> **absoluteExpiresAt**: `number`

***

### clientId

> **clientId**: `string`

***

### createdAt

> **createdAt**: `number`

***

### csrfToken

> **csrfToken**: `string`

***

### idleExpiresAt

> **idleExpiresAt**: `number`

***

### kind

> **kind**: `"SESSION"` \| `"PRELOGIN"`

***

### lifecycle

> **lifecycle**: `"READY"` \| `"OWNED"` \| `"SEND_INTENT"`

***

### login?

> `optional` **login?**: [`BffLogin`](BffLogin.md)

***

### operation?

> `optional` **operation?**: `object`

#### expiresAt

> **expiresAt**: `number`

#### fence

> **fence**: `string`

***

### owner

> **owner**: `string`

***

### permissions?

> `optional` **permissions?**: `object`

#### permissions

> **permissions**: `string`[]

#### roles

> **roles**: `string`[]

***

### profile?

> `optional` **profile?**: [`CurrentUser`](../../index/interfaces/CurrentUser.md)

***

### registrations?

> `optional` **registrations?**: `Record`\<`string`, `BffRegistration`\>

***

### schemaVersion

> **schemaVersion**: `1`

***

### successorId?

> `optional` **successorId?**: `string`

Short-lived, non-authenticating link so a racing logout fences rotation.

***

### tokens?

> `optional` **tokens?**: [`WebAuthTokenSet`](WebAuthTokenSet.md)

***

### version

> **version**: `number`
