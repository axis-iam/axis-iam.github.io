[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / IdentityOperationStore

# Class: IdentityOperationStore

Shared by prebuilt and Custom; retains an uncertain operation until GET resolves it.

## Constructors

### Constructor

> **new IdentityOperationStore**(`client`): `IdentityOperationStore`

#### Parameters

##### client

[`AuthClient`](../type-aliases/AuthClient.md)

#### Returns

`IdentityOperationStore`

## Methods

### acknowledge()

> **acknowledge**(): `void`

#### Returns

`void`

***

### authorize()

> **authorize**(`purpose`, `redirectUri`, `methodId?`): `Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

#### Parameters

##### purpose

[`IdentityProofPurpose`](../type-aliases/IdentityProofPurpose.md)

##### redirectUri

`string`

##### methodId?

`string`

#### Returns

`Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

***

### cancel()

> **cancel**(): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### cancelProviderWindow()

> **cancelProviderWindow**(): `void`

#### Returns

`void`

***

### challenge()

> **challenge**(`method`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### method

[`TargetProofMethod`](../type-aliases/TargetProofMethod.md)

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### complete()

> **complete**(`method?`, `code?`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### method?

[`TargetProofMethod`](../type-aliases/TargetProofMethod.md)

##### code?

`string`

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### confirmTransfer()

> **confirmTransfer**(`decision`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### decision

`"ACCEPT"` \| `"REJECT"`

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### create()

> **create**(`input`, `idempotencyKey?`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### input

[`CreateIdentityOperation`](../type-aliases/CreateIdentityOperation.md)

##### idempotencyKey?

`string`

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### currentAccountChallenge()

> **currentAccountChallenge**(`identifierId`): `Promise`\<`never`\>

#### Parameters

##### identifierId

`string`

#### Returns

`Promise`\<`never`\>

***

### getSnapshot()

> **getSnapshot**(): [`IdentityOperationSnapshot`](../interfaces/IdentityOperationSnapshot.md)

#### Returns

[`IdentityOperationSnapshot`](../interfaces/IdentityOperationSnapshot.md)

***

### identifiers()

> **identifiers**(): `Promise`\<[`AccountIdentifiers`](../interfaces/AccountIdentifiers.md)\>

The authenticated management snapshot, with the same owner/generation checks as prebuilt UI.

#### Returns

`Promise`\<[`AccountIdentifiers`](../interfaces/AccountIdentifiers.md)\>

***

### openProvider()

> **openProvider**(`purpose`, `redirectUri?`, `methodId?`): `Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md) \| \{ `authorizationUrl`: `string`; `expiresAt`: `string`; `ref`: `string`; \}\>

#### Parameters

##### purpose

[`IdentityProofPurpose`](../type-aliases/IdentityProofPurpose.md)

##### redirectUri?

`string`

##### methodId?

`string`

#### Returns

`Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md) \| \{ `authorizationUrl`: `string`; `expiresAt`: `string`; `ref`: `string`; \}\>

***

### providerCallback()

> **providerCallback**(): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### reauthenticate()

> **reauthenticate**(`input`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### input

[`OperationReauthentication`](../type-aliases/OperationReauthentication.md)

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### reopen()

> **reopen**(`id?`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### id?

`string`

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### resumeSaved()

> **resumeSaved**(): `Promise`\<[`OperationView`](../type-aliases/OperationView.md) \| `null`\>

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md) \| `null`\>

***

### retryCreate()

> **retryCreate**(): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### startOperationStepUp()

> **startOperationStepUp**(): `Promise`\<\{ `availableMethods`: [`MfaStepUpMethod`](../type-aliases/MfaStepUpMethod.md)[]; `challengeId`: `string`; \}\>

#### Returns

`Promise`\<\{ `availableMethods`: [`MfaStepUpMethod`](../type-aliases/MfaStepUpMethod.md)[]; `challengeId`: `string`; \}\>

***

### startOperationWebAuthn()

> **startOperationWebAuthn**(`challengeId`): `Promise`\<\{ `publicKey`: `string`; `requestId`: `string`; \}\>

#### Parameters

##### challengeId

`string`

#### Returns

`Promise`\<\{ `publicKey`: `string`; `requestId`: `string`; \}\>

***

### subscribe()

> **subscribe**(`listener`): () => `void`

#### Parameters

##### listener

() => `void`

#### Returns

() => `void`

***

### verifyOperationStepUp()

> **verifyOperationStepUp**(`challengeId`, `code`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### challengeId

`string`

##### code

`string`

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

***

### verifyOperationWebAuthn()

> **verifyOperationWebAuthn**(`challengeId`, `requestId`, `credential`): `Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>

#### Parameters

##### challengeId

`string`

##### requestId

`string`

##### credential

`string`

#### Returns

`Promise`\<[`OperationView`](../type-aliases/OperationView.md)\>
