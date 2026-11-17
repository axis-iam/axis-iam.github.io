[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AccountSecurityOperations

# Class: AccountSecurityOperations

Shared semantics; only this adapter knows Server IDs versus opaque BFF refs.

## Implements

- [`MfaOperationClient`](../interfaces/MfaOperationClient.md)

## Constructors

### Constructor

> **new AccountSecurityOperations**(`client`): `AccountSecurityOperations`

#### Parameters

##### client

[`AuthClient`](../type-aliases/AuthClient.md)

#### Returns

`AccountSecurityOperations`

## Methods

### authorizeMfaOperation()

> **authorizeMfaOperation**(`ref`, `input`): `Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; `ref`: `string`; \}\>

Must be called from a user gesture. PKCE stays in short-lived client memory.

#### Parameters

##### ref

`string`

##### input

[`MfaOperationAuthorizeInput`](../interfaces/MfaOperationAuthorizeInput.md)

#### Returns

`Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; `ref`: `string`; \}\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`authorizeMfaOperation`](../interfaces/MfaOperationClient.md#authorizemfaoperation)

***

### beginTotpEnrollmentOperation()

> **beginTotpEnrollmentOperation**(`ref`): `Promise`\<[`MfaTotpBeginResult`](../interfaces/MfaTotpBeginResult.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaTotpBeginResult`](../interfaces/MfaTotpBeginResult.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`beginTotpEnrollmentOperation`](../interfaces/MfaOperationClient.md#begintotpenrollmentoperation)

***

### cancelMfaOperation()

> **cancelMfaOperation**(`ref`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`cancelMfaOperation`](../interfaces/MfaOperationClient.md#cancelmfaoperation)

***

### cancelProviderWindow()

> **cancelProviderWindow**(): `void`

#### Returns

`void`

***

### challengeMfaOperation()

> **challengeMfaOperation**(`ref`, `identifierId`): `Promise`\<[`MfaOperationChallengeResult`](../interfaces/MfaOperationChallengeResult.md)\>

#### Parameters

##### ref

`string`

##### identifierId

`string`

#### Returns

`Promise`\<[`MfaOperationChallengeResult`](../interfaces/MfaOperationChallengeResult.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`challengeMfaOperation`](../interfaces/MfaOperationClient.md#challengemfaoperation)

***

### completeMfaOperation()

> **completeMfaOperation**(`ref`, `code?`): `Promise`\<[`MfaCompletionResult`](../interfaces/MfaCompletionResult.md)\>

#### Parameters

##### ref

`string`

##### code?

`string`

#### Returns

`Promise`\<[`MfaCompletionResult`](../interfaces/MfaCompletionResult.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`completeMfaOperation`](../interfaces/MfaOperationClient.md#completemfaoperation)

***

### completeMfaProviderAuthorization()

> **completeMfaProviderAuthorization**(`ref`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`completeMfaProviderAuthorization`](../interfaces/MfaOperationClient.md#completemfaproviderauthorization)

***

### createMfaOperation()

> **createMfaOperation**(`type`, `expectedLoginMethodVersion`, `requestId?`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### type

[`MfaOperationType`](../type-aliases/MfaOperationType.md)

##### expectedLoginMethodVersion

`number`

##### requestId?

`string` = `...`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`createMfaOperation`](../interfaces/MfaOperationClient.md#createmfaoperation)

***

### getMfaCapabilities()

> **getMfaCapabilities**(): `Promise`\<[`MfaCapabilities`](../interfaces/MfaCapabilities.md)\>

#### Returns

`Promise`\<[`MfaCapabilities`](../interfaces/MfaCapabilities.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`getMfaCapabilities`](../interfaces/MfaOperationClient.md#getmfacapabilities)

***

### getMfaOperation()

> **getMfaOperation**(`ref`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`getMfaOperation`](../interfaces/MfaOperationClient.md#getmfaoperation)

***

### getRecoveryCodesRemaining()

> **getRecoveryCodesRemaining**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`getRecoveryCodesRemaining`](../interfaces/MfaOperationClient.md#getrecoverycodesremaining)

***

### reauthenticateMfaOperation()

> **reauthenticateMfaOperation**(`ref`, `input`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### ref

`string`

##### input

[`MfaOperationReauthentication`](../type-aliases/MfaOperationReauthentication.md)

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`reauthenticateMfaOperation`](../interfaces/MfaOperationClient.md#reauthenticatemfaoperation)

***

### startMfaOperationStepUp()

> **startMfaOperationStepUp**(`ref`): `Promise`\<[`MfaOperationStepUpResult`](../interfaces/MfaOperationStepUpResult.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperationStepUpResult`](../interfaces/MfaOperationStepUpResult.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`startMfaOperationStepUp`](../interfaces/MfaOperationClient.md#startmfaoperationstepup)

***

### startMfaOperationWebAuthn()

> **startMfaOperationWebAuthn**(`ref`, `challengeRef`): `Promise`\<[`MfaOperationWebAuthnStartResult`](../interfaces/MfaOperationWebAuthnStartResult.md)\>

#### Parameters

##### ref

`string`

##### challengeRef

`string`

#### Returns

`Promise`\<[`MfaOperationWebAuthnStartResult`](../interfaces/MfaOperationWebAuthnStartResult.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`startMfaOperationWebAuthn`](../interfaces/MfaOperationClient.md#startmfaoperationwebauthn)

***

### verifyMfaOperationStepUp()

> **verifyMfaOperationStepUp**(`ref`, `challengeRef`, `code`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### ref

`string`

##### challengeRef

`string`

##### code

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`verifyMfaOperationStepUp`](../interfaces/MfaOperationClient.md#verifymfaoperationstepup)

***

### verifyMfaOperationWebAuthn()

> **verifyMfaOperationWebAuthn**(`ref`, `challengeRef`, `requestRef`, `credential`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### ref

`string`

##### challengeRef

`string`

##### requestRef

`string`

##### credential

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Implementation of

[`MfaOperationClient`](../interfaces/MfaOperationClient.md).[`verifyMfaOperationWebAuthn`](../interfaces/MfaOperationClient.md#verifymfaoperationwebauthn)
