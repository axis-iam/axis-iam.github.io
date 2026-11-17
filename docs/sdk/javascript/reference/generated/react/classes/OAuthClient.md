[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / OAuthClient

# Class: OAuthClient

## Constructors

### Constructor

> **new OAuthClient**(`config`, `options?`): `OAuthClient`

#### Parameters

##### config

[`IamConfig`](../interfaces/IamConfig.md)

##### options?

###### startPaused?

`boolean`

#### Returns

`OAuthClient`

## Properties

### accountSecurity

> `readonly` **accountSecurity**: [`AccountSecurityOperations`](AccountSecurityOperations.md)

***

### clientId

> `readonly` **clientId**: `string`

***

### config

> `readonly` **config**: [`IamConfig`](../interfaces/IamConfig.md)

***

### identity

> `readonly` **identity**: [`IdentityClient`](IdentityClient.md)

***

### mode

> `readonly` **mode**: `"oauth_tokens"`

***

### tokenManager

> `readonly` **tokenManager**: `TokenManager`

## Accessors

### invitations

#### Get Signature

> **get** **invitations**(): [`InvitationJourneyClient`](InvitationJourneyClient.md)

##### Returns

[`InvitationJourneyClient`](InvitationJourneyClient.md)

***

### state

#### Get Signature

> **get** **state**(): `TokenManager`

##### Returns

`TokenManager`

## Methods

### authorizeMfaOperation()

> **authorizeMfaOperation**(...`args`): `Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; `ref`: `string`; \}\>

#### Parameters

##### args

...\[`string`, [`MfaOperationAuthorizeInput`](../interfaces/MfaOperationAuthorizeInput.md)\]

#### Returns

`Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; `ref`: `string`; \}\>

***

### beginAuthentication()

> **beginAuthentication**(): `Promise`\<[`AuthenticationTransaction`](AuthenticationTransaction.md)\>

Public primary authentication; Custom, Embedded and Dialog share this protocol.

#### Returns

`Promise`\<[`AuthenticationTransaction`](AuthenticationTransaction.md)\>

***

### beginTotpEnrollmentOperation()

> **beginTotpEnrollmentOperation**(...`args`): `Promise`\<[`MfaTotpBeginResult`](../interfaces/MfaTotpBeginResult.md)\>

#### Parameters

##### args

...\[`string`\]

#### Returns

`Promise`\<[`MfaTotpBeginResult`](../interfaces/MfaTotpBeginResult.md)\>

***

### cancelMfaOperation()

> **cancelMfaOperation**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### canResumeProviderCallback()

> **canResumeProviderCallback**(`url`): `boolean`

#### Parameters

##### url

`string`

#### Returns

`boolean`

***

### challengeMfaOperation()

> **challengeMfaOperation**(...`args`): `Promise`\<[`MfaOperationChallengeResult`](../interfaces/MfaOperationChallengeResult.md)\>

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`Promise`\<[`MfaOperationChallengeResult`](../interfaces/MfaOperationChallengeResult.md)\>

***

### changePassword()

> **changePassword**(`input`): `Promise`\<`void`\>

#### Parameters

##### input

[`ChangePasswordInput`](../interfaces/ChangePasswordInput.md)

#### Returns

`Promise`\<`void`\>

***

### checkAccountPermission()

> **checkAccountPermission**(`input`): `Promise`\<[`AccountPermissionCheckResponse`](../interfaces/AccountPermissionCheckResponse.md)\>

#### Parameters

##### input

[`AccountPermissionCheckInput`](../interfaces/AccountPermissionCheckInput.md)

#### Returns

`Promise`\<[`AccountPermissionCheckResponse`](../interfaces/AccountPermissionCheckResponse.md)\>

***

### completeAuthentication()

> **completeAuthentication**(`transaction`, `onCommitted?`): `Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

#### Parameters

##### transaction

[`AuthenticationFlow`](../type-aliases/AuthenticationFlow.md)

##### onCommitted?

() => `void`

#### Returns

`Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

***

### completeMfaOperation()

