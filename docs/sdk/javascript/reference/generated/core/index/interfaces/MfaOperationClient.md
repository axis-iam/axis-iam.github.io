[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / MfaOperationClient

# Interface: MfaOperationClient

## Methods

### authorizeMfaOperation()

> **authorizeMfaOperation**(`ref`, `input`): `Promise`\<[`MfaOperationProviderAuthorization`](MfaOperationProviderAuthorization.md)\>

#### Parameters

##### ref

`string`

##### input

[`MfaOperationAuthorizeInput`](MfaOperationAuthorizeInput.md)

#### Returns

`Promise`\<[`MfaOperationProviderAuthorization`](MfaOperationProviderAuthorization.md)\>

***

### beginTotpEnrollmentOperation()

> **beginTotpEnrollmentOperation**(`ref`): `Promise`\<[`MfaTotpBeginResult`](MfaTotpBeginResult.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaTotpBeginResult`](MfaTotpBeginResult.md)\>

***

### cancelMfaOperation()

> **cancelMfaOperation**(`ref`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperation`](MfaOperation.md)\>

***

### challengeMfaOperation()

> **challengeMfaOperation**(`ref`, `identifierId`): `Promise`\<[`MfaOperationChallengeResult`](MfaOperationChallengeResult.md)\>

#### Parameters

##### ref

`string`

##### identifierId

`string`

#### Returns

`Promise`\<[`MfaOperationChallengeResult`](MfaOperationChallengeResult.md)\>

***

### completeMfaOperation()

> **completeMfaOperation**(`ref`, `code?`): `Promise`\<[`MfaCompletionResult`](MfaCompletionResult.md)\>

#### Parameters

##### ref

`string`

##### code?

`string`

#### Returns

`Promise`\<[`MfaCompletionResult`](MfaCompletionResult.md)\>

***

### completeMfaProviderAuthorization()

> **completeMfaProviderAuthorization**(`ref`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperation`](MfaOperation.md)\>

***

### createMfaOperation()

> **createMfaOperation**(`type`, `expectedLoginMethodVersion`, `requestId?`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

#### Parameters

##### type

[`MfaOperationType`](../type-aliases/MfaOperationType.md)

##### expectedLoginMethodVersion

`number`

##### requestId?

`string`

#### Returns

`Promise`\<[`MfaOperation`](MfaOperation.md)\>

***

### getMfaCapabilities()

> **getMfaCapabilities**(): `Promise`\<[`MfaCapabilities`](MfaCapabilities.md)\>

#### Returns

`Promise`\<[`MfaCapabilities`](MfaCapabilities.md)\>

***

### getMfaOperation()

> **getMfaOperation**(`ref`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperation`](MfaOperation.md)\>

***

### getRecoveryCodesRemaining()

> **getRecoveryCodesRemaining**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

***

### reauthenticateMfaOperation()

> **reauthenticateMfaOperation**(`ref`, `input`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

#### Parameters

##### ref

`string`

##### input

[`MfaOperationReauthentication`](../type-aliases/MfaOperationReauthentication.md)

#### Returns

`Promise`\<[`MfaOperation`](MfaOperation.md)\>

***

### startMfaOperationStepUp()

> **startMfaOperationStepUp**(`ref`): `Promise`\<[`MfaOperationStepUpResult`](MfaOperationStepUpResult.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`MfaOperationStepUpResult`](MfaOperationStepUpResult.md)\>

***

### startMfaOperationWebAuthn()

> **startMfaOperationWebAuthn**(`ref`, `challengeRef`): `Promise`\<[`MfaOperationWebAuthnStartResult`](MfaOperationWebAuthnStartResult.md)\>

#### Parameters

##### ref

`string`

##### challengeRef

`string`

#### Returns

`Promise`\<[`MfaOperationWebAuthnStartResult`](MfaOperationWebAuthnStartResult.md)\>

***

### verifyMfaOperationStepUp()

> **verifyMfaOperationStepUp**(`ref`, `challengeRef`, `code`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

#### Parameters

##### ref

`string`

##### challengeRef

`string`

##### code

`string`

#### Returns

`Promise`\<[`MfaOperation`](MfaOperation.md)\>

***

### verifyMfaOperationWebAuthn()

> **verifyMfaOperationWebAuthn**(`ref`, `challengeRef`, `requestRef`, `credential`): `Promise`\<[`MfaOperation`](MfaOperation.md)\>

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

`Promise`\<[`MfaOperation`](MfaOperation.md)\>
