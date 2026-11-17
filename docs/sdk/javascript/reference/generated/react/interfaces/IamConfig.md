[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / IamConfig

# Interface: IamConfig

SDK configuration

## Extended by

- [`IamProviderProps`](IamProviderProps.md)

## Properties

### audience?

> `optional` **audience?**: `string`

Application.resourceAudience requested for access tokens; this is not clientId.

***

### clientId

> **clientId**: `string`

SPA/NATIVE public ApplicationClient.clientId. Browser SDK config must not include a secret.

***

### issuerUri

> **issuerUri**: `string`

***

### postLogoutRedirectUri?

> `optional` **postLogoutRedirectUri?**: `string`

***

### redirectUri

> **redirectUri**: `string`

***

### scopes?

> `optional` **scopes?**: `string`[]

***

### sessionLoginUri?

> `optional` **sessionLoginUri?**: `string`

Required only in server_session mode; never inferred from issuer or token availability.

***

### sessionMode?

> `optional` **sessionMode?**: `"oauth_tokens"` \| `"server_session"`

***

### sessionProviderReturnUri?

> `optional` **sessionProviderReturnUri?**: `string`

Exact same-origin BFF provider callback path, without query/hash; BFF owns PKCE and upstream IDs.

***

### sessionTransport?

> `optional` **sessionTransport?**: [`SessionTransport`](SessionTransport.md)

***

### tokenStorage?

> `optional` **tokenStorage?**: `"memory"` \| `"sessionStorage"`

Token and resolved-permission storage strategy for the browser SDK.
Defaults to memory-only. sessionStorage persistence is browser-readable
and should be enabled only when the app deliberately accepts that risk.
