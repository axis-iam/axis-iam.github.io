[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / useAccountSecurity

# Function: useAccountSecurity()

> **useAccountSecurity**(`options?`): `object`

## Parameters

### options?

[`UseAccountSecurityOptions`](../interfaces/UseAccountSecurityOptions.md) = `{}`

## Returns

`object`

### actions

> **actions**: [`AccountSecurityStore`](../classes/AccountSecurityStore.md)

### capabilities

> **capabilities**: [`MfaCapabilities`](../interfaces/MfaCapabilities.md) \| `null`

### error

> **error**: `Error` \| `null`

### isLoading

> **isLoading**: `boolean`

### recoveryCodesRemaining

> **recoveryCodesRemaining**: `number` \| `null`

### refetch

> **refetch**: () => `Promise`\<[`AccountSecuritySummary`](../interfaces/AccountSecuritySummary.md) \| `null`\>

#### Returns

`Promise`\<[`AccountSecuritySummary`](../interfaces/AccountSecuritySummary.md) \| `null`\>

### security

> **security**: [`AccountSecuritySummary`](../interfaces/AccountSecuritySummary.md) \| `null`

### state

> **state**: [`AccountSecurityOperationState`](../interfaces/AccountSecurityOperationState.md) = `operationState`
