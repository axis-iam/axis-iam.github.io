[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / requirePerm

# Function: requirePerm()

> **requirePerm**(`perm`): `RequestHandler`

Express middleware: check a required permission on `req.user.permissions`.
Must be used AFTER `iamAuth()`.

## Parameters

### perm

`PermissionKey`

## Returns

`RequestHandler`

## Example

```ts
app.get('/posts', requirePerm(MyPermissions.POSTS_READ), handler)
```
