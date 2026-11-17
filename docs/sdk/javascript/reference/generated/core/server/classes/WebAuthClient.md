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
