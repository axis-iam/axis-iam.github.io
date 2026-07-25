[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / UseAccountProfileResult

# Interface: UseAccountProfileResult

## Properties

### error

> **error**: `Error` \| `null`

***

### isLoading

> **isLoading**: `boolean`

***

### isUpdating

> **isUpdating**: `boolean`

***

### profile

> **profile**: [`AccountProfile`](AccountProfile.md) \| `null`

***

### refetch

> **refetch**: () => `Promise`\<[`AccountProfile`](AccountProfile.md) \| `null`\>

#### Returns

`Promise`\<[`AccountProfile`](AccountProfile.md) \| `null`\>

***

### updateProfile

> **updateProfile**: (`input`) => `Promise`\<[`AccountProfile`](AccountProfile.md)\>

#### Parameters

##### input

[`AccountUpdateProfileInput`](AccountUpdateProfileInput.md)

#### Returns

`Promise`\<[`AccountProfile`](AccountProfile.md)\>
