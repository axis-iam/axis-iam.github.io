[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AuthenticationTransaction

# Class: AuthenticationTransaction

Public Custom login protocol. Embedded and Dialog use this same transaction.

## Methods

### authenticate()

> **authenticate**(`input`): `Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

#### Parameters

##### input

[`PrimaryAuthentication`](../type-aliases/PrimaryAuthentication.md)

#### Returns

`Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

***

### authenticateMagicLink()

> **authenticateMagicLink**(`url`, `identifier`): `Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

#### Parameters

##### url

`string`

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

***

### authorizeProvider()

> **authorizeProvider**(`providerId`, `proof?`): `Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; \}\>

#### Parameters

##### providerId

`string`

##### proof?

[`ProviderRegistrationProof`](../type-aliases/ProviderRegistrationProof.md)

#### Returns

`Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; \}\>

***

### cancel()

> **cancel**(): `Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

#### Returns

`Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

***

### challenge()

> **challenge**(`method`, `identifier`): `Promise`\<[`AuthenticationChallenge`](../interfaces/AuthenticationChallenge.md)\>

#### Parameters

##### method

[`PrimaryProofMethod`](../type-aliases/PrimaryProofMethod.md)

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<[`AuthenticationChallenge`](../interfaces/AuthenticationChallenge.md)\>

***

### completeProviderCallback()

> **completeProviderCallback**(`url`): `Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md) \| [`AuthenticationTokens`](../interfaces/AuthenticationTokens.md)\>

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md) \| [`AuthenticationTokens`](../interfaces/AuthenticationTokens.md)\>

***

### exchange()

> **exchange**(`options?`): `Promise`\<[`AuthenticationTokens`](../interfaces/AuthenticationTokens.md)\>

Complete idempotently, then send the code exactly once. Concurrent callers share one flight.

#### Parameters

##### options?

###### reconcileCompletion?

`boolean`

#### Returns

`Promise`\<[`AuthenticationTokens`](../interfaces/AuthenticationTokens.md)\>

***

### get()

> **get**(): `Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

#### Returns

`Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

***

### getSnapshot()

> **getSnapshot**(): [`AuthenticationView`](../interfaces/AuthenticationView.md)

#### Returns

[`AuthenticationView`](../interfaces/AuthenticationView.md)

***

### invalidate()

> **invalidate**(`preserveNavigation?`): `void`

#### Parameters

##### preserveNavigation?

`boolean`

#### Returns

`void`

***

### persistForNavigation()

> **persistForNavigation**(): `void`

Explicit short-lived navigation storage: no identifiers, password, proof or ordinary tokens.

#### Returns

`void`

***

### verifyMfa()

> **verifyMfa**(`method`, `code`): `Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

#### Parameters

##### method

[`MfaProofMethod`](../type-aliases/MfaProofMethod.md)

##### code

`string`

#### Returns

`Promise`\<[`AuthenticationView`](../interfaces/AuthenticationView.md)\>

***

### discardNavigation()

> `static` **discardNavigation**(`config`): `void`

#### Parameters

##### config

`Pick`\<[`AuthenticationTransactionConfig`](../interfaces/AuthenticationTransactionConfig.md), `"issuer"` \| `"clientId"`\>

#### Returns

`void`

***

### isProviderCallback()

> `static` **isProviderCallback**(`binding`, `url`): `boolean`

Inspect navigation without claiming or consuming its tab-local capability.

#### Parameters

##### binding

`Pick`\<[`AuthenticationTransactionConfig`](../interfaces/AuthenticationTransactionConfig.md), `"issuer"` \| `"clientId"` \| `"redirectUri"`\>

##### url

`string`

#### Returns

`boolean`

***

### restoreMagicLink()

> `static` **restoreMagicLink**(`config`, `url`): `AuthenticationTransaction`

A fragment is proof only. Original tab control and an exact callback binding are required.

#### Parameters

##### config

[`AuthenticationTransactionConfig`](../interfaces/AuthenticationTransactionConfig.md)

##### url

`string`

#### Returns

`AuthenticationTransaction`

***

### restoreProvider()

> `static` **restoreProvider**(`config`, `url`): `AuthenticationTransaction`

#### Parameters

##### config

[`AuthenticationTransactionConfig`](../interfaces/AuthenticationTransactionConfig.md)

##### url

`string`

#### Returns

`AuthenticationTransaction`

***

### start()

> `static` **start**(`config`): `Promise`\<`AuthenticationTransaction`\>

#### Parameters

##### config

[`AuthenticationTransactionConfig`](../interfaces/AuthenticationTransactionConfig.md)

#### Returns

`Promise`\<`AuthenticationTransaction`\>
