[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / UseAccountPermissionsResult

# Interface: UseAccountPermissionsResult

## Properties

### checkPermission

> **checkPermission**: (`input`) => `Promise`\<[`AccountPermissionCheckResponse`](AccountPermissionCheckResponse.md)\>

#### Parameters

##### input

[`AccountPermissionCheckInput`](AccountPermissionCheckInput.md)

#### Returns

`Promise`\<[`AccountPermissionCheckResponse`](AccountPermissionCheckResponse.md)\>

***

### error

> **error**: `Error` \| `null`

***

### isChecking

> **isChecking**: `boolean`

***

### isLoading

> **isLoading**: `boolean`

***

### lastCheck

> **lastCheck**: [`AccountPermissionCheckResponse`](AccountPermissionCheckResponse.md) \| `null`

***

### refetch

> **refetch**: (`organizationId?`) => `Promise`\<[`AccountPermissionSummary`](AccountPermissionSummary.md) \| `null`\>

#### Parameters

##### organizationId?

`string` \| `null`

#### Returns

`Promise`\<[`AccountPermissionSummary`](AccountPermissionSummary.md) \| `null`\>

***

### summary

> **summary**: [`AccountPermissionSummary`](AccountPermissionSummary.md) \| `null`
