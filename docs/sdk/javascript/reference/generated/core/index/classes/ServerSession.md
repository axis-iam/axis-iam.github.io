[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / ServerSession

# Class: ServerSession

Browser holds only the safe view. The BFF owns PKCE, login control and session renewal.

## Constructors

### Constructor

> **new ServerSession**(`transport`, `clientId?`): `ServerSession`

#### Parameters

##### transport

[`SessionTransport`](../interfaces/SessionTransport.md)

##### clientId?

`string`

#### Returns

`ServerSession`

## Properties

### transport

> `readonly` **transport**: [`SessionTransport`](../interfaces/SessionTransport.md)

## Accessors

### generation

#### Get Signature

> **get** **generation**(): `number`

##### Returns

`number`

***

### invalidationReason

#### Get Signature

> **get** **invalidationReason**(): [`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) \| `null`

##### Returns

[`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) \| `null`

## Methods

### action()

> **action**(`request`): `Promise`\<`unknown`\>

#### Parameters

##### request

[`SessionRequest`](../type-aliases/SessionRequest.md)

#### Returns

`Promise`\<`unknown`\>

***

### assertCurrent()

> **assertCurrent**(`generation`): `void`

#### Parameters

##### generation

`number`

#### Returns

`void`

***

### cancelLogin()

> **cancelLogin**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### clear()

> **clear**(`reason?`): `void`

#### Parameters

##### reason?

[`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) = `'cleared'`

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

***

### getSnapshot()

> **getSnapshot**(): [`ServerSessionView`](../type-aliases/ServerSessionView.md) \| `null`

#### Returns

[`ServerSessionView`](../type-aliases/ServerSessionView.md) \| `null`

***

### getUser()

> **getUser**(): [`CurrentUser`](../interfaces/CurrentUser.md) \| `null`

#### Returns

[`CurrentUser`](../interfaces/CurrentUser.md) \| `null`

***

### getViewState()

> **getViewState**(): `object`

#### Returns

`object`

##### error

> **error**: `Error` \| `null`

##### expiresAt

> **expiresAt**: `number` \| `null`

##### status

> **status**: `"error"` \| `"expired"` \| `"loading"` \| `"ready"` \| `"anonymous"`

***

### isAuthenticated()

> **isAuthenticated**(): `boolean`

#### Returns

`boolean`

***

### load()

> **load**(`action`, `body?`): `Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

#### Parameters

##### action

`"bootstrap"` \| `"session"` \| `"login"` \| `"complete"` \| `"workspace"`

##### body?

###### owner

`string`

###### version

`number`

###### workspaceId

`string`

#### Returns

`Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

***

### loginAction()

> **loginAction**(`request`): `Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

#### Parameters

##### request

[`SessionRequest`](../type-aliases/SessionRequest.md)

#### Returns

`Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

***

### logout()

> **logout**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### restore()

> **restore**(): `Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

#### Returns

`Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

***

### selectWorkspace()

> **selectWorkspace**(`workspaceId`): `Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

#### Parameters

##### workspaceId

`string`

#### Returns

`Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

***

### subscribe()

> **subscribe**(`listener`): () => `boolean`

#### Parameters

##### listener

() => `void`

#### Returns

() => `boolean`
