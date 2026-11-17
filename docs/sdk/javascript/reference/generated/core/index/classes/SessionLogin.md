[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / SessionLogin

# Class: SessionLogin

## Implements

- [`AuthenticationFlow`](../type-aliases/AuthenticationFlow.md)

## Constructors

### Constructor

> **new SessionLogin**(`session`): `SessionLogin`

#### Parameters

##### session

[`ServerSession`](ServerSession.md)

#### Returns

`SessionLogin`

## Methods

### authenticate()

> **authenticate**(`input`): `Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Parameters

##### input

[`PrimaryAuthentication`](../type-aliases/PrimaryAuthentication.md)

#### Returns

`Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Implementation of

`AuthenticationFlow.authenticate`

***

### authenticateMagicLink()

> **authenticateMagicLink**(`url`, `identifier`): `Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Parameters

##### url

`string`

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Implementation of

`AuthenticationFlow.authenticateMagicLink`

***

### authorizeProvider()

> **authorizeProvider**(`providerId`, `proof?`): `Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; \}\>

#### Parameters

##### providerId

`string`

##### proof?

[`ProviderRegistrationProof`](../type-aliases/ProviderRegistrationProof.md) = `{}`

#### Returns

`Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; \}\>

#### Implementation of

`AuthenticationFlow.authorizeProvider`

***

### cancel()

> **cancel**(): `Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Returns

`Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Implementation of

`AuthenticationFlow.cancel`

***

### challenge()

> **challenge**(`method`, `identifier`): `Promise`\<\{ `challengeExpiresAt`: `string`; `cooldownSeconds`: `number`; `expiresAt`: `string`; \}\>

#### Parameters

##### method

[`PrimaryProofMethod`](../type-aliases/PrimaryProofMethod.md)

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<\{ `challengeExpiresAt`: `string`; `cooldownSeconds`: `number`; `expiresAt`: `string`; \}\>

#### Implementation of

`AuthenticationFlow.challenge`

***

### get()

> **get**(): `Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Returns

`Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Implementation of

`AuthenticationFlow.get`

***

### getSnapshot()

> **getSnapshot**(): [`LoginView`](../type-aliases/LoginView.md)

#### Returns

[`LoginView`](../type-aliases/LoginView.md)

#### Implementation of

`AuthenticationFlow.getSnapshot`

***

### invalidate()

> **invalidate**(): `void`

#### Returns

`void`

#### Implementation of

`AuthenticationFlow.invalidate`

***

### persistForNavigation()

> **persistForNavigation**(): `void`

Explicit short-lived navigation storage: no identifiers, password, proof or ordinary tokens.

#### Returns

`void`

#### Implementation of

[`AuthenticationTransaction`](AuthenticationTransaction.md).[`persistForNavigation`](AuthenticationTransaction.md#persistfornavigation)

***

### verifyMfa()

> **verifyMfa**(`method`, `code`): `Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Parameters

##### method

[`MfaProofMethod`](../type-aliases/MfaProofMethod.md)

##### code

`string`

#### Returns

`Promise`\<[`LoginView`](../type-aliases/LoginView.md)\>

#### Implementation of

`AuthenticationFlow.verifyMfa`
