[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / IamConfig

# Interface: IamConfig

SDK configuration

## Extended by

- [`IamProviderProps`](IamProviderProps.md)

## Properties

### audience?

> `optional` **audience?**: `string`

Application.resourceAudience requested for access tokens; this is not clientId.

***

### ~~authMethods?~~

> `optional` **authMethods?**: (`"password"` \| `"sms"` \| `"magic_link"`)[]

#### Deprecated

Embedded SignIn/SignUp visibility is resolved from
GET /api/v1/apps/&#123;clientId&#125;/auth-methods. This field no longer creates
visible password, SMS, or magic-link methods at runtime.

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

### ~~socialProviders?~~

> `optional` **socialProviders?**: [`SocialProviderConfig`](SocialProviderConfig.md)[]

#### Deprecated

Embedded login discovers provider buttons from IAM. Static
entries can only override display names for matching backend-enabled
providers; they do not create clickable providers by themselves.

***

### tokenStorage?

> `optional` **tokenStorage?**: `"memory"` \| `"sessionStorage"`

Token and resolved-permission storage strategy for the browser SDK.
Defaults to memory-only. sessionStorage persistence is browser-readable
and should be enabled only when the app deliberately accepts that risk.
