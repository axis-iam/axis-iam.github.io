[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [server](../README.md) / AuthMiddlewareConfig

# Interface: AuthMiddlewareConfig

## Properties

### clientId

> **clientId**: `string`

ApplicationClient.clientId for a WEB/M2M confidential server-side client.

***

### clientSecret

> **clientSecret**: `string`

Secret for that WEB/M2M confidential ApplicationClient. Never expose it to browser bundles.

***

### issuerUri

> **issuerUri**: `string`

***

### protectedRoutes?

> `optional` **protectedRoutes?**: `string`[]

***

### publicRoutes?

> `optional` **publicRoutes?**: `string`[]

***

### redirectUri?

> `optional` **redirectUri?**: `string`

Absolute callback URL for the customer app. If omitted, defaults to
`${request origin}/callback`. The IAM login page owns IdP selection and
starts the Phase 1 runtime flow.
