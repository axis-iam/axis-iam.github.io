[**Axis Vertex JavaScript SDK: test**](../README.md)

***

[Axis Vertex JavaScript SDK: test](../README.md) / MockIamServerConfig

# Interface: MockIamServerConfig

Mock IAM server fetch handler for testing without MSW.
Intercepts permission-management endpoints and, when configured, Portal Open
API M2M token/role requests.

## Example

```ts
const handler = createMockIamFetch({
  endpoint: 'https://auth.test.com',
  rolesToPerms: { admin: ['posts:read', 'posts:write'] },
})
globalThis.fetch = handler
```

## Properties

### endpoint

> **endpoint**: `string`

***

### portalEndpoint?

> `optional` **portalEndpoint?**: `string`

***

### portalReadToken?

> `optional` **portalReadToken?**: `string`

***

### portalRoles?

> `optional` **portalRoles?**: `Record`\<`string`, `unknown`\>[]

***

### portalWriteToken?

> `optional` **portalWriteToken?**: `string`

***

### rolePermissions?

> `optional` **rolePermissions?**: `object`[]

#### key

> **key**: `string`

#### name

> **name**: `string`

#### permissions

> **permissions**: `string`[]

***

### rolesToPerms

> **rolesToPerms**: `Record`\<`string`, `string`[]\>
