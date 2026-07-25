[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / RequirePerm

# Function: RequirePerm()

> **RequirePerm**(`perm`): `CustomDecorator`\<`string`\>

Require a specific permission on a route handler.

## Parameters

### perm

`PermissionKey`

## Returns

`CustomDecorator`\<`string`\>

## Example

```ts
@Get('posts')
@RequirePerm(MyPermissions.POSTS_READ)
list() { return this.postsService.findAll() }
```
