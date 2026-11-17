[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / MfaOperation

# Interface: MfaOperation

## Properties

### createdAt

> **createdAt**: `string`

***

### expectedLoginMethodVersion

> **expectedLoginMethodVersion**: `number`

***

### expiresAt

> **expiresAt**: `string`

***

### nextChallengeAt

> **nextChallengeAt**: `string` \| `null`

***

### proofOptions

> **proofOptions**: [`MfaProofOption`](../type-aliases/MfaProofOption.md)[]

***

### proofRequirement

> **proofRequirement**: [`MfaProofRequirement`](../type-aliases/MfaProofRequirement.md)

***

### proofSatisfied

> **proofSatisfied**: `boolean`

***

### reasonCode

> **reasonCode**: `string` \| `null`

***

### ref

> **ref**: `string`

BFF consumers receive an opaque ref. OAuth consumers receive the upstream
operation identifier through the same field; no verifier or token is exposed.

***

### result

> **result**: [`MfaOperationResult`](MfaOperationResult.md) \| `null`

***

### state

> **state**: [`MfaOperationState`](../type-aliases/MfaOperationState.md)

***

### type

> **type**: [`MfaOperationType`](../type-aliases/MfaOperationType.md)