> **completeMfaOperation**(...`args`): `Promise`\<[`MfaCompletionResult`](../interfaces/MfaCompletionResult.md)\>

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`Promise`\<[`MfaCompletionResult`](../interfaces/MfaCompletionResult.md)\>

***

### completeMfaProviderAuthorization()

> **completeMfaProviderAuthorization**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### createMfaOperation()

> **createMfaOperation**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[[`MfaOperationType`](../type-aliases/MfaOperationType.md), `number`, `string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### discover()

> **discover**(): `Promise`\<[`OIDCConfiguration`](../interfaces/OIDCConfiguration.md)\>

#### Returns

`Promise`\<[`OIDCConfiguration`](../interfaces/OIDCConfiguration.md)\>

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

***

### fetchPermissions()

> **fetchPermissions**(): `Promise`\<`string`[]\>

Fetch user permissions from the server.
Called after OAuth callback and token refresh.
Endpoint: GET /api/v1/auth/me/permissions (current-user permissions)

#### Returns

`Promise`\<`string`[]\>

***

### getAccessToken()

> **getAccessToken**(): `string` \| `null`

#### Returns

`string` \| `null`

***

### getAccountPermissionSummary()

> **getAccountPermissionSummary**(`organizationId?`): `Promise`\<[`AccountPermissionSummary`](../interfaces/AccountPermissionSummary.md)\>

#### Parameters

##### organizationId?

`string` \| `null`

#### Returns

`Promise`\<[`AccountPermissionSummary`](../interfaces/AccountPermissionSummary.md)\>

***

### getAccountProfile()

> **getAccountProfile**(): `Promise`\<[`AccountProfile`](../interfaces/AccountProfile.md)\>

#### Returns

`Promise`\<[`AccountProfile`](../interfaces/AccountProfile.md)\>

***

### getAccountSecuritySummary()

> **getAccountSecuritySummary**(): `Promise`\<[`AccountSecuritySummary`](../interfaces/AccountSecuritySummary.md)\>

#### Returns

`Promise`\<[`AccountSecuritySummary`](../interfaces/AccountSecuritySummary.md)\>

***

### getAppContinuation()

> **getAppContinuation**(): `Promise`\<[`AppContinuation`](../interfaces/AppContinuation.md)\>

#### Returns

`Promise`\<[`AppContinuation`](../interfaces/AppContinuation.md)\>

***

### getCurrentAccountOrganization()

> **getCurrentAccountOrganization**(): `Promise`\<[`AccountOrganization`](../interfaces/AccountOrganization.md) \| `null`\>

#### Returns

`Promise`\<[`AccountOrganization`](../interfaces/AccountOrganization.md) \| `null`\>

***

### getLogoutUrl()

> **getLogoutUrl**(`options?`): `Promise`\<`string` \| `null`\>

#### Parameters

##### options?

[`LogoutUrlOptions`](../interfaces/LogoutUrlOptions.md) = `{}`

#### Returns

`Promise`\<`string` \| `null`\>

***

### getMfaCapabilities()

> **getMfaCapabilities**(...`args`): `Promise`\<[`MfaCapabilities`](../interfaces/MfaCapabilities.md)\>

#### Parameters

##### args

...\[\]

#### Returns

`Promise`\<[`MfaCapabilities`](../interfaces/MfaCapabilities.md)\>

***

### getMfaOperation()

> **getMfaOperation**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### getPublicAuthMethods()

> **getPublicAuthMethods**(): `Promise`\<[`PublicAuthMethodsResponse`](../interfaces/PublicAuthMethodsResponse.md)\>

#### Returns

`Promise`\<[`PublicAuthMethodsResponse`](../interfaces/PublicAuthMethodsResponse.md)\>

***

### getPublicAuthPolicy()

> **getPublicAuthPolicy**(): `Promise`\<[`PublicAuthPolicyResponse`](../interfaces/PublicAuthPolicyResponse.md)\>

#### Returns

`Promise`\<[`PublicAuthPolicyResponse`](../interfaces/PublicAuthPolicyResponse.md)\>

***

### getRecoveryCodesRemaining()

> **getRecoveryCodesRemaining**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

***

### handleCallback()

> **handleCallback**(`code`, `state`): `Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

#### Parameters

##### code

`string`

##### state

`string`

#### Returns

`Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

***

### handleRedirectCallback()

> **handleRedirectCallback**(`options?`): `Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

#### Parameters

##### options?

[`RedirectCallbackOptions`](../interfaces/RedirectCallbackOptions.md) = `{}`

#### Returns

`Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

***

### hasAccountOrganizationMembership()

> **hasAccountOrganizationMembership**(`organizationId`): `Promise`\<`boolean`\>

#### Parameters

##### organizationId

`string`

#### Returns

`Promise`\<`boolean`\>

***

### initialize()

> **initialize**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### isAuthenticated()

> **isAuthenticated**(): `boolean`

#### Returns

`boolean`

***

### listAccountLoginMethods()

> **listAccountLoginMethods**(): `Promise`\<[`AccountLoginMethods`](../interfaces/AccountLoginMethods.md)\>

#### Returns

`Promise`\<[`AccountLoginMethods`](../interfaces/AccountLoginMethods.md)\>

***

### listAccountOrganizations()

> **listAccountOrganizations**(): `Promise`\<[`AccountOrganization`](../interfaces/AccountOrganization.md)[]\>

#### Returns

`Promise`\<[`AccountOrganization`](../interfaces/AccountOrganization.md)[]\>

***

### listAccountSessions()

> **listAccountSessions**(): `Promise`\<[`AccountSession`](../interfaces/AccountSession.md)[]\>

#### Returns

`Promise`\<[`AccountSession`](../interfaces/AccountSession.md)[]\>

***

### listIdentityProviders()

> **listIdentityProviders**(): `Promise`\<[`IdentityProviderOption`](../interfaces/IdentityProviderOption.md)[]\>

#### Returns

`Promise`\<[`IdentityProviderOption`](../interfaces/IdentityProviderOption.md)[]\>

***

### listLinkableIdentityProviders()

> **listLinkableIdentityProviders**(): `Promise`\<[`LinkableIdentityProvider`](../interfaces/LinkableIdentityProvider.md)[]\>

#### Returns

`Promise`\<[`LinkableIdentityProvider`](../interfaces/LinkableIdentityProvider.md)[]\>

***

### logout()

> **logout**(`options?`): `Promise`\<`void`\>

#### Parameters

##### options?

[`LogoutOptions`](../interfaces/LogoutOptions.md) = `{}`

#### Returns

`Promise`\<`void`\>

***

### logoutAccount()

> **logoutAccount**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### previewRegistrationGrant()

> **previewRegistrationGrant**(`input`): `Promise`\<[`RegistrationGrantPreviewResponse`](../interfaces/RegistrationGrantPreviewResponse.md)\>

#### Parameters

##### input

[`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)

