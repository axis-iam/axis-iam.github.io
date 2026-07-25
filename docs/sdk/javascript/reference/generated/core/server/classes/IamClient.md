[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / IamClient

# Class: IamClient

Fetch-based HTTP client for IAM server's public auth and confidential SDK endpoints.
Handles retries, timeouts, and authentication.

## Constructors

### Constructor

> **new IamClient**(`config`): `IamClient`

#### Parameters

##### config

`Pick`\<[`IamSdkConfig`](../interfaces/IamSdkConfig.md), `"endpoint"` \| `"clientId"` \| `"clientSecret"`\>

#### Returns

`IamClient`

## Methods

### listPermissions()

> **listPermissions**(`clientId`): `Promise`\<[`PermissionsSnapshot`](../interfaces/PermissionsSnapshot.md)\>

List role permission snapshots for the app.
GET /open/v1/apps/&#123;clientId&#125;/permissions

#### Parameters

##### clientId

`string`

#### Returns

`Promise`\<[`PermissionsSnapshot`](../interfaces/PermissionsSnapshot.md)\>

***

### requestPasswordReset()

> **requestPasswordReset**(`input`): `Promise`\<`void`\>

Request a password reset email for an application user.
POST /api/v1/auth/password/forgot

#### Parameters

##### input

[`RequestPasswordResetInput`](../../index/interfaces/RequestPasswordResetInput.md)

#### Returns

`Promise`\<`void`\>

***

### resetPassword()

> **resetPassword**(`input`): `Promise`\<`void`\>

Complete password reset with an opaque reset token.
POST /api/v1/auth/password/reset

#### Parameters

##### input

[`ResetPasswordInput`](../../index/interfaces/ResetPasswordInput.md)

#### Returns

`Promise`\<`void`\>

***

### resolvePermissions()

> **resolvePermissions**(`clientId`, `roles`): `Promise`\<[`ResolvePermissionsResponse`](../interfaces/ResolvePermissionsResponse.md)\>

Resolve permissions for given roles.
POST /open/v1/permissions:resolve

#### Parameters

##### clientId

`string`

##### roles

`string`[]

#### Returns

`Promise`\<[`ResolvePermissionsResponse`](../interfaces/ResolvePermissionsResponse.md)\>
