[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / IamUser

# Interface: IamUser

Runtime user context extracted from JWT identity plus resolved permissions.

Profile metadata from /api/v1/auth/me is not part of this authorization
context, and App User authorization attributes are app-scoped management
fields outside the React runtime SDK.

## Properties

### actorId?

> `optional` **actorId?**: `string`

***

### email?

> `optional` **email?**: `string`

***

### id

> **id**: `string`

***

### isImpersonating

> **isImpersonating**: `boolean`

***

### name?

> `optional` **name?**: `string`

***

### orgId?

> `optional` **orgId?**: `string`

***

### orgRole?

> `optional` **orgRole?**: `string`

***

### orgSlug?

> `optional` **orgSlug?**: `string`

***

### permissions

> **permissions**: `string`[]

***

### raw

> **raw**: [`JWTPayload`](JWTPayload.md)

***

### roles

> **roles**: `string`[]

***

### username?

> `optional` **username?**: `string`

***

### workspaceId?

> `optional` **workspaceId?**: `string`
