[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / IamContextValue

# Interface: IamContextValue

## Properties

### client

> **client**: `OAuthClient`

Underlying OAuthClient instance (advanced usage)

***

### getAccessToken

> **getAccessToken**: () => `string` \| `null`

Get current access token (for API calls)

#### Returns

`string` \| `null`

***

### getAppContinuation

> **getAppContinuation**: () => `Promise`\<[`AppContinuation`](AppContinuation.md)\>

Resolve app-owned continuation values and configured client-level logout redirect

#### Returns

`Promise`\<[`AppContinuation`](AppContinuation.md)\>

***

### getLogoutUrl

> **getLogoutUrl**: (`options?`) => `Promise`\<`string` \| `null`\>

Build a valid IAM RP-Initiated Logout URL, or null when it cannot be started safely

#### Parameters

##### options?

[`LogoutUrlOptions`](LogoutUrlOptions.md)

#### Returns

`Promise`\<`string` \| `null`\>

***

### handleCallback

> **handleCallback**: (`code`, `state`) => `Promise`\<`void`\>

Handle OAuth callback (exchange code for tokens)

#### Parameters

##### code

`string`

##### state

`string`

#### Returns

`Promise`\<`void`\>

***

### handleRedirectCallback

> **handleRedirectCallback**: (`options?`) => `Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

Handle and scrub the current OAuth redirect callback URL

#### Parameters

##### options?

[`RedirectCallbackOptions`](RedirectCallbackOptions.md)

#### Returns

`Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

***

### initializationError

> **initializationError**: `Error` \| `null`

Initialization failure from discovery or startup permission refresh.

***

### isAuthenticated

> **isAuthenticated**: `boolean`

Whether user is authenticated

***

### isLoaded

> **isLoaded**: `boolean`

Whether the SDK has finished initializing

***

### login

> **login**: () => `Promise`\<`void`\>

Redirect to login page (Authorization Code + PKCE flow)

#### Returns

`Promise`\<`void`\>

***

### logout

> **logout**: (`options?`) => `Promise`\<`void`\>

Logout and optionally redirect to end session endpoint

#### Parameters

##### options?

[`LogoutOptions`](LogoutOptions.md)

#### Returns

`Promise`\<`void`\>

***

### permissionFetchError

> **permissionFetchError**: `Error` \| `null`

Most recent permissions fetch error. Permissions remain fail-closed on error.

***

### user

> **user**: [`IamUser`](IamUser.md) \| `null`

Current authenticated user (null if not logged in)
