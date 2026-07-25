[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / PortalOpenApiClientConfig

# Interface: PortalOpenApiClientConfig

## Properties

### clientId

> **clientId**: `string`

M2M confidential ApplicationClient.clientId.

***

### clientSecret

> **clientSecret**: `string`

M2M confidential ApplicationClient secret. Never expose this to browser code.

***

### issuer

> **issuer**: `string`

IAM issuer/auth server base URL. Tokens are requested from `${issuer}/oauth2/token`.

***

### portalEndpoint

> **portalEndpoint**: `string`

iam-portal base URL used for `/open/v1/**` management requests.

***

### timeoutMs?

> `optional` **timeoutMs?**: `number`

Fetch timeout for token and Portal API requests. Defaults to 5000ms.

***

### tokenSkewSeconds?

> `optional` **tokenSkewSeconds?**: `number`

Seconds subtracted from `expires_in` before caching a token. Defaults to 30 seconds.
