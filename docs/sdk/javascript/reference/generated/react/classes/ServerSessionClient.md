[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / ServerSessionClient

# Class: ServerSessionClient

An independent Cookie client. It has no TokenManager or browser OAuth material.

## Constructors

### Constructor

> **new ServerSessionClient**(`config`): `ServerSessionClient`

#### Parameters

##### config

[`IamConfig`](../interfaces/IamConfig.md)

#### Returns

`ServerSessionClient`

## Properties

### accountSecurity

> `readonly` **accountSecurity**: [`AccountSecurityOperations`](AccountSecurityOperations.md)

***

### config

> `readonly` **config**: [`IamConfig`](../interfaces/IamConfig.md)

***

### identity

> `readonly` **identity**: `SessionIdentityClient`

***

### invitations

> `readonly` **invitations**: [`SessionInvitationJourneyClient`](SessionInvitationJourneyClient.md)

***

### mode

> `readonly` **mode**: `"server_session"`

***

### session

> `readonly` **session**: [`ServerSession`](ServerSession.md)

## Accessors

### clientId

#### Get Signature

> **get** **clientId**(): `string`

##### Returns

`string`

***

### state

#### Get Signature

> **get** **state**(): `object`

##### Returns

`object`

###### assertCurrent

> **assertCurrent**: (`generation`) => `void`

###### Parameters

###### generation

`number`

###### Returns

`void`

###### clear

> **clear**: (`reason?`) => `void`

###### Parameters

###### reason?

[`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md)

###### Returns

`void`

###### getUser

> **getUser**: () => [`IamUser`](../interfaces/IamUser.md) \| `null`

###### Returns

[`IamUser`](../interfaces/IamUser.md) \| `null`

###### getViewState

> **getViewState**: () => `object`

###### Returns

`object`

###### error

> **error**: `Error` \| `null`

###### expiresAt

> **expiresAt**: `number` \| `null`

###### status

> **status**: `"error"` \| `"anonymous"` \| `"loading"` \| `"ready"` \| `"expired"`

###### isAuthenticated

> **isAuthenticated**: () => `boolean`

###### Returns

`boolean`

###### subscribe

> **subscribe**: (`listener`) => () => `boolean` = `session.subscribe`

###### Parameters

###### listener

() => `void`

###### Returns

() => `boolean`

###### generation

###### Get Signature

> **get** **generation**(): `number`

###### Returns

`number`

###### invalidationReason

###### Get Signature

> **get** **invalidationReason**(): [`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) \| `null`

###### Returns

[`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) \| `null`

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

> **beginAuthentication**(): `Promise`\<[`SessionLogin`](SessionLogin.md)\>

#### Returns

`Promise`\<[`SessionLogin`](SessionLogin.md)\>

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

### challengeMfaOperation()

> **challengeMfaOperation**(...`args`): `Promise`\<[`MfaOperationChallengeResult`](../interfaces/MfaOperationChallengeResult.md)\>

#### Parameters

##### args

...\[`string`, `string`\]

#### Returns

`Promise`\<[`MfaOperationChallengeResult`](../interfaces/MfaOperationChallengeResult.md)\>

***

### changePassword()

> **changePassword**(`body`): `Promise`\<`void`\>

#### Parameters

##### body

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

> **completeAuthentication**(`flow`, `committed?`): `Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

#### Parameters

##### flow

[`AuthenticationFlow`](../type-aliases/AuthenticationFlow.md)

##### committed?

() => `void`

#### Returns

`Promise`\<[`ServerSessionView`](../type-aliases/ServerSessionView.md)\>

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

### consumePurpose()

> **consumePurpose**(`trigger`): `string`

#### Parameters

##### trigger

`string`

#### Returns

`string`

***

### createMfaOperation()

> **createMfaOperation**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[[`MfaOperationType`](../type-aliases/MfaOperationType.md), `number`, `string`\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### credentials()

> **credentials**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

***

### discover()

> **discover**(): `Promise`\<`never`\>

#### Returns

`Promise`\<`never`\>

***

### dispose()

> **dispose**(): `void`

#### Returns

`void`

***

### enrollmentReauthenticate()

> **enrollmentReauthenticate**(`method`, `password`): `Promise`\<`void`\>

#### Parameters

##### method

`"webauthn"`

##### password

`string`

#### Returns

`Promise`\<`void`\>

***

### enrollWebAuthn()

> **enrollWebAuthn**(): `Promise`\<\{ `expiresAt`: `string`; `publicKeyCredentialCreationOptions`: `string`; `ref`: `string`; \}\>

#### Returns

`Promise`\<\{ `expiresAt`: `string`; `publicKeyCredentialCreationOptions`: `string`; `ref`: `string`; \}\>

***

### fetchPermissions()

> **fetchPermissions**(): `Promise`\<`string`[]\>

#### Returns

`Promise`\<`string`[]\>

***

### getAccessToken()

> **getAccessToken**(): `never`

#### Returns

`never`

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

> **getAppContinuation**(): `Promise`\<`never`\>

#### Returns

`Promise`\<`never`\>

***

### getCurrentAccountOrganization()

> **getCurrentAccountOrganization**(): `Promise`\<[`AccountOrganization`](../interfaces/AccountOrganization.md) \| `null`\>

#### Returns

`Promise`\<[`AccountOrganization`](../interfaces/AccountOrganization.md) \| `null`\>

***

### getLogoutUrl()

> **getLogoutUrl**(`_options?`): `Promise`\<`never`\>

#### Parameters

##### \_options?

[`LogoutUrlOptions`](../interfaces/LogoutUrlOptions.md)

#### Returns

`Promise`\<`never`\>

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

> **handleCallback**(`_code`, `_state`): `Promise`\<`never`\>

#### Parameters

##### \_code

`string`

##### \_state

`string`

#### Returns

`Promise`\<`never`\>

***

### handleRedirectCallback()

> **handleRedirectCallback**(`_options?`): `Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

#### Parameters

##### \_options?

[`RedirectCallbackOptions`](../interfaces/RedirectCallbackOptions.md)

#### Returns

`Promise`\<[`RedirectCallbackResult`](../type-aliases/RedirectCallbackResult.md)\>

***

### hasAccountOrganizationMembership()

> **hasAccountOrganizationMembership**(`id`): `Promise`\<`boolean`\>

#### Parameters

##### id

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

### listWorkspaces()

> **listWorkspaces**(): `Promise`\<`object`[]\>

#### Returns

`Promise`\<`object`[]\>

***

### logout()

> **logout**(`_options?`): `Promise`\<`void`\>

#### Parameters

##### \_options?

[`LogoutOptions`](../interfaces/LogoutOptions.md)

#### Returns

`Promise`\<`void`\>

***

### logoutAccount()

> **logoutAccount**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### mfaStatus()

> **mfaStatus**(): `Promise`\<`unknown`\>

#### Returns

`Promise`\<`unknown`\>

***

### previewRegistrationGrant()

> **previewRegistrationGrant**(`_input`): `Promise`\<`never`\>

#### Parameters

##### \_input

[`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)

#### Returns

`Promise`\<`never`\>

***

### reauthenticateMfaOperation()

> **reauthenticateMfaOperation**(...`args`): `Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

#### Parameters

##### args

...\[`string`, [`MfaOperationReauthentication`](../type-aliases/MfaOperationReauthentication.md)\]

#### Returns

`Promise`\<[`MfaOperation`](../interfaces/MfaOperation.md)\>

***

### recoveryCodesRemaining()

> **recoveryCodesRemaining**(): `Promise`\<`number`\>

#### Returns

`Promise`\<`number`\>

***

### refreshToken()

> **refreshToken**(): `Promise`\<`never`\>

#### Returns

`Promise`\<`never`\>

***

### rememberIdentityPurpose()

> **rememberIdentityPurpose**(`ref`): `void`

#### Parameters

##### ref

`string`

#### Returns

`void`

***

### removeCredential()

> **removeCredential**(`id`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### request()

> **request**(`request`): `Promise`\<`unknown`\>

#### Parameters

##### request

[`SessionRequest`](../type-aliases/SessionRequest.md)

#### Returns

`Promise`\<`unknown`\>

***

### requestPasswordReset()

> **requestPasswordReset**(`body`): `Promise`\<`void`\>

#### Parameters

##### body

[`RequestPasswordResetInput`](../interfaces/RequestPasswordResetInput.md)

#### Returns

`Promise`\<`void`\>

***

### resetPassword()

> **resetPassword**(`body`): `Promise`\<`void`\>

#### Parameters

##### body

[`ResetPasswordInput`](../interfaces/ResetPasswordInput.md)

#### Returns

`Promise`\<`void`\>

***

### restoreSession()

> **restoreSession**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### resumeMagicLink()

> **resumeMagicLink**(`_url`): `Promise`\<`never`\>

#### Parameters

##### \_url

`string`

#### Returns

`Promise`\<`never`\>

***

### resumeProviderCallback()

> **resumeProviderCallback**(`_url`, `committed?`, `check?`): `Promise`\<\{ `kind`: `"session"`; `transaction?`: `undefined`; `view?`: `undefined`; \} \| \{ `kind`: `"continuation"`; `transaction`: [`SessionLogin`](SessionLogin.md); `view`: [`LoginView`](../type-aliases/LoginView.md); \}\>

#### Parameters

##### \_url

`string`

##### committed?

() => `void`

##### check?

() => `void`

#### Returns

`Promise`\<\{ `kind`: `"session"`; `transaction?`: `undefined`; `view?`: `undefined`; \} \| \{ `kind`: `"continuation"`; `transaction`: [`SessionLogin`](SessionLogin.md); `view`: [`LoginView`](../type-aliases/LoginView.md); \}\>

***

### revokeAccountSession()

> **revokeAccountSession**(`id`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### revokeOtherAccountSessions()

> **revokeOtherAccountSessions**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### selectWorkspace()

> **selectWorkspace**(`workspaceId`): `Promise`\<`void`\>

#### Parameters

##### workspaceId

`string`

#### Returns

`Promise`\<`void`\>

***

### sendEmailVerification()

> **sendEmailVerification**(`_input`): `Promise`\<`never`\>

#### Parameters

##### \_input

[`SendEmailVerificationInput`](../interfaces/SendEmailVerificationInput.md)

#### Returns

`Promise`\<`never`\>

***

### startAuthorizationFlow()

> **startAuthorizationFlow**(`_options?`): `Promise`\<`string`\>

#### Parameters

##### \_options?

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

> **startProviderAuthorizationFlow**(`provider`, `options?`): `Promise`\<`string`\>

#### Parameters

##### provider

`string` \| [`IdentityProviderOption`](../interfaces/IdentityProviderOption.md) \| [`AuthMethodIdpProviderResponse`](../interfaces/AuthMethodIdpProviderResponse.md)

##### options?

[`ProviderAuthorizationOptions`](../interfaces/ProviderAuthorizationOptions.md) = `{}`

#### Returns

`Promise`\<`string`\>

***

### startStepUp()

> **startStepUp**(`trigger`, `reason`): `Promise`\<\{ `availableMethods`: `string`[]; `ref`: `string`; `startWebAuthn`: () => `Promise`\<`unknown`\>; `verifyTotp`: (`code`) => `Promise`\<`void`\>; `verifyWebAuthn`: (`credential`) => `Promise`\<`void`\>; \}\>

#### Parameters

##### trigger

`string`

##### reason

`string`

#### Returns

`Promise`\<\{ `availableMethods`: `string`[]; `ref`: `string`; `startWebAuthn`: () => `Promise`\<`unknown`\>; `verifyTotp`: (`code`) => `Promise`\<`void`\>; `verifyWebAuthn`: (`credential`) => `Promise`\<`void`\>; \}\>

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

> **verifyEmail**(`_input`): `Promise`\<`never`\>

#### Parameters

##### \_input

[`VerifyEmailInput`](../interfaces/VerifyEmailInput.md)

#### Returns

`Promise`\<`never`\>

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

***

### verifyRecoveryCode()

> **verifyRecoveryCode**(`code`): `Promise`\<`boolean`\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`boolean`\>

***

### verifyWebAuthnEnrollment()

> **verifyWebAuthnEnrollment**(`ref`, `credential`): `Promise`\<`unknown`\>

#### Parameters

##### ref

`string`

##### credential

`string`

#### Returns

`Promise`\<`unknown`\>
