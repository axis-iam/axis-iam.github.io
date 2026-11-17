[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / WebAuthClientConfig

# Interface: WebAuthClientConfig

## Properties

### applicationOrigin

> **applicationOrigin**: `string`

***

### audience?

> `optional` **audience?**: `string`

***

### clientId

> **clientId**: `string`

***

### clientSecret

> **clientSecret**: `string`

***

### fetch?

> `optional` **fetch?**: \{(`input`, `init?`): `Promise`\<`Response`\>; (`input`, `init?`): `Promise`\<`Response`\>; \}

#### Call Signature

> (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

##### Parameters

###### input

`URL` \| `RequestInfo`

###### init?

`RequestInit`

##### Returns

`Promise`\<`Response`\>

#### Call Signature

> (`input`, `init?`): `Promise`\<`Response`\>

[MDN Reference](https://developer.mozilla.org/docs/Web/API/Window/fetch)

##### Parameters

###### input

`string` \| `URL` \| `Request`

###### init?

`RequestInit`

##### Returns

`Promise`\<`Response`\>

***

### issuer

> **issuer**: `string`

***

### now?

> `optional` **now?**: () => `number`

Injectable deterministic clock for tests.

#### Returns

`number`

***

### postLogoutRedirect

> **postLogoutRedirect**: `string`

***

### redirectUri

> **redirectUri**: `string`

***

### scopes?

> `optional` **scopes?**: readonly `string`[]

***

### sessionStore

> **sessionStore**: [`WebAuthSessionStore`](WebAuthSessionStore.md)

***

### sessionTtlSeconds?

> `optional` **sessionTtlSeconds?**: `number`

***

### successRedirect

> **successRedirect**: `string`

***

### transactionStore

> **transactionStore**: [`WebAuthTransactionStore`](WebAuthTransactionStore.md)

***

### transactionTtlSeconds?

> `optional` **transactionTtlSeconds?**: `number`
