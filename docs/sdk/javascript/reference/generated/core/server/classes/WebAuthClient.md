[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / WebAuthClient

# Class: WebAuthClient

## Constructors

### Constructor

> **new WebAuthClient**(`config`): `WebAuthClient`

#### Parameters

##### config

[`WebAuthClientConfig`](../interfaces/WebAuthClientConfig.md)

#### Returns

`WebAuthClient`

## Accessors

### postLogoutRedirect

#### Get Signature

> **get** **postLogoutRedirect**(): `string`

##### Returns

`string`

***

### successRedirect

#### Get Signature

> **get** **successRedirect**(): `string`

##### Returns

`string`

## Methods

### beginLogin()

> **beginLogin**(): `Promise`\<[`WebAuthBeginLoginResult`](../interfaces/WebAuthBeginLoginResult.md)\>

#### Returns

`Promise`\<[`WebAuthBeginLoginResult`](../interfaces/WebAuthBeginLoginResult.md)\>

***

### exchangeAuthorizationCode()

> **exchangeAuthorizationCode**(`code`, `transaction`): `Promise`\<[`WebAuthTokenSet`](../interfaces/WebAuthTokenSet.md)\>

No retries. Caller owns the persisted send intent and failure fencing.

#### Parameters

##### code

`string`

##### transaction

[`WebAuthTransaction`](../interfaces/WebAuthTransaction.md)

#### Returns

`Promise`\<[`WebAuthTokenSet`](../interfaces/WebAuthTokenSet.md)\>

***

### handleCallback()

> **handleCallback**(`input`): `Promise`\<[`WebAuthCallbackResult`](../interfaces/WebAuthCallbackResult.md)\>

#### Parameters

##### input

[`WebAuthCallbackInput`](../interfaces/WebAuthCallbackInput.md)

#### Returns

`Promise`\<[`WebAuthCallbackResult`](../interfaces/WebAuthCallbackResult.md)\>

***

### logout()

> **logout**(`input`): `Promise`\<[`WebAuthLogoutResult`](../interfaces/WebAuthLogoutResult.md)\>

#### Parameters

##### input

[`WebAuthLogoutInput`](../interfaces/WebAuthLogoutInput.md)

#### Returns

`Promise`\<[`WebAuthLogoutResult`](../interfaces/WebAuthLogoutResult.md)\>

***

### prepareLogin()

> **prepareLogin**(): `Promise`\<[`WebAuthBeginLoginResult`](../interfaces/WebAuthBeginLoginResult.md) & `object`\>

Server-only protocol primitive. The caller must bind and atomically consume this transaction.

#### Returns

`Promise`\<[`WebAuthBeginLoginResult`](../interfaces/WebAuthBeginLoginResult.md) & `object`\>

***

### readSession()

> **readSession**(`sessionId`): `Promise`\<[`WebAuthSession`](../interfaces/WebAuthSession.md)\>

#### Parameters

##### sessionId

`string`

#### Returns

`Promise`\<[`WebAuthSession`](../interfaces/WebAuthSession.md)\>

***

### refresh()

> **refresh**(`input`): `Promise`\<[`WebAuthRefreshResult`](../interfaces/WebAuthRefreshResult.md)\>

#### Parameters

##### input

[`WebAuthRefreshInput`](../interfaces/WebAuthRefreshInput.md)

#### Returns

`Promise`\<[`WebAuthRefreshResult`](../interfaces/WebAuthRefreshResult.md)\>

***

### revokeTokens()

> **revokeTokens**(`tokens`): `Promise`\<`"UNCONFIRMED"` \| `"SESSION_REVOKED"` \| `"REFRESH_FAMILY_REVOKED"` \| `"NOT_ATTEMPTED"`\>

#### Parameters

##### tokens

[`WebAuthTokenSet`](../interfaces/WebAuthTokenSet.md)

#### Returns

`Promise`\<`"UNCONFIRMED"` \| `"SESSION_REVOKED"` \| `"REFRESH_FAMILY_REVOKED"` \| `"NOT_ATTEMPTED"`\>

***

### rotateTokens()

> **rotateTokens**(`tokens`): `Promise`\<[`WebAuthTokenSet`](../interfaces/WebAuthTokenSet.md)\>

Protocol operation only; caller must already own exclusive refresh authority.

#### Parameters

##### tokens

[`WebAuthTokenSet`](../interfaces/WebAuthTokenSet.md)

#### Returns

`Promise`\<[`WebAuthTokenSet`](../interfaces/WebAuthTokenSet.md)\>