#### Returns

`Promise`\<[`RegistrationGrantPreviewResponse`](../interfaces/RegistrationGrantPreviewResponse.md)\>

***

### reauthenticateMfaOperation()

> **reauthenticateMfaOperation**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`, [`MfaOperationReauthentication`](../type-aliases/MfaOperationReauthentication.md)\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### refreshToken()

> **refreshToken**(): `Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

#### Returns

`Promise`\<[`TokenSet`](../interfaces/TokenSet.md)\>

***

### requestPasswordReset()

> **requestPasswordReset**(`input`): `Promise`\<`void`\>

#### Parameters

##### input

[`RequestPasswordResetInput`](../interfaces/RequestPasswordResetInput.md)

#### Returns

`Promise`\<`void`\>

***

### resetPassword()

> **resetPassword**(`input`): `Promise`\<`void`\>

#### Parameters

##### input

[`ResetPasswordInput`](../interfaces/ResetPasswordInput.md)

#### Returns

`Promise`\<`void`\>

***

### resumeMagicLink()

> **resumeMagicLink**(`url`): `Promise`\<[`AuthenticationTransaction`](AuthenticationTransaction.md)\>

#### Parameters

##### url

`string`

#### Returns

`Promise`\<[`AuthenticationTransaction`](AuthenticationTransaction.md)\>

***

### resumeProviderCallback()

> **resumeProviderCallback**(`url`, `onCommitted?`, `assertAttempt?`): `Promise`\<`ProviderCallbackResult`\>

