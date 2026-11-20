[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / WebAuthExpressConfig

# Interface: WebAuthExpressConfig

## Extends

- `WebAuthClientConfig`

## Properties

### applicationOrigin

> **applicationOrigin**: `string`

#### Inherited from

`WebAuthClientConfig.applicationOrigin`

***

### audience?

> `optional` **audience?**: `string`

#### Inherited from

`WebAuthClientConfig.audience`

***

### clientId

> **clientId**: `string`

#### Inherited from

`WebAuthClientConfig.clientId`

***

### clientSecret

> **clientSecret**: `string`

#### Inherited from

`WebAuthClientConfig.clientSecret`

***

### cookieDomain?

> `optional` **cookieDomain?**: `string`

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

`WebAuthClientConfig.fetch`

***

### issuer

> **issuer**: `string`

#### Inherited from

`WebAuthClientConfig.issuer`

***

### now?

> `optional` **now?**: () => `number`

Injectable deterministic clock for tests.

#### Returns

`number`

#### Inherited from

`WebAuthClientConfig.now`

***

### postLogoutRedirect

> **postLogoutRedirect**: `string`

#### Inherited from

`WebAuthClientConfig.postLogoutRedirect`

***

### redirectUri

> **redirectUri**: `string`

#### Inherited from

`WebAuthClientConfig.redirectUri`

***

### scopes?

> `optional` **scopes?**: readonly `string`[]

#### Inherited from

`WebAuthClientConfig.scopes`

***

### secureCookies?

> `optional` **secureCookies?**: `boolean`

***

### sessionCookieName?

> `optional` **sessionCookieName?**: `string`

***

### sessionCookiePath?

> `optional` **sessionCookiePath?**: `string`

***

### sessionStore

> **sessionStore**: `WebAuthSessionStore`

#### Inherited from

`WebAuthClientConfig.sessionStore`

***

### sessionTtlSeconds?

> `optional` **sessionTtlSeconds?**: `number`

#### Inherited from

`WebAuthClientConfig.sessionTtlSeconds`

***

### ssoLogout?

> `optional` **ssoLogout?**: `boolean`

Explicit legacy helper SSO navigation. Default is current-session logout only.

***

### successRedirect

> **successRedirect**: `string`

#### Inherited from

`WebAuthClientConfig.successRedirect`

***

### transactionCookieName?

> `optional` **transactionCookieName?**: `string`

***

### transactionCookiePath?

> `optional` **transactionCookiePath?**: `string`

***

### transactionStore

> **transactionStore**: `WebAuthTransactionStore`

#### Inherited from

`WebAuthClientConfig.transactionStore`

***

### transactionTtlSeconds?

> `optional` **transactionTtlSeconds?**: `number`

#### Inherited from

`WebAuthClientConfig.transactionTtlSeconds`
