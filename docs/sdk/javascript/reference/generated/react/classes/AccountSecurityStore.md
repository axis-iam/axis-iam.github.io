[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AccountSecurityStore

# Class: AccountSecurityStore

One owner-scoped state machine for Embedded, Dialog, AccountCenter and Headless.

## Constructors

### Constructor

> **new AccountSecurityStore**(`client`): `AccountSecurityStore`

#### Parameters

##### client

[`AuthClient`](../type-aliases/AuthClient.md)

#### Returns

`AccountSecurityStore`

## Methods

### acknowledge()

> **acknowledge**(): `boolean`

Call only after presenting the definitive result; no implicit logout hides success.

#### Returns

`boolean`

***

### authorizeProvider()

> **authorizeProvider**(`methodId`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### methodId

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### begin()

> **begin**(): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### cancel()

> **cancel**(): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### challenge()

> **challenge**(`identifierId`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### identifierId

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### clearSensitive()

> **clearSensitive**(): `void`

Closing never claims server cancellation; the receipt stays available for status/cancel.

#### Returns

`void`

***

### complete()

> **complete**(`code?`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### code?

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### create()

> **create**(`type`, `version`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### type

[`MfaOperationType`](../type-aliases/MfaOperationType.md)

##### version

`number`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### discardReceipt()

> **discardReceipt**(): `void`

This forgets local status tracking, not a server cancellation.

#### Returns

`void`

***

### getSnapshot()

> **getSnapshot**(): [`AccountSecurityOperationState`](../interfaces/AccountSecurityOperationState.md)

#### Returns

[`AccountSecurityOperationState`](../interfaces/AccountSecurityOperationState.md)

***

### prepareReauthentication()

> **prepareReauthentication**(): `object`

Explicit sign-in handoff stores only the bound, expiring read receipt.

#### Returns

`object`

##### ref

> **ref**: `string` = `receipt.ref`

##### type

> **type**: [`MfaOperationType`](../type-aliases/MfaOperationType.md) = `receipt.type`

***

### providerCallback()

> **providerCallback**(): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### query()

> **query**(`ref?`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### ref?

`string` = `...`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### reauthenticate()

> **reauthenticate**(`proof`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### proof

[`MfaOperationReauthentication`](../type-aliases/MfaOperationReauthentication.md)

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### resetProof()

> **resetProof**(): `void`

#### Returns

`void`

***

### retryCreate()

> **retryCreate**(): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### startStepUp()

> **startStepUp**(): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### subscribe()

> **subscribe**(`listener`): () => `void`

#### Parameters

##### listener

() => `void`

#### Returns

() => `void`

***

### verifyTotp()

> **verifyTotp**(`code`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

***

### verifyWebAuthn()

> **verifyWebAuthn**(): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md) \| `null`\>
