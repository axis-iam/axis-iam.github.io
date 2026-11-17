[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AccountSecurityOperationState

# Interface: AccountSecurityOperationState

## Properties

### availableMethods

> **availableMethods**: [`MfaStepUpMethod`](../type-aliases/MfaStepUpMethod.md)[]

***

### challengeRef

> **challengeRef**: `string` \| `null`

***

### error

> **error**: `Error` \| `null`

***

### material

> **material**: [`MfaTotpMaterial`](MfaTotpMaterial.md) \| `null`

***

### materialUnavailable

> **materialUnavailable**: `boolean`

***

### operation

> **operation**: [`MfaOperation`](MfaOperation.md) \| `null`

***

### pending

> **pending**: `boolean`

***

### recoveryCodes

> **recoveryCodes**: [`MfaRecoveryCodes`](MfaRecoveryCodes.md) \| `null`

***

### recoveryCodesUnavailable

> **recoveryCodesUnavailable**: `boolean`

***

### recoveryReceipt

> **recoveryReceipt**: [`AccountSecurityReceipt`](AccountSecurityReceipt.md) \| `null`

***

### uncertain

> **uncertain**: `boolean`

***

### uncertainCreate

> **uncertainCreate**: \{ `requestId`: `string`; `type`: [`MfaOperationType`](../type-aliases/MfaOperationType.md); `version`: `number`; \} \| `null`
