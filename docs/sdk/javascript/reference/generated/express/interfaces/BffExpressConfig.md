[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / BffExpressConfig

# Interface: BffExpressConfig

## Extends

- `BffConfig`

## Properties

### allowInsecureLoopback?

> `optional` **allowInsecureLoopback?**: `boolean`

Explicit local development exception. Requires a loopback HTTP origin.

***

### applicationOrigin

> **applicationOrigin**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`applicationOrigin`](WebAuthExpressConfig.md#applicationorigin)

***

### audience?

> `optional` **audience?**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`audience`](WebAuthExpressConfig.md#audience)

***

### basePath?

> `optional` **basePath?**: `string`

***

### binding?

> `optional` **binding?**: [`BffSessionBinding`](BffSessionBinding.md)

***

### clientId

> **clientId**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`clientId`](WebAuthExpressConfig.md#clientid)

***

### clientSecret

> **clientSecret**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`clientSecret`](WebAuthExpressConfig.md#clientsecret)

***

### cookieName?

> `optional` **cookieName?**: `string`

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

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`fetch`](WebAuthExpressConfig.md#fetch)

***

### issuer

> **issuer**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`issuer`](WebAuthExpressConfig.md#issuer)

***

### now?

> `optional` **now?**: () => `number`

Injectable deterministic clock for tests.

#### Returns

`number`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`now`](WebAuthExpressConfig.md#now)

***

### operationLeaseSeconds?

> `optional` **operationLeaseSeconds?**: `number`

#### Inherited from

`BffConfig.operationLeaseSeconds`

***

### passwordResetRedirectUri?

> `optional` **passwordResetRedirectUri?**: `string`

#### Inherited from

`BffConfig.passwordResetRedirectUri`

***

### postLogoutRedirect

> **postLogoutRedirect**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`postLogoutRedirect`](WebAuthExpressConfig.md#postlogoutredirect)

***

### provider

> **provider**: `BffSessionProvider`

#### Inherited from

`BffConfig.provider`

***

### redirectUri

> **redirectUri**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`redirectUri`](WebAuthExpressConfig.md#redirecturi)

***

### refreshSkewSeconds?

> `optional` **refreshSkewSeconds?**: `number`

#### Inherited from

`BffConfig.refreshSkewSeconds`

***

### replicas?

> `optional` **replicas?**: `number`

#### Inherited from

`BffConfig.replicas`

***

### requestBudgetMs?

> `optional` **requestBudgetMs?**: `number`

#### Inherited from

`BffConfig.requestBudgetMs`

***

### scopes?

> `optional` **scopes?**: readonly `string`[]

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`scopes`](WebAuthExpressConfig.md#scopes)

***

### sessionIdleSeconds?

> `optional` **sessionIdleSeconds?**: `number`

#### Inherited from

`BffConfig.sessionIdleSeconds`

***

### sessionTtlSeconds?

> `optional` **sessionTtlSeconds?**: `number`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`sessionTtlSeconds`](WebAuthExpressConfig.md#sessionttlseconds)

***

### successRedirect

> **successRedirect**: `string`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`successRedirect`](WebAuthExpressConfig.md#successredirect)

***

### transactionTtlSeconds?

> `optional` **transactionTtlSeconds?**: `number`

#### Inherited from

[`WebAuthExpressConfig`](WebAuthExpressConfig.md).[`transactionTtlSeconds`](WebAuthExpressConfig.md#transactionttlseconds)

***

### upstreamTimeoutMs?

> `optional` **upstreamTimeoutMs?**: `number`

#### Inherited from

`BffConfig.upstreamTimeoutMs`

***

### workers?

> `optional` **workers?**: `number`

#### Inherited from

`BffConfig.workers`
