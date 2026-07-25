[**Axis Vertex JavaScript SDK: test**](../README.md)

***

[Axis Vertex JavaScript SDK: test](../README.md) / MockPermissionResolver

# Class: MockPermissionResolver

In-memory mock permission resolver for testing.

## Example

```ts
const resolver = new MockPermissionResolver()
  .given('admin', ['posts:read', 'posts:write'])
  .given('viewer', ['posts:read'])

const perms = await resolver.resolve('app-1', ['admin'])
// Set { 'posts:read', 'posts:write' }
```

## Implements

- `PermissionResolver`

## Constructors

### Constructor

> **new MockPermissionResolver**(`rolesToPerms?`): `MockPermissionResolver`

#### Parameters

##### rolesToPerms?

`Record`\<`string`, `string`[]\>

#### Returns

`MockPermissionResolver`

## Methods

### given()

> **given**(`role`, `perms`): `this`

Add role → permissions mapping

#### Parameters

##### role

`string`

##### perms

`string`[]

#### Returns

`this`

***

### resolve()

> **resolve**(`_appId`, `roles`): `Promise`\<`Set`\<`string`\>\>

Resolve permissions for given app + roles.
Returns a Set of permission authority strings ("resource:action").

#### Parameters

##### \_appId

`string`

##### roles

`string`[]

#### Returns

`Promise`\<`Set`\<`string`\>\>

#### Implementation of

`PermissionResolver.resolve`