#### Parameters

##### url

`string`

##### onCommitted?

() => `void`

##### assertAttempt?

() => `void`

#### Returns

`Promise`\<`ProviderCallbackResult`\>

***

### revokeAccountSession()

> **revokeAccountSession**(`sessionId`): `Promise`\<`void`\>

#### Parameters

##### sessionId

`string`

#### Returns

`Promise`\<`void`\>

***

### revokeOtherAccountSessions()

> **revokeOtherAccountSessions**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### sendEmailVerification()

> **sendEmailVerification**(`input`): `Promise`\<[`EmailVerificationResponse`](../interfaces/EmailVerificationResponse.md)\>

#### Parameters

##### input

[`SendEmailVerificationInput`](../interfaces/SendEmailVerificationInput.md)

#### Returns

`Promise`\<[`EmailVerificationResponse`](../interfaces/EmailVerificationResponse.md)\>

***

### setPermissions()

> **setPermissions**(`permissions`): `void`

Set permissions directly (e.g., from embedded login response).

#### Parameters

##### permissions

`string`[]

#### Returns

`void`

***

### startAuthorizationFlow()

> **startAuthorizationFlow**(`options?`): `Promise`\<`string`\>

#### Parameters

##### options?

###### locale?

`string`

#### Returns

`Promise`\<`string`\>

***

### startMfaOperationStepUp()

> **startMfaOperationStepUp**(...`args`): `Promise`\<[`MfaOperationStepUpResult`](../interfaces/MfaOperationStepUpResult.md)\>

#### Parameters

##### args

...\[`string`\]

#### Returns

`Promise`\<[`MfaOperationStepUpResult`](../interfaces/MfaOperationStepUpResult.md)\>

***

### startMfaOperationWebAuthn()

> **startMfaOperationWebAuthn**(...`args`): `Promise`\<[`MfaOperationWebAuthnStartResult`](../interfaces/MfaOperationWebAuthnStartResult.md)\>

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`Promise`\<[`MfaOperationWebAuthnStartResult`](../interfaces/MfaOperationWebAuthnStartResult.md)\>

***

### startProviderAuthorizationFlow()

> **startProviderAuthorizationFlow**(`providerIdOrOption`, `options?`): `Promise`\<`string`\>

#### Parameters

##### providerIdOrOption

`string` \| [`IdentityProviderOption`](../interfaces/IdentityProviderOption.md) \| [`AuthMethodIdpProviderResponse`](../interfaces/AuthMethodIdpProviderResponse.md)

##### options?

[`ProviderAuthorizationOptions`](../interfaces/ProviderAuthorizationOptions.md) = `{}`

#### Returns

`Promise`\<`string`\>

***

### switchAccountOrganization()

> **switchAccountOrganization**(`organizationId`): `Promise`\<[`OrganizationSwitchResponse`](../interfaces/OrganizationSwitchResponse.md)\>

#### Parameters

##### organizationId

`string`

#### Returns

`Promise`\<[`OrganizationSwitchResponse`](../interfaces/OrganizationSwitchResponse.md)\>

***

### updateAccountProfile()

> **updateAccountProfile**(`input`): `Promise`\<[`AccountProfile`](../interfaces/AccountProfile.md)\>

#### Parameters

##### input

[`AccountUpdateProfileInput`](../interfaces/AccountUpdateProfileInput.md)

#### Returns

`Promise`\<[`AccountProfile`](../interfaces/AccountProfile.md)\>

***

### verifyEmail()

> **verifyEmail**(`input`): `Promise`\<[`EmailVerificationResponse`](../interfaces/EmailVerificationResponse.md)\>

#### Parameters

##### input

[`VerifyEmailInput`](../interfaces/VerifyEmailInput.md)

#### Returns

`Promise`\<[`EmailVerificationResponse`](../interfaces/EmailVerificationResponse.md)\>

***

### verifyMfaOperationStepUp()

> **verifyMfaOperationStepUp**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`, `string`, `string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### verifyMfaOperationWebAuthn()

> **verifyMfaOperationWebAuthn**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`, `string`, `string`, `string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>
