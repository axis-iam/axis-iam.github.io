[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / useAuth

# Function: useAuth()

> **useAuth**(): `object`

Core authentication hook.

## Returns

### getAccessToken

> **getAccessToken**: () => `string` \| `null`

Get current access token for API calls

#### Returns

`string` \| `null`

### getAppContinuation

> **getAppContinuation**: () => `Promise`\<[`AppContinuation`](../interfaces/AppContinuation.md)\>

Read app continuation URIs from IAM auth-methods plus configured client logout redirect

#### Returns

`Promise`\<[`AppContinuation`](../interfaces/AppContinuation.md)\>

### getLogoutUrl

> **getLogoutUrl**: (`options?`) => `Promise`\<`string` \| `null`\>

Build a valid IAM logout URL, or null if local-only logout is required

#### Parameters

##### options?

[`LogoutUrlOptions`](../interfaces/LogoutUrlOptions.md)

#### Returns

`Promise`\<`string` \| `null`\>

### handleCallback

> **handleCallback**: (`code`, `state`) => `Promise`\<`void`\>

Handle OAuth callback — call this from your /callback route

#### Parameters

##### code

`string`

##### state

`string`

#### Returns

`Promise`\<`void`\>

### handleRedirectCallback

> **handleRedirectCallback**: (`options?`) => `Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

Handle the current OAuth callback URL and scrub callback parameters

#### Parameters

##### options?

[`RedirectCallbackOptions`](../interfaces/RedirectCallbackOptions.md)

#### Returns

`Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

### initializationError

> **initializationError**: `Error` \| `null`

Initialization failure, if discovery or startup checks failed

### isAuthenticated

> **isAuthenticated**: `boolean`

Whether user is authenticated

### isLoaded

> **isLoaded**: `boolean`

SDK has finished initializing

### login

> **login**: (`options?`) => `Promise`\<`void`\>

Redirect to OAuth login

#### Parameters

##### options?

###### locale?

`string`

#### Returns

`Promise`\<`void`\>

### logout

> **logout**: (`options?`) => `Promise`\<`void`\>

Logout (clears tokens, optionally redirects to end session)

#### Parameters

##### options?

[`LogoutOptions`](../interfaces/LogoutOptions.md)

#### Returns

`Promise`\<`void`\>

### permissionFetchError

> **permissionFetchError**: `Error` \| `null`

Most recent permission refresh error; permissions remain fail-closed

### refreshToken

> **refreshToken**: () => `Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

Shared refresh transaction; applies rotated tokens before resolving.

#### Returns

`Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

### sessionView

> **sessionView**: \{ `error`: `Error` \| `null`; `expiresAt`: `number` \| `null`; `status`: `"error"` \| `"anonymous"` \| `"loading"` \| `"ready"` \| `"expired"`; \} \| \{ `error`: `Error` \| `null`; `expiresAt`: `number` \| `null`; `status`: `"error"` \| `"anonymous"` \| `"loading"` \| `"ready"` \| `"expired"`; \}

### tokenRefreshError

> **tokenRefreshError**: [`IamTokenRefreshError`](../classes/IamTokenRefreshError.md) \| `null`

Last automatic/manual refresh failure, with safe retry metadata.

### user

> **user**: [`IamUser`](../interfaces/IamUser.md) \| `null`

Current user (null if not authenticated)

## Example

```tsx
function LoginButton() {
  const { login, logout, isAuthenticated, user } = useAuth()
  if (isAuthenticated) {
    return <button onClick={() => logout()}>Logout {user?.email}</button>
  }
  return <button onClick={() => login()}>Login</button>
}
```
