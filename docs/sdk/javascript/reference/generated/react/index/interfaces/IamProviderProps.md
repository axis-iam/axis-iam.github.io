[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / IamProviderProps

# Interface: IamProviderProps

SDK configuration

## Extends

- [`IamConfig`](IamConfig.md).`IamUiConfig`

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

#### Inherited from

`IamUiConfig.appearance`

***

### audience?

> `optional` **audience?**: `string`

Application.resourceAudience requested for access tokens; this is not clientId.

#### Inherited from

[`IamConfig`](IamConfig.md).[`audience`](IamConfig.md#audience)

***

### ~~authMethods?~~

> `optional` **authMethods?**: (`"password"` \| `"sms"` \| `"magic_link"`)[]

#### Deprecated

Embedded SignIn/SignUp visibility is resolved from
GET /api/v1/apps/&#123;clientId&#125;/auth-methods. This field no longer creates
visible password, SMS, or magic-link methods at runtime.

#### Inherited from

[`IamConfig`](IamConfig.md).[`authMethods`](IamConfig.md#authmethods)

***

### children

> **children**: `ReactNode`

***

### clientId

> **clientId**: `string`

SPA/NATIVE public ApplicationClient.clientId. Browser SDK config must not include a secret.

#### Inherited from

[`IamConfig`](IamConfig.md).[`clientId`](IamConfig.md#clientid)

***

### colorScheme?

> `optional` **colorScheme?**: [`IamColorScheme`](../type-aliases/IamColorScheme.md)

#### Inherited from

`IamUiConfig.colorScheme`

***

### darkAppearance?

> `optional` **darkAppearance?**: [`Appearance`](Appearance.md)

#### Inherited from

`IamUiConfig.darkAppearance`

***

### issuerUri

> **issuerUri**: `string`

#### Inherited from

[`IamConfig`](IamConfig.md).[`issuerUri`](IamConfig.md#issueruri)

***

### locale?

> `optional` **locale?**: [`IamLocale`](../type-aliases/IamLocale.md)

#### Inherited from

`IamUiConfig.locale`

***

### localization?

> `optional` **localization?**: `object`

#### accountCenter?

> `optional` **accountCenter?**: `object`

##### accountCenter.accessEmptyDetail?

> `optional` **accessEmptyDetail?**: `string`

##### accountCenter.accessEmptyTitle?

> `optional` **accessEmptyTitle?**: `string`

##### accountCenter.accountFallback?

> `optional` **accountFallback?**: `string`

##### accountCenter.activeSessions?

> `optional` **activeSessions?**: `string`

##### accountCenter.avatarUrl?

> `optional` **avatarUrl?**: `string`

##### accountCenter.back?

> `optional` **back?**: `string`

##### accountCenter.changePassword?

> `optional` **changePassword?**: `string`

##### accountCenter.changingPassword?

> `optional` **changingPassword?**: `string`

##### accountCenter.check?

> `optional` **check?**: `string`

##### accountCenter.checkingPermission?

> `optional` **checkingPermission?**: `string`

##### accountCenter.checkPermissionDetail?

> `optional` **checkPermissionDetail?**: `string`

##### accountCenter.checkPermissionLabel?

> `optional` **checkPermissionLabel?**: `string`

##### accountCenter.checkPermissionSummary?

> `optional` **checkPermissionSummary?**: `string`

##### accountCenter.close?

> `optional` **close?**: `string`

##### accountCenter.configured?

> `optional` **configured?**: `string`

##### accountCenter.confirmPassword?

> `optional` **confirmPassword?**: `string`

##### accountCenter.currentDevice?

> `optional` **currentDevice?**: `string`

##### accountCenter.currentPassword?

> `optional` **currentPassword?**: `string`

##### accountCenter.displayName?

> `optional` **displayName?**: `string`

##### accountCenter.emailNotVerified?

> `optional` **emailNotVerified?**: `string`

##### accountCenter.emailVerified?

> `optional` **emailVerified?**: `string`

##### accountCenter.enabled?

> `optional` **enabled?**: `string`

##### accountCenter.errorMessage?

> `optional` **errorMessage?**: (`message`) => `string`

###### Parameters

###### message

`string`

###### Returns

`string`

##### accountCenter.formatDateTime?

> `optional` **formatDateTime?**: (`value`) => `string`

###### Parameters

###### value

`string`

###### Returns

`string`

##### accountCenter.grantedPermissions?

> `optional` **grantedPermissions?**: `string`

##### accountCenter.ipAddress?

> `optional` **ipAddress?**: `string`

##### accountCenter.lastActive?

> `optional` **lastActive?**: `string`

##### accountCenter.loggingOut?

> `optional` **loggingOut?**: `string`

##### accountCenter.logOut?

> `optional` **logOut?**: `string`

##### accountCenter.menu?

> `optional` **menu?**: `string`

##### accountCenter.multiFactorAuthentication?

> `optional` **multiFactorAuthentication?**: `string`

##### accountCenter.newPassword?

> `optional` **newPassword?**: `string`

##### accountCenter.noPermissions?

> `optional` **noPermissions?**: `string`

##### accountCenter.noRoles?

> `optional` **noRoles?**: `string`

##### accountCenter.noSessionsDetail?

> `optional` **noSessionsDetail?**: `string`

##### accountCenter.noSessionsTitle?

> `optional` **noSessionsTitle?**: `string`

##### accountCenter.notConfigured?

> `optional` **notConfigured?**: `string`

##### accountCenter.notEnabled?

> `optional` **notEnabled?**: `string`

##### accountCenter.organization?

> `optional` **organization?**: `string`

##### accountCenter.passwordAria?

> `optional` **passwordAria?**: `string`

##### accountCenter.passwordChanged?

> `optional` **passwordChanged?**: `string`

##### accountCenter.passwordDescription?

> `optional` **passwordDescription?**: `string`

##### accountCenter.passwordHelp?

> `optional` **passwordHelp?**: `string`

##### accountCenter.passwordMismatchError?

> `optional` **passwordMismatchError?**: `string`

##### accountCenter.passwordRequiredError?

> `optional` **passwordRequiredError?**: `string`

##### accountCenter.passwordSection?

> `optional` **passwordSection?**: `string`

##### accountCenter.permissionPlaceholder?

> `optional` **permissionPlaceholder?**: `string`

##### accountCenter.permissionRequiredError?

> `optional` **permissionRequiredError?**: `string`

##### accountCenter.permissionResult?

> `optional` **permissionResult?**: (`permission`, `allowed`) => `string`

###### Parameters

###### permission

`string`

###### allowed

`boolean`

###### Returns

`string`

##### accountCenter.permissions?

> `optional` **permissions?**: `string`

##### accountCenter.permissionsAria?

> `optional` **permissionsAria?**: `string`

##### accountCenter.permissionsDescription?

> `optional` **permissionsDescription?**: `string`

##### accountCenter.permissionsLoading?

> `optional` **permissionsLoading?**: `string`

##### accountCenter.permissionsSection?

> `optional` **permissionsSection?**: `string`

##### accountCenter.permissionsTitle?

> `optional` **permissionsTitle?**: `string`

##### accountCenter.profileAria?

> `optional` **profileAria?**: `string`

##### accountCenter.profileDescription?

> `optional` **profileDescription?**: `string`

##### accountCenter.profileEmptyDetail?

> `optional` **profileEmptyDetail?**: `string`

##### accountCenter.profileEmptyTitle?

> `optional` **profileEmptyTitle?**: `string`

##### accountCenter.profileLoading?

> `optional` **profileLoading?**: `string`

##### accountCenter.profileSaved?

> `optional` **profileSaved?**: `string`

##### accountCenter.profileSection?

> `optional` **profileSection?**: `string`

##### accountCenter.profileStatus?

> `optional` **profileStatus?**: (`status`) => `string`

###### Parameters

###### status

`string`

###### Returns

`string`

##### accountCenter.retry?

> `optional` **retry?**: `string`

##### accountCenter.retrying?

> `optional` **retrying?**: `string`

##### accountCenter.revokeCurrentSession?

> `optional` **revokeCurrentSession?**: `string`

##### accountCenter.revokeOtherSessions?

> `optional` **revokeOtherSessions?**: `string`

##### accountCenter.revokeSession?

> `optional` **revokeSession?**: `string`

##### accountCenter.revokeSessionAria?

> `optional` **revokeSessionAria?**: (`sessionId`) => `string`

###### Parameters

###### sessionId

`string`

###### Returns

`string`

##### accountCenter.revokingOtherSessions?

> `optional` **revokingOtherSessions?**: `string`

##### accountCenter.role?

> `optional` **role?**: `string`

##### accountCenter.roles?

> `optional` **roles?**: `string`

##### accountCenter.saveProfile?

> `optional` **saveProfile?**: `string`

##### accountCenter.savingProfile?

> `optional` **savingProfile?**: `string`

##### accountCenter.sectionsAria?

> `optional` **sectionsAria?**: `string`

##### accountCenter.securityLoading?

> `optional` **securityLoading?**: `string`

##### accountCenter.securityOverview?

> `optional` **securityOverview?**: `string`

##### accountCenter.securityUnavailable?

> `optional` **securityUnavailable?**: `string`

##### accountCenter.sessionControls?

> `optional` **sessionControls?**: `string`

##### accountCenter.sessionControlsDetail?

> `optional` **sessionControlsDetail?**: `string`

##### accountCenter.sessionCount?

> `optional` **sessionCount?**: (`count`) => `string`

###### Parameters

###### count

`number`

###### Returns

`string`

##### accountCenter.sessionsAria?

> `optional` **sessionsAria?**: `string`

##### accountCenter.sessionsDescription?

> `optional` **sessionsDescription?**: `string`

##### accountCenter.sessionsLoading?

> `optional` **sessionsLoading?**: `string`

##### accountCenter.sessionsSection?

> `optional` **sessionsSection?**: `string`

##### accountCenter.signedIn?

> `optional` **signedIn?**: `string`

##### accountCenter.title?

> `optional` **title?**: `string`

##### accountCenter.unknownDevice?

> `optional` **unknownDevice?**: `string`

##### accountCenter.unknownValue?

> `optional` **unknownValue?**: `string`

##### accountCenter.username?

> `optional` **username?**: `string`

#### auth?

> `optional` **auth?**: `object`

##### auth.change?

> `optional` **change?**: `string`

##### auth.continue?

> `optional` **continue?**: `string`

##### auth.credentialMethod?

> `optional` **credentialMethod?**: (`method`) => `string`

###### Parameters

###### method

`"password"` \| `"sms"` \| `"magic_link"` \| `"email_otp"`

###### Returns

`string`

##### auth.email?

> `optional` **email?**: `string`

##### auth.emailPlaceholder?

> `optional` **emailPlaceholder?**: `string`

##### auth.forgotPassword?

> `optional` **forgotPassword?**: `string`

##### auth.identifierInvalid?

> `optional` **identifierInvalid?**: `string`

##### auth.identifierLabel?

> `optional` **identifierLabel?**: `string`

##### auth.identifierPlaceholder?

> `optional` **identifierPlaceholder?**: `string`

##### auth.loadingOptions?

> `optional` **loadingOptions?**: `string`

##### auth.logoAlt?

> `optional` **logoAlt?**: `string`

##### auth.magicLinkSent?

> `optional` **magicLinkSent?**: (`email`) => `string`

###### Parameters

###### email

`string`

###### Returns

`string`

##### auth.noMethodAvailable?

> `optional` **noMethodAvailable?**: `string`

##### auth.noMethodForIdentifier?

> `optional` **noMethodForIdentifier?**: `string`

##### auth.optionsUnavailable?

> `optional` **optionsUnavailable?**: `string`

##### auth.or?

> `optional` **or?**: `string`

##### auth.password?

> `optional` **password?**: `string`

##### auth.passwordPlaceholder?

> `optional` **passwordPlaceholder?**: `string`

##### auth.phone?

> `optional` **phone?**: `string`

##### auth.phonePlaceholder?

> `optional` **phonePlaceholder?**: `string`

##### auth.providerSignIn?

> `optional` **providerSignIn?**: (`provider`) => `string`

###### Parameters

###### provider

`string`

###### Returns

`string`

##### auth.redirecting?

> `optional` **redirecting?**: `string`

##### auth.resend?

> `optional` **resend?**: `string`

##### auth.resendIn?

> `optional` **resendIn?**: (`seconds`) => `string`

###### Parameters

###### seconds

`number`

###### Returns

`string`

##### auth.resendVerification?

> `optional` **resendVerification?**: `string`

##### auth.sendCode?

> `optional` **sendCode?**: `string`

##### auth.sending?

> `optional` **sending?**: `string`

##### auth.sendingMagicLink?

> `optional` **sendingMagicLink?**: `string`

##### auth.sendMagicLink?

> `optional` **sendMagicLink?**: `string`

##### auth.signedInAs?

> `optional` **signedInAs?**: (`email`) => `string`

###### Parameters

###### email

`string`

###### Returns

`string`

##### auth.signIn?

> `optional` **signIn?**: `string`

##### auth.signInBusy?

> `optional` **signInBusy?**: `string`

##### auth.signingInAs?

> `optional` **signingInAs?**: (`identifier`) => `string`

###### Parameters

###### identifier

`string`

###### Returns

`string`

##### auth.verificationCode?

> `optional` **verificationCode?**: `string`

##### auth.verificationCodePlaceholder?

> `optional` **verificationCodePlaceholder?**: `string`

##### auth.verificationEmailFailed?

> `optional` **verificationEmailFailed?**: `string`

##### auth.verificationEmailSent?

> `optional` **verificationEmailSent?**: `string`

##### auth.verifying?

> `optional` **verifying?**: `string`

#### authDialog?

> `optional` **authDialog?**: `object`

##### authDialog.close?

> `optional` **close?**: `string`

##### authDialog.signInTab?

> `optional` **signInTab?**: `string`

##### authDialog.signUpTab?

> `optional` **signUpTab?**: `string`

##### authDialog.title?

> `optional` **title?**: (`view`) => `string`

###### Parameters

###### view

`"sign-in"` \| `"sign-up"`

###### Returns

`string`

#### connectedAccounts?

> `optional` **connectedAccounts?**: `object`

##### connectedAccounts.aria?

> `optional` **aria?**: `string`

##### connectedAccounts.confirmDisconnect?

> `optional` **confirmDisconnect?**: (`name`) => `string`

###### Parameters

###### name

`string`

###### Returns

`string`

##### connectedAccounts.connect?

> `optional` **connect?**: `string`

##### connectedAccounts.connectAccount?

> `optional` **connectAccount?**: `string`

##### connectedAccounts.connectAria?

> `optional` **connectAria?**: (`name`) => `string`

###### Parameters

###### name

`string`

###### Returns

`string`

##### connectedAccounts.connected?

> `optional` **connected?**: `string`

##### connectedAccounts.connectedAt?

> `optional` **connectedAt?**: (`value`) => `string`

###### Parameters

###### value

`string`

###### Returns

`string`

##### connectedAccounts.credential?

> `optional` **credential?**: `string`

##### connectedAccounts.credentialType?

> `optional` **credentialType?**: (`type`) => `string`

###### Parameters

###### type

`string` \| `null` \| `undefined`

###### Returns

`string`

##### connectedAccounts.description?

> `optional` **description?**: `string`

##### connectedAccounts.disconnect?

> `optional` **disconnect?**: `string`

##### connectedAccounts.disconnectAria?

> `optional` **disconnectAria?**: (`name`) => `string`

###### Parameters

###### name

`string`

###### Returns

`string`

##### connectedAccounts.disconnecting?

> `optional` **disconnecting?**: `string`

##### connectedAccounts.loading?

> `optional` **loading?**: `string`

##### connectedAccounts.noProviders?

> `optional` **noProviders?**: `string`

##### connectedAccounts.noSignInMethods?

> `optional` **noSignInMethods?**: `string`

##### connectedAccounts.opening?

> `optional` **opening?**: `string`

##### connectedAccounts.providerType?

> `optional` **providerType?**: (`providerType`, `protocol`) => `string`

###### Parameters

###### providerType

`string` \| `null` \| `undefined`

###### protocol

`string` \| `null` \| `undefined`

###### Returns

`string`

##### connectedAccounts.requiredForAccess?

> `optional` **requiredForAccess?**: `string`

##### connectedAccounts.signInMethods?

> `optional` **signInMethods?**: `string`

##### connectedAccounts.stepUpMethod?

> `optional` **stepUpMethod?**: (`method`) => `string`

###### Parameters

###### method

`string` \| `null` \| `undefined`

###### Returns

`string`

##### connectedAccounts.stepUpRequired?

> `optional` **stepUpRequired?**: `string`

##### connectedAccounts.stepUpRequiredWithMethods?

> `optional` **stepUpRequiredWithMethods?**: (`methods`) => `string`

###### Parameters

###### methods

`string`

###### Returns

`string`

##### connectedAccounts.title?

> `optional` **title?**: `string`

##### connectedAccounts.unavailable?

> `optional` **unavailable?**: `string`

#### errors?

> `optional` **errors?**: `object`

##### errors.accountLinkFailed?

> `optional` **accountLinkFailed?**: `string`

##### errors.accountUnlinkFailed?

> `optional` **accountUnlinkFailed?**: `string`

##### errors.codes?

> `optional` **codes?**: `object`

##### errors.codes.EMAIL\_ALREADY\_EXISTS?

> `optional` **EMAIL\_ALREADY\_EXISTS?**: `string`

##### errors.codes.EMAIL\_VERIFICATION\_REQUIRED?

> `optional` **EMAIL\_VERIFICATION\_REQUIRED?**: `string`

##### errors.codes.FORBIDDEN?

> `optional` **FORBIDDEN?**: `string`

##### errors.codes.INVALID\_CREDENTIALS?

> `optional` **INVALID\_CREDENTIALS?**: `string`

##### errors.codes.INVITATION\_EXPIRED?

> `optional` **INVITATION\_EXPIRED?**: `string`

##### errors.codes.INVITATION\_INVALID?

> `optional` **INVITATION\_INVALID?**: `string`

##### errors.codes.PASSWORD\_RESET\_EXPIRED?

> `optional` **PASSWORD\_RESET\_EXPIRED?**: `string`

##### errors.codes.PASSWORD\_RESET\_INVALID?

> `optional` **PASSWORD\_RESET\_INVALID?**: `string`

##### errors.codes.RATE\_LIMITED?

> `optional` **RATE\_LIMITED?**: `string`

##### errors.codes.REGISTRATION\_DISABLED?

> `optional` **REGISTRATION\_DISABLED?**: `string`

##### errors.codes.REGISTRATION\_GRANT\_HOSTED\_UNSUPPORTED?

> `optional` **REGISTRATION\_GRANT\_HOSTED\_UNSUPPORTED?**: `string`

##### errors.codes.REGISTRATION\_GRANT\_INVALID?

> `optional` **REGISTRATION\_GRANT\_INVALID?**: `string`

##### errors.codes.REGISTRATION\_GRANT\_REQUIRED?

> `optional` **REGISTRATION\_GRANT\_REQUIRED?**: `string`

##### errors.codes.REGISTRATION\_GRANT\_TYPE\_NOT\_ALLOWED?

> `optional` **REGISTRATION\_GRANT\_TYPE\_NOT\_ALLOWED?**: `string`

##### errors.codes.STEP\_UP\_REQUIRED?

> `optional` **STEP\_UP\_REQUIRED?**: `string`

##### errors.codes.UNAUTHORIZED?

> `optional` **UNAUTHORIZED?**: `string`

##### errors.generic?

> `optional` **generic?**: `string`

##### errors.invitationFailed?

> `optional` **invitationFailed?**: `string`

##### errors.organizationSwitchFailed?

> `optional` **organizationSwitchFailed?**: `string`

##### errors.resetFailed?

> `optional` **resetFailed?**: `string`

##### errors.resetRequestFailed?

> `optional` **resetRequestFailed?**: `string`

##### errors.signInFailed?

> `optional` **signInFailed?**: `string`

##### errors.signInOptionsUnavailable?

> `optional` **signInOptionsUnavailable?**: `string`

##### errors.signUpFailed?

> `optional` **signUpFailed?**: `string`

#### invitation?

> `optional` **invitation?**: `object`

##### invitation.accept?

> `optional` **accept?**: `string`

##### invitation.accepted?

> `optional` **accepted?**: `string`

##### invitation.accepting?

> `optional` **accepting?**: `string`

##### invitation.aria?

> `optional` **aria?**: `string`

##### invitation.detail?

> `optional` **detail?**: (`application`, `email`, `role`) => `string`

###### Parameters

###### application

`string`

###### email

`string`

###### role

`string`

###### Returns

`string`

##### invitation.expires?

> `optional` **expires?**: (`value`) => `string`

###### Parameters

###### value

`string`

###### Returns

`string`

##### invitation.join?

> `optional` **join?**: (`organization`) => `string`

###### Parameters

###### organization

`string`

###### Returns

`string`

##### invitation.loading?

> `optional` **loading?**: `string`

##### invitation.loginRequired?

> `optional` **loginRequired?**: `string`

##### invitation.title?

> `optional` **title?**: `string`

#### organization?

> `optional` **organization?**: `object`

##### organization.role?

> `optional` **role?**: (`role`) => `string`

###### Parameters

###### role

`string` \| `null` \| `undefined`

###### Returns

`string`

##### organization.select?

> `optional` **select?**: `string`

##### organization.switching?

> `optional` **switching?**: `string`

##### organization.switchUnavailable?

> `optional` **switchUnavailable?**: `string`

#### passwordReset?

> `optional` **passwordReset?**: `object`

##### passwordReset.checkEmail?

> `optional` **checkEmail?**: `string`

##### passwordReset.confirmPassword?

> `optional` **confirmPassword?**: `string`

##### passwordReset.confirmPasswordPlaceholder?

> `optional` **confirmPasswordPlaceholder?**: `string`

##### passwordReset.createNewPassword?

> `optional` **createNewPassword?**: `string`

##### passwordReset.email?

> `optional` **email?**: `string`

##### passwordReset.emailPlaceholder?

> `optional` **emailPlaceholder?**: `string`

##### passwordReset.invalidEmail?

> `optional` **invalidEmail?**: `string`

##### passwordReset.newPassword?

> `optional` **newPassword?**: `string`

##### passwordReset.passwordMinLength?

> `optional` **passwordMinLength?**: `string`

##### passwordReset.passwordMismatch?

> `optional` **passwordMismatch?**: `string`

##### passwordReset.passwordPlaceholder?

> `optional` **passwordPlaceholder?**: `string`

##### passwordReset.resetComplete?

> `optional` **resetComplete?**: `string`

##### passwordReset.resetCompleteDetail?

> `optional` **resetCompleteDetail?**: `string`

##### passwordReset.resetPassword?

> `optional` **resetPassword?**: `string`

##### passwordReset.resetSent?

> `optional` **resetSent?**: `string`

##### passwordReset.resetting?

> `optional` **resetting?**: `string`

##### passwordReset.resetTokenRequired?

> `optional` **resetTokenRequired?**: `string`

##### passwordReset.sending?

> `optional` **sending?**: `string`

##### passwordReset.sendResetLink?

> `optional` **sendResetLink?**: `string`

#### signUp?

> `optional` **signUp?**: `object`

##### signUp.accessCode?

> `optional` **accessCode?**: `string`

##### signUp.accessCodePlaceholder?

> `optional` **accessCodePlaceholder?**: `string`

##### signUp.accountCreated?

> `optional` **accountCreated?**: `string`

##### signUp.accountCreatedDetail?

> `optional` **accountCreatedDetail?**: (`email`) => `string`

###### Parameters

###### email

`string`

###### Returns

`string`

##### signUp.checkEmail?

> `optional` **checkEmail?**: `string`

##### signUp.confirmPassword?

> `optional` **confirmPassword?**: `string`

##### signUp.confirmPasswordPlaceholder?

> `optional` **confirmPasswordPlaceholder?**: `string`

##### signUp.createAccount?

> `optional` **createAccount?**: `string`

##### signUp.creatingAccount?

> `optional` **creatingAccount?**: `string`

##### signUp.email?

> `optional` **email?**: `string`

##### signUp.emailPlaceholder?

> `optional` **emailPlaceholder?**: `string`

##### signUp.grantNotAccepted?

> `optional` **grantNotAccepted?**: `string`

##### signUp.invitationOrAccessCodeRequired?

> `optional` **invitationOrAccessCodeRequired?**: `string`

##### signUp.invitationRequired?

> `optional` **invitationRequired?**: `string`

##### signUp.password?

> `optional` **password?**: `string`

##### signUp.passwordMinLength?

> `optional` **passwordMinLength?**: `string`

##### signUp.passwordMismatch?

> `optional` **passwordMismatch?**: `string`

##### signUp.passwordPlaceholder?

> `optional` **passwordPlaceholder?**: `string`

##### signUp.resendIn?

> `optional` **resendIn?**: (`seconds`) => `string`

###### Parameters

###### seconds

`number`

###### Returns

`string`

##### signUp.resendVerification?

> `optional` **resendVerification?**: `string`

##### signUp.sending?

> `optional` **sending?**: `string`

##### signUp.signUp?

> `optional` **signUp?**: `string`

##### signUp.title?

> `optional` **title?**: `string`

##### signUp.unavailable?

> `optional` **unavailable?**: `string`

##### signUp.verificationEmailFailed?

> `optional` **verificationEmailFailed?**: `string`

##### signUp.verificationEmailSent?

> `optional` **verificationEmailSent?**: `string`

##### signUp.verificationOptional?

> `optional` **verificationOptional?**: (`email`) => `string`

###### Parameters

###### email

`string`

###### Returns

`string`

##### signUp.verificationRequired?

> `optional` **verificationRequired?**: (`email`) => `string`

###### Parameters

###### email

`string`

###### Returns

`string`

##### signUp.verificationUnknown?

> `optional` **verificationUnknown?**: `string`

#### userButton?

> `optional` **userButton?**: `object`

##### userButton.fallbackUser?

> `optional` **fallbackUser?**: `string`

##### userButton.menuAria?

> `optional` **menuAria?**: `string`

##### userButton.organization?

> `optional` **organization?**: (`slug`) => `string`

###### Parameters

###### slug

`string`

###### Returns

`string`

##### userButton.signOut?

> `optional` **signOut?**: `string`

#### userProfile?

> `optional` **userProfile?**: `object`

##### userProfile.account?

> `optional` **account?**: `string`

##### userProfile.devices?

> `optional` **devices?**: `string`

##### userProfile.email?

> `optional` **email?**: `string`

##### userProfile.lastSeen?

> `optional` **lastSeen?**: (`value`) => `string`

###### Parameters

###### value

`string`

###### Returns

`string`

##### userProfile.name?

> `optional` **name?**: `string`

##### userProfile.organization?

> `optional` **organization?**: `string`

##### userProfile.revoke?

> `optional` **revoke?**: `string`

##### userProfile.roles?

> `optional` **roles?**: `string`

##### userProfile.title?

> `optional` **title?**: `string`

##### userProfile.unavailable?

> `optional` **unavailable?**: `string`

##### userProfile.username?

> `optional` **username?**: `string`

#### Inherited from

`IamUiConfig.localization`

***

### postLogoutRedirectUri?

> `optional` **postLogoutRedirectUri?**: `string`

#### Inherited from

[`IamConfig`](IamConfig.md).[`postLogoutRedirectUri`](IamConfig.md#postlogoutredirecturi)

***

### redirectUri

> **redirectUri**: `string`

#### Inherited from

[`IamConfig`](IamConfig.md).[`redirectUri`](IamConfig.md#redirecturi)

***

### scopes?

> `optional` **scopes?**: `string`[]

#### Inherited from

[`IamConfig`](IamConfig.md).[`scopes`](IamConfig.md#scopes)

***

### ~~socialProviders?~~

> `optional` **socialProviders?**: [`SocialProviderConfig`](SocialProviderConfig.md)[]

#### Deprecated

Embedded login discovers provider buttons from IAM. Static
entries can only override display names for matching backend-enabled
providers; they do not create clickable providers by themselves.

#### Inherited from

[`IamConfig`](IamConfig.md).[`socialProviders`](IamConfig.md#socialproviders)

***

### tokenStorage?

> `optional` **tokenStorage?**: `"memory"` \| `"sessionStorage"`

Token and resolved-permission storage strategy for the browser SDK.
Defaults to memory-only. sessionStorage persistence is browser-readable
and should be enabled only when the app deliberately accepts that risk.

#### Inherited from

[`IamConfig`](IamConfig.md).[`tokenStorage`](IamConfig.md#tokenstorage)
