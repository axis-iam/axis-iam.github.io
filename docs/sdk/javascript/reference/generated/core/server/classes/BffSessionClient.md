[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / BffSessionClient

# Class: BffSessionClient

Authentication algorithms only. HTTP routes and Cookie ownership live in adapters.

## Constructors

### Constructor

> **new BffSessionClient**(`config`): `BffSessionClient`

#### Parameters

##### config

[`BffConfig`](../interfaces/BffConfig.md)

#### Returns

`BffSessionClient`

## Properties

### config

> `readonly` **config**: [`BffConfig`](../interfaces/BffConfig.md)

***

### origin

> `readonly` **origin**: `string`

***

### postLogoutRedirect

> `readonly` **postLogoutRedirect**: `string`

***

### successRedirect

> `readonly` **successRedirect**: `string`

## Methods

### bootstrap()

> **bootstrap**(`id?`): `Promise`\<[`BffResult`](../interfaces/BffResult.md)\>

#### Parameters

##### id?

`string`

#### Returns

`Promise`\<[`BffResult`](../interfaces/BffResult.md)\>

***

### callback()

> **callback**(`id`, `query`): `Promise`\<\{ `id`: `string`; `redirectUrl`: `string`; \}\>

#### Parameters

##### id

`string`

##### query

`URLSearchParams`

#### Returns

`Promise`\<\{ `id`: `string`; `redirectUrl`: `string`; \}\>

***

### capabilities()

> **capabilities**(`which`): `Promise`\<`unknown`\>

#### Parameters

##### which

`"auth-methods"` \| `"auth-policy"`

#### Returns

`Promise`\<`unknown`\>

***

### customLogin()

> **customLogin**(`id`): `Promise`\<[`ServerSessionView`](../../index/type-aliases/ServerSessionView.md)\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ServerSessionView`](../../index/type-aliases/ServerSessionView.md)\>

***

### hostedLogin()

> **hostedLogin**(`id`): `Promise`\<`string`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`string`\>

***

### loginAction()

> **loginAction**(`id`, `action`, `raw`): `Promise`\<[`BffResult`](../interfaces/BffResult.md)\>

#### Parameters

##### id

`string`

##### action

`string`

##### raw

`unknown`

#### Returns

`Promise`\<[`BffResult`](../interfaces/BffResult.md)\>

***

### logout()

> **logout**(`id?`): `Promise`\<[`BffLogoutResult`](../interfaces/BffLogoutResult.md)\>

#### Parameters

##### id?

`string`

#### Returns

`Promise`\<[`BffLogoutResult`](../interfaces/BffLogoutResult.md)\>

***

### passwordReset()

> **passwordReset**(`action`, `raw`): `Promise`\<`void`\>

#### Parameters

##### action

`"complete"` \| `"request"`

##### raw

`unknown`

#### Returns

`Promise`\<`void`\>

***

### protect()

> **protect**(`id`): `Promise`\<\{ `csrfToken`: `string`; `expiresAt`: `string`; `owner`: `string`; `permissions`: \{ `permissions`: `string`[]; `roles`: `string`[]; \}; `profile`: [`CurrentUser`](../../index/interfaces/CurrentUser.md); `state`: `"AUTHENTICATED"`; `version`: `number`; \}\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<\{ `csrfToken`: `string`; `expiresAt`: `string`; `owner`: `string`; `permissions`: \{ `permissions`: `string`[]; `roles`: `string`[]; \}; `profile`: [`CurrentUser`](../../index/interfaces/CurrentUser.md); `state`: `"AUTHENTICATED"`; `version`: `number`; \}\>

***

### registration()

> **registration**(`id`, `method`, `ref`, `action`, `raw`, `idempotencyKey?`): `Promise`\<\{ `expiresAt`: `string`; `nextAction`: `string`; `nextChallengeAt`: `string` \| `null`; `registrationId`: `string`; `status`: `string`; \}\>

#### Parameters

##### id

`string`

##### method

`string`

##### ref

`string` \| `undefined`

##### action

`string`

##### raw

`unknown`

##### idempotencyKey?

`string`

#### Returns

`Promise`\<\{ `expiresAt`: `string`; `nextAction`: `string`; `nextChallengeAt`: `string` \| `null`; `registrationId`: `string`; `status`: `string`; \}\>

***

### run()

> **run**\<`T`\>(`work`, `signal?`): `Promise`\<`T`\>

Adapters call once per incoming request; all dependent IAM calls share this budget.

#### Type Parameters

##### T

`T`

#### Parameters

##### work

() => `Promise`\<`T`\>

##### signal?

`AbortSignal`

#### Returns

`Promise`\<`T`\>

***

### session()

> **session**(`id`): `Promise`\<[`ServerSessionView`](../../index/type-aliases/ServerSessionView.md)\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`ServerSessionView`](../../index/type-aliases/ServerSessionView.md)\>

***

### verifyCsrf()

> **verifyCsrf**(`id`, `origin`, `csrf`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

##### origin

`unknown`

##### csrf

`unknown`

#### Returns

`Promise`\<`void`\>
