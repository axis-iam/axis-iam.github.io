[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / iamAuth

# Function: iamAuth()

> **iamAuth**(`config`): `RequestHandler`

Express middleware: verify JWT and resolve permissions.
Populates `req.user` with JWT payload + permissions array.

## Parameters

### config

`IamSdkConfig`

## Returns

`RequestHandler`

## Example

```ts
app.use(iamAuth({
  endpoint: '...',
  clientId: process.env.IAM_CLIENT_ID!, // WEB/M2M confidential ApplicationClient.clientId
  clientSecret: process.env.IAM_CLIENT_SECRET!,
  resourceAudience: process.env.IAM_RESOURCE_AUDIENCE!, // Application.resourceAudience
}))
```
