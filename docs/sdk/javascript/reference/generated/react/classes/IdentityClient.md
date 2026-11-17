[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / IdentityClient

# Class: IdentityClient

Memory owns flow control; the email proof never substitutes for it.

## Constructors

### Constructor

> **new IdentityClient**(`client`): `IdentityClient`

#### Parameters

##### client

[`OAuthClient`](OAuthClient.md)

#### Returns

`IdentityClient`

## Methods

### accountDeletionProviderCallback()

> **accountDeletionProviderCallback**(`id`, `authorizationId`, `codeVerifier`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### authorizationId

`string`

##### codeVerifier

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### authorize()

> **authorize**(`id`, `input`): `Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

#### Parameters

##### id

`string`

##### input

[`AuthorizeIdentityOperation`](../interfaces/AuthorizeIdentityOperation.md)

#### Returns

`Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

***

### authorizeAccountDeletion()

> **authorizeAccountDeletion**(`id`, `input`): `Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

#### Parameters

##### id

`string`

##### input

[`AuthorizeIdentityOperation`](../interfaces/AuthorizeIdentityOperation.md)

#### Returns

`Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

***

### authorizeRecovery()

> **authorizeRecovery**(`recoveryId`, `proof`): `Promise`\<[`RecoveryOperation`](../interfaces/RecoveryOperation.md)\>

#### Parameters

##### recoveryId

`string`

##### proof

`string`

#### Returns

`Promise`\<[`RecoveryOperation`](../interfaces/RecoveryOperation.md)\>

***

### authorizeRecoveryProvider()

> **authorizeRecoveryProvider**(`id`, `input`): `Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

#### Parameters

##### id

`string`

##### input

###### codeChallenge

`string`

###### codeChallengeMethod

`"S256"`

###### redirectUri

`string`

#### Returns

`Promise`\<[`IdentityProviderAuthorization`](../interfaces/IdentityProviderAuthorization.md)\>

***

### cancel()

> **cancel**(`id`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### challenge()

> **challenge**(`id`, `targetProofMethod`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### targetProofMethod

[`TargetProofMethod`](../type-aliases/TargetProofMethod.md)

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### complete()

> **complete**(`id`, `input`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### input

[`CompleteIdentityOperation`](../interfaces/CompleteIdentityOperation.md)

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### completeAccountDeletion()

> **completeAccountDeletion**(`deletionId`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### deletionId

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### confirmTransfer()

> **confirmTransfer**(`id`, `decision`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### decision

`"ACCEPT"` \| `"REJECT"`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### create()

> **create**(`input`, `idempotencyKey`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### input

[`CreateIdentityOperation`](../type-aliases/CreateIdentityOperation.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### currentAccountChallenge()

> **currentAccountChallenge**(`id`, `identifierId`): `Promise`\<\{ `challengeId`: `string`; `nextChallengeAt`: `string`; `operation`: [`IdentityOperation`](../interfaces/IdentityOperation.md); \}\>

#### Parameters

##### id

`string`

##### identifierId

`string`

#### Returns

`Promise`\<\{ `challengeId`: `string`; `nextChallengeAt`: `string`; `operation`: [`IdentityOperation`](../interfaces/IdentityOperation.md); \}\>

***

### get()

> **get**(`id`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### getRegistration()

> **getRegistration**(`id`): `Promise`\<[`RegistrationOperation`](../interfaces/RegistrationOperation.md)\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`RegistrationOperation`](../interfaces/RegistrationOperation.md)\>

***

### identifiers()

> **identifiers**(): `Promise`\<[`AccountIdentifiers`](../interfaces/AccountIdentifiers.md)\>

#### Returns

`Promise`\<[`AccountIdentifiers`](../interfaces/AccountIdentifiers.md)\>

***

### loginMethods()

> **loginMethods**(): `Promise`\<[`AccountLoginMethods`](../interfaces/AccountLoginMethods.md)\>

#### Returns

`Promise`\<[`AccountLoginMethods`](../interfaces/AccountLoginMethods.md)\>

***

### providerCallback()

> **providerCallback**(`id`, `authorizationId`, `codeVerifier`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### authorizationId

`string`

##### codeVerifier

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### reauthenticate()

> **reauthenticate**(`id`, `input`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### input

[`OperationReauthentication`](../type-aliases/OperationReauthentication.md)

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### recoveryAction()

> **recoveryAction**(`id`, `action?`, `input?`): `Promise`\<[`RecoveryOperation`](../interfaces/RecoveryOperation.md)\>

#### Parameters

##### id

`string`

##### action?

`"challenges"` \| `"complete"` \| `"cancel"`

##### input?

[`CompleteRecovery`](../type-aliases/CompleteRecovery.md)

#### Returns

`Promise`\<[`RecoveryOperation`](../interfaces/RecoveryOperation.md)\>

***

### registrationAction()

> **registrationAction**(`id`, `action`, `code?`): `Promise`\<[`RegistrationOperation`](../interfaces/RegistrationOperation.md)\>

#### Parameters

##### id

`string`

##### action

`"challenges"` \| `"complete"` \| `"cancel"`

##### code?

`string`

#### Returns

`Promise`\<[`RegistrationOperation`](../interfaces/RegistrationOperation.md)\>

***

### startAccountDeletion()

> **startAccountDeletion**(`expectedLoginMethodVersion`, `idempotencyKey`, `proof?`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### expectedLoginMethodVersion

`number`

##### idempotencyKey

`string`

##### proof?

[`OperationReauthentication`](../type-aliases/OperationReauthentication.md)

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### startOperationStepUp()

> **startOperationStepUp**(`id`): `Promise`\<\{ `availableMethods`: [`MfaStepUpMethod`](../type-aliases/MfaStepUpMethod.md)[]; `challengeId`: `string`; \}\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<\{ `availableMethods`: [`MfaStepUpMethod`](../type-aliases/MfaStepUpMethod.md)[]; `challengeId`: `string`; \}\>

***

### startOperationWebAuthn()

> **startOperationWebAuthn**(`id`, `challengeId`): `Promise`\<\{ `publicKey`: `string`; `requestId`: `string`; \}\>

#### Parameters

##### id

`string`

##### challengeId

`string`

#### Returns

`Promise`\<\{ `publicKey`: `string`; `requestId`: `string`; \}\>

***

### startRecoveryWebAuthn()

> **startRecoveryWebAuthn**(`id`): `Promise`\<\{ `publicKeyCredentialCreationOptions`: `string`; `requestId`: `string`; \}\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<\{ `publicKeyCredentialCreationOptions`: `string`; `requestId`: `string`; \}\>

***

### startRegistration()

> **startRegistration**(`input`, `idempotencyKey`): `Promise`\<[`RegistrationOperation`](../interfaces/RegistrationOperation.md)\>

#### Parameters

##### input

[`StartRegistration`](../interfaces/StartRegistration.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`RegistrationOperation`](../interfaces/RegistrationOperation.md)\>

***

### startStepUp()

> **startStepUp**(`trigger?`): `Promise`\<\{ `availableMethods`: (`"totp"` \| `"webauthn"`)[]; `challengeId`: `string`; \}\>

#### Parameters

##### trigger?

`"LOGIN_METHOD_CHANGE"` \| `"ACCOUNT_DELETE"`

#### Returns

`Promise`\<\{ `availableMethods`: (`"totp"` \| `"webauthn"`)[]; `challengeId`: `string`; \}\>

***

### startStepUpWebAuthn()

> **startStepUpWebAuthn**(`challengeId`): `Promise`\<\{ `publicKey`: `string`; `requestId`: `string`; \}\>

#### Parameters

##### challengeId

`string`

#### Returns

`Promise`\<\{ `publicKey`: `string`; `requestId`: `string`; \}\>

***

### verifyOperationStepUp()

> **verifyOperationStepUp**(`id`, `challengeId`, `code`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### challengeId

`string`

##### code

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### verifyOperationWebAuthn()

> **verifyOperationWebAuthn**(`id`, `challengeId`, `requestId`, `credential`): `Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

#### Parameters

##### id

`string`

##### challengeId

`string`

##### requestId

`string`

##### credential

`string`

#### Returns

`Promise`\<[`IdentityOperation`](../interfaces/IdentityOperation.md)\>

***

### verifyStepUp()

> **verifyStepUp**(`challengeId`, `code`): `Promise`\<`void`\>

#### Parameters

##### challengeId

`string`

##### code

`string`

#### Returns

`Promise`\<`void`\>

***

### verifyStepUpWebAuthn()

> **verifyStepUpWebAuthn**(`challengeId`, `requestId`, `credential`): `Promise`\<`void`\>

#### Parameters

##### challengeId

`string`

##### requestId

`string`

##### credential

`string`

#### Returns

`Promise`\<`void`\>
