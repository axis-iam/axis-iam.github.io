[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / IdentityOperation

# Interface: IdentityOperation

## Properties

### completion?

> `optional` **completion?**: \{ `completedAt`: `string`; `finalLoginMethodVersion`: `number`; `sessionImpact`: [`MfaSessionImpact`](../type-aliases/MfaSessionImpact.md); \} \| `null`

***

### expiresAt

> **expiresAt**: `string`

***

### id

> **id**: `string`

***

### maskedIdentifier?

> `optional` **maskedIdentifier?**: `string` \| `null`

***

### nextChallengeAt?

> `optional` **nextChallengeAt?**: `string` \| `null`

***

### proofOptions

> **proofOptions**: [`MfaProofOption`](../type-aliases/MfaProofOption.md)[]

***

### providerTarget

> **providerTarget**: [`IdentityProviderTarget`](IdentityProviderTarget.md) \| `null`

***

### requiredProofs

> **requiredProofs**: `object`[]

#### methods

> **methods**: `string`[]

#### purpose

> **purpose**: [`IdentityProofPurpose`](../type-aliases/IdentityProofPurpose.md)

#### satisfied

> **satisfied**: `boolean`

#### strength

> **strength**: `string`

***

### result?

> `optional` **result?**: `Record`\<`string`, `string`\> \| `null`

***

### state

> **state**: [`IdentityOperationState`](../type-aliases/IdentityOperationState.md)

***

### type

> **type**: keyof OperationPayloads \| `"ACCOUNT_DELETE"`
