[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / UseAccountSessionsResult

# Interface: UseAccountSessionsResult

## Properties

### error

> **error**: `Error` \| `null`

***

### isLoading

> **isLoading**: `boolean`

***

### isLoggingOut

> **isLoggingOut**: `boolean`

***

### isRevoking

> **isRevoking**: `boolean`

***

### isRevokingOthers

> **isRevokingOthers**: `boolean`

***

### logoutAccount

> **logoutAccount**: (`options?`) => `Promise`\<`void`\>

#### Parameters

##### options?

[`LogoutAccountOptions`](LogoutAccountOptions.md)

#### Returns

`Promise`\<`void`\>

***

### refetch

> **refetch**: () => `Promise`\<[`AccountSession`](AccountSession.md)[]\>

#### Returns

`Promise`\<[`AccountSession`](AccountSession.md)[]\>

***

### revokeOtherSessions

> **revokeOtherSessions**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### revokeSession

> **revokeSession**: (`sessionId`) => `Promise`\<`void`\>

#### Parameters

##### sessionId

`string`

#### Returns

`Promise`\<`void`\>

***

### sessions

> **sessions**: [`AccountSession`](AccountSession.md)[]
