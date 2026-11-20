[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / BffConfig

# Interface: BffConfig

## Extends

- `Omit`\<[`WebAuthClientConfig`](WebAuthClientConfig.md), `"transactionStore"` \| `"sessionStore"`\>

## Properties

### applicationOrigin

> **applicationOrigin**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`applicationOrigin`](WebAuthClientConfig.md#applicationorigin)

***

### audience?

> `optional` **audience?**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`audience`](WebAuthClientConfig.md#audience)

***

### clientId

> **clientId**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`clientId`](WebAuthClientConfig.md#clientid)

***

### clientSecret

> **clientSecret**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`clientSecret`](WebAuthClientConfig.md#clientsecret)

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

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`fetch`](WebAuthClientConfig.md#fetch)

***

### issuer

> **issuer**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`issuer`](WebAuthClientConfig.md#issuer)

***

### now?

> `optional` **now?**: () => `number`

Injectable deterministic clock for tests.

#### Returns

`number`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`now`](WebAuthClientConfig.md#now)

***

### operationLeaseSeconds?

> `optional` **operationLeaseSeconds?**: `number`

***

### passwordResetRedirectUri?

> `optional` **passwordResetRedirectUri?**: `string`

***

### postLogoutRedirect

> **postLogoutRedirect**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`postLogoutRedirect`](WebAuthClientConfig.md#postlogoutredirect)

***

### provider

> **provider**: [`BffSessionProvider`](BffSessionProvider.md)

***

### redirectUri

> **redirectUri**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`redirectUri`](WebAuthClientConfig.md#redirecturi)

***

### refreshSkewSeconds?

> `optional` **refreshSkewSeconds?**: `number`

***

### replicas?

> `optional` **replicas?**: `number`

***

### requestBudgetMs?

> `optional` **requestBudgetMs?**: `number`

***

### scopes?

> `optional` **scopes?**: readonly `string`[]

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`scopes`](WebAuthClientConfig.md#scopes)

***

### sessionIdleSeconds?

> `optional` **sessionIdleSeconds?**: `number`

***

### sessionTtlSeconds?

> `optional` **sessionTtlSeconds?**: `number`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`sessionTtlSeconds`](WebAuthClientConfig.md#sessionttlseconds)

***

### successRedirect

> **successRedirect**: `string`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`successRedirect`](WebAuthClientConfig.md#successredirect)

***

### transactionTtlSeconds?

> `optional` **transactionTtlSeconds?**: `number`

#### Inherited from

[`WebAuthClientConfig`](WebAuthClientConfig.md).[`transactionTtlSeconds`](WebAuthClientConfig.md#transactionttlseconds)

***

### upstreamTimeoutMs?

> `optional` **upstreamTimeoutMs?**: `number`

***

### workers?

> `optional` **workers?**: `number`
