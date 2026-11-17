[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / IamProviderProps

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

##### accountCenter.organizationContext?

> `optional` **organizationContext?**: `string`

##### accountCenter.organizationContextActive?

> `optional` **organizationContextActive?**: `string`

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

##### accountCenter.securitySection?

> `optional` **securitySection?**: `string`

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

##### auth.authenticatorCode?

> `optional` **authenticatorCode?**: `string`

##### auth.back?

> `optional` **back?**: `string`

##### auth.brandingLoading?

> `optional` **brandingLoading?**: `string`

##### auth.brandingUnavailable?

> `optional` **brandingUnavailable?**: `string`

##### auth.challengeExpired?

> `optional` **challengeExpired?**: `string`

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

##### auth.haveAccount?

> `optional` **haveAccount?**: `string`

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

##### auth.mfaDescription?

> `optional` **mfaDescription?**: `string`

##### auth.noAccount?

> `optional` **noAccount?**: `string`

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

##### auth.retryBranding?

> `optional` **retryBranding?**: `string`

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

##### auth.signUp?

> `optional` **signUp?**: `string`

##### auth.verificationCode?

> `optional` **verificationCode?**: `string`

##### auth.verificationCodePlaceholder?

> `optional` **verificationCodePlaceholder?**: `string`

##### auth.verificationEmailFailed?

> `optional` **verificationEmailFailed?**: `string`

##### auth.verificationEmailSent?

> `optional` **verificationEmailSent?**: `string`

##### auth.verify?

> `optional` **verify?**: `string`

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

##### errors.codes.AUTH\_CALLBACK\_MISMATCH?

> `optional` **AUTH\_CALLBACK\_MISMATCH?**: `string`

##### errors.codes.AUTH\_PROVIDER\_CANCELLED?

> `optional` **AUTH\_PROVIDER\_CANCELLED?**: `string`

##### errors.codes.AUTH\_PROVIDER\_CLOSED?

> `optional` **AUTH\_PROVIDER\_CLOSED?**: `string`

##### errors.codes.AUTH\_PROVIDER\_DENIED?

> `optional` **AUTH\_PROVIDER\_DENIED?**: `string`

##### errors.codes.AUTH\_PROVIDER\_POPUP\_BLOCKED?

> `optional` **AUTH\_PROVIDER\_POPUP\_BLOCKED?**: `string`

##### errors.codes.AUTH\_PROVIDER\_TIMEOUT?

> `optional` **AUTH\_PROVIDER\_TIMEOUT?**: `string`

##### errors.codes.AUTH\_TRANSACTION\_EXPIRED?

> `optional` **AUTH\_TRANSACTION\_EXPIRED?**: `string`

##### errors.codes.AUTH\_TRANSACTION\_UNCERTAIN?

> `optional` **AUTH\_TRANSACTION\_UNCERTAIN?**: `string`

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

##### errors.codes.REGISTRATION\_IDENTIFIER\_REJECTED?

> `optional` **REGISTRATION\_IDENTIFIER\_REJECTED?**: `string`

##### errors.codes.STEP\_UP\_REQUIRED?

> `optional` **STEP\_UP\_REQUIRED?**: `string`

##### errors.codes.TOKEN\_EXCHANGE\_UNCERTAIN?

> `optional` **TOKEN\_EXCHANGE\_UNCERTAIN?**: `string`

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

#### identity?

> `optional` **identity?**: `object`

##### identity.accept?

> `optional` **accept?**: `string` = `'Accept transfer'`

##### identity.add?

> `optional` **add?**: `string` = `'Add a method'`

##### identity.addEmail?

> `optional` **addEmail?**: `string` = `'Add email'`

##### identity.addPhone?

> `optional` **addPhone?**: `string` = `'Add phone number'`

##### identity.addUsername?

> `optional` **addUsername?**: `string` = `'Add username'`

##### identity.AVAILABLE?

> `optional` **AVAILABLE?**: `string` = `'Available'`

##### identity.AWAITING\_PROOF?

> `optional` **AWAITING\_PROOF?**: `string` = `'Complete the required proofs'`

##### identity.AWAITING\_REAUTH?

> `optional` **AWAITING\_REAUTH?**: `string` = `'Confirm account control'`

##### identity.awaitingCounterpart?

> `optional` **awaitingCounterpart?**: `string` = `'Waiting for the other account to confirm. You can continue later.'`

##### identity.cancel?

> `optional` **cancel?**: `string` = `'Cancel operation'`

##### identity.cancelChange?

> `optional` **cancelChange?**: `string` = `'Cancel this change'`

##### identity.CANCELLED?

> `optional` **CANCELLED?**: `string` = `'Operation cancelled'`

##### identity.cancelRegistration?

> `optional` **cancelRegistration?**: `string` = `'Cancel registration'`

##### identity.cancelUnconfirmed?

> `optional` **cancelUnconfirmed?**: `string` = `'Cancellation is unconfirmed. Reopen this operation before continuing.'`

##### identity.change?

> `optional` **change?**: `string` = `'Change'`

##### identity.choosePhoneCountry?

> `optional` **choosePhoneCountry?**: `string` = `'Choose a country / region'`

##### identity.COMMITTED?

> `optional` **COMMITTED?**: `string` = `'Change completed'`

##### identity.complete?

> `optional` **complete?**: `string` = `'Complete change'`

##### identity.confirmCancelChange?

> `optional` **confirmCancelChange?**: `string` = `'Cancel change'`

##### identity.confirmProviderTarget?

> `optional` **confirmProviderTarget?**: `string` = `'Confirm connection'`

##### identity.connectProvider?

> `optional` **connectProvider?**: `string` = `'Connect a provider'`

##### identity.continueOperation?

> `optional` **continueOperation?**: `string` = `'Continue change'`

##### identity.createUnconfirmed?

> `optional` **createUnconfirmed?**: `string` = `'The server may have created this change, but its response was lost. Recover the original request before editing or starting another change. Keep this window open.'`

##### identity.CURRENT\_ACCOUNT?

> `optional` **CURRENT\_ACCOUNT?**: `string` = `'Current account'`

##### identity.description?

> `optional` **description?**: `string` = `'Manage the identifiers and connected accounts you use to sign in.'`

##### identity.details?

> `optional` **details?**: `string` = `'Technical details'`

##### identity.didNotReceive?

> `optional` **didNotReceive?**: `string` = `"Didn't receive an email?"`

##### identity.done?

> `optional` **done?**: `string` = `'Done'`

##### identity.EMAIL?

> `optional` **EMAIL?**: `string` = `'Email'`

##### identity.emailCount?

> `optional` **emailCount?**: (`count`) => `string`

###### Parameters

###### count

`number`

###### Returns

`string`

##### identity.emailOverview?

> `optional` **emailOverview?**: `string` = `'Back to email overview'`

##### identity.emailPages?

> `optional` **emailPages?**: `string` = `'Email pages'`

##### identity.error?

> `optional` **error?**: `string` = `'This change could not be completed. Refresh the operation and try again.'`

##### identity.exitDescription?

> `optional` **exitDescription?**: `string` = `'The pending change will be cancelled. Your existing sign-in methods will stay unchanged.'`

##### identity.exitTitle?

> `optional` **exitTitle?**: `string` = `'Cancel this change?'`

##### identity.EXPIRED?

> `optional` **EXPIRED?**: `string` = `'Operation expired; start again'`

##### identity.expires?

> `optional` **expires?**: `string` = `'Expires'`

##### identity.FIRST\_FACTOR?

> `optional` **FIRST\_FACTOR?**: `string` = `'Sign-in'`

##### identity.identifiers?

> `optional` **identifiers?**: `string` = `'Identifiers'`

##### identity.keepChange?

> `optional` **keepChange?**: `string` = `'Continue change'`

##### identity.kind?

> `optional` **kind?**: `string` = `'Identifier type'`

##### identity.lastPathProtection?

> `optional` **lastPathProtection?**: `string` = `'You must keep a usable sign-in method. This is checked again when you save.'`

##### identity.later?

> `optional` **later?**: `string` = `'Continue later'`

##### identity.link?

> `optional` **link?**: `string` = `'Connect'`

##### identity.managed?

> `optional` **managed?**: `string` = `'Managed by your organization'`

##### identity.manageEmails?

> `optional` **manageEmails?**: `string` = `'Manage emails'`

##### identity.managementProofs?

> `optional` **managementProofs?**: `string` = `'Available current-account confirmation'`

##### identity.managementRequirement?

> `optional` **managementRequirement?**: `object`

##### identity.managementRequirement.COUNTERPART\_CONFIRMATION?

> `optional` **COUNTERPART\_CONFIRMATION?**: `string` = `'The receiving account must also confirm.'`

##### identity.managementRequirement.CURRENT\_ACCOUNT\_PROOF?

> `optional` **CURRENT\_ACCOUNT\_PROOF?**: `string` = `'Confirm control of your current account.'`

##### identity.managementRequirement.NEW\_IDENTIFIER?

> `optional` **NEW\_IDENTIFIER?**: `string` = `'The new identifier must meet the current application policy.'`

##### identity.managementRequirement.REMAINING\_LOGIN\_PATH?

> `optional` **REMAINING\_LOGIN\_PATH?**: `string` = `'Keep another complete, usable sign-in path.'`

##### identity.managementRequirement.REMOVE\_OLD?

> `optional` **REMOVE\_OLD?**: `string` = `'Remove the old identifier after verification.'`

##### identity.managementRequirement.REPLACEMENT\_PRIMARY?

> `optional` **REPLACEMENT\_PRIMARY?**: `string` = `'Choose an eligible replacement primary identifier.'`

##### identity.managementRequirement.TARGET\_EMAIL\_OTP?

> `optional` **TARGET\_EMAIL\_OTP?**: `string` = `'Verify the target email with a code.'`

##### identity.managementRequirement.TARGET\_PHONE\_OTP?

> `optional` **TARGET\_PHONE\_OTP?**: `string` = `'Verify the target phone number with a code.'`

##### identity.managementRequirements?

> `optional` **managementRequirements?**: `string` = `'Requirements for this change'`

##### identity.moreActions?

> `optional` **moreActions?**: `string` = `'More actions'`

##### identity.newIdentifier?

> `optional` **newIdentifier?**: `object`

##### identity.newIdentifier.EMAIL?

> `optional` **EMAIL?**: `string` = `'New email'`

##### identity.newIdentifier.PHONE?

> `optional` **PHONE?**: `string` = `'New phone number'`

##### identity.newIdentifier.USERNAME?

> `optional` **USERNAME?**: `string` = `'New username'`

##### identity.next?

> `optional` **next?**: `string` = `'Next'`

##### identity.noPrimaryEmail?

> `optional` **noPrimaryEmail?**: `string` = `'No primary email'`

##### identity.operationId?

> `optional` **operationId?**: `string` = `'Operation ID'`

##### identity.otherMethods?

> `optional` **otherMethods?**: `string` = `'Use another sign-in method'`

##### identity.otherProofs?

> `optional` **otherProofs?**: `string` = `'Use another verification method'`

##### identity.otp?

> `optional` **otp?**: `string` = `'Verification code'`

##### identity.page?

> `optional` **page?**: (`page`, `count`) => `string`

###### Parameters

###### page

`number`

###### count

`number`

###### Returns

`string`

##### identity.password?

> `optional` **password?**: `string` = `'Confirm your current password'`

##### identity.passwordMethod?

> `optional` **passwordMethod?**: `string` = `'Password'`

##### identity.PHONE?

> `optional` **PHONE?**: `string` = `'Phone number'`

##### identity.phoneAmbiguous?

> `optional` **phoneAmbiguous?**: `string` = `'Choose a country / region and enter the local number.'`

##### identity.phoneCountry?

> `optional` **phoneCountry?**: `string` = `'Country / region'`

##### identity.phoneInvalid?

> `optional` **phoneInvalid?**: `string` = `'Enter a valid phone number for the selected country / region.'`

##### identity.phoneNumber?

> `optional` **phoneNumber?**: `string` = `'Phone number'`

##### identity.previous?

> `optional` **previous?**: `string` = `'Previous'`

##### identity.primary?

> `optional` **primary?**: `string` = `'Primary'`

##### identity.providerAuth?

> `optional` **providerAuth?**: `string` = `'Confirm with provider'`

##### identity.providerDone?

> `optional` **providerDone?**: `string` = `'I completed provider confirmation'`

##### identity.providerMethod?

> `optional` **providerMethod?**: (`name`) => `string`

###### Parameters

###### name

`string`

###### Returns

`string`

##### identity.providers?

> `optional` **providers?**: `string` = `'Connected providers'`

##### identity.providerSelection?

> `optional` **providerSelection?**: `string` = `'Choose a provider, confirm your current account, then authorize the external account. Its identity is confirmed only after you return.'`

##### identity.providerTargetPending?

> `optional` **providerTargetPending?**: `string` = `'Waiting for the verified external account. Authorize with the provider before confirming the connection.'`

##### identity.providerTargetPrivate?

> `optional` **providerTargetPrivate?**: `string` = `'The provider confirmed an account without a display name or email.'`

##### identity.providerTargetTitle?

> `optional` **providerTargetTitle?**: `string` = `'External account to connect'`

##### identity.providerUnavailable?

> `optional` **providerUnavailable?**: `string` = `'Connection information unavailable'`

##### identity.queryStatus?

> `optional` **queryStatus?**: `string` = `'Check latest status'`

##### identity.READY?

> `optional` **READY?**: `string` = `'Ready to complete'`

##### identity.reauthenticate?

> `optional` **reauthenticate?**: `string` = `'Confirm account control'`

##### identity.receive?

> `optional` **receive?**: `string` = `'Receive a transfer'`

##### identity.recoverCreate?

> `optional` **recoverCreate?**: `string` = `'Recover original request'`

##### identity.RECOVERY?

> `optional` **RECOVERY?**: `string` = `'Recovery'`

##### identity.region?

> `optional` **region?**: `string` = `'Phone region (ISO country code)'`

##### identity.registrationComplete?

> `optional` **registrationComplete?**: `string` = `'Registration completed. You can now sign in.'`

##### identity.registrationPending?

> `optional` **registrationPending?**: `string` = `'Verify your email to create your account. No account or session exists yet.'`

##### identity.reject?

> `optional` **reject?**: `string` = `'Reject transfer'`

##### identity.REJECTED?

> `optional` **REJECTED?**: `string` = `'Transfer rejected'`

##### identity.relogin?

> `optional` **relogin?**: `string` = `'Your change succeeded. Sign in again to continue.'`

##### identity.remaining?

> `optional` **remaining?**: (`minutes`) => `string`

###### Parameters

###### minutes

`number`

###### Returns

`string`

##### identity.remove?

> `optional` **remove?**: `string` = `'Remove'`

##### identity.removeOld?

> `optional` **removeOld?**: `string` = `'Remove the old identifier after verification'`

##### identity.reopen?

> `optional` **reopen?**: `string` = `'Open or refresh operation'`

##### identity.replace?

> `optional` **replace?**: `string` = `'Replace'`

##### identity.replacementPrimary?

> `optional` **replacementPrimary?**: `string` = `'Replacement primary identifier (required when removing the primary)'`

##### identity.restart?

> `optional` **restart?**: `string` = `'Registration control is missing. Start again and choose your own password.'`

##### identity.restartRegistration?

> `optional` **restartRegistration?**: `string` = `'Start registration again'`

##### identity.retry?

> `optional` **retry?**: `string` = `'Retry'`

##### identity.SECOND\_FACTOR?

> `optional` **SECOND\_FACTOR?**: `string` = `'Second factor'`

##### identity.send?

> `optional` **send?**: `string` = `'Send target code'`

##### identity.sendAccountCode?

> `optional` **sendAccountCode?**: `string` = `'Send current-account code'`

##### identity.setPrimary?

> `optional` **setPrimary?**: `string` = `'Set primary'`

##### identity.signIn?

> `optional` **signIn?**: `string` = `'Sign in again'`

##### identity.source?

> `optional` **source?**: `string` = `'Verification source'`

##### identity.status?

> `optional` **status?**: `string` = `'Operation status'`

##### identity.stepUp?

> `optional` **stepUp?**: `string` = `'Confirm with authenticator'`

##### identity.TARGET\_OWNERSHIP?

> `optional` **TARGET\_OWNERSHIP?**: `string` = `'Target ownership'`

##### identity.targetUser?

> `optional` **targetUser?**: `string` = `'Receiving user ID'`

##### identity.title?

> `optional` **title?**: `string` = `'Login methods'`

##### identity.transfer?

> `optional` **transfer?**: `string` = `'Transfer'`

##### identity.TRANSFER\_COUNTERPART?

> `optional` **TRANSFER\_COUNTERPART?**: `string` = `'Receiving account'`

##### identity.transferWarning?

> `optional` **transferWarning?**: `string` = `'Both accounts must confirm. Roles, organizations and business data stay with each account.'`

##### identity.unavailable?

> `optional` **unavailable?**: `string` = `'This action is not available. Try another method or contact support.'`

##### identity.UNAVAILABLE?

> `optional` **UNAVAILABLE?**: `string` = `'Unavailable'`

##### identity.unlink?

> `optional` **unlink?**: `string` = `'Disconnect'`

##### identity.unverified?

> `optional` **unverified?**: `string` = `'Unverified'`

##### identity.useKind?

> `optional` **useKind?**: (`kind`) => `string`

###### Parameters

###### kind

`string`

###### Returns

`string`

##### identity.USERNAME?

> `optional` **USERNAME?**: `string` = `'Username'`

##### identity.value?

> `optional` **value?**: `string` = `'Identifier'`

##### identity.verificationUnknown?

> `optional` **verificationUnknown?**: `string` = `'Verification status unavailable'`

##### identity.verified?

> `optional` **verified?**: `string` = `'Verified'`

##### identity.verify?

> `optional` **verify?**: `string` = `'Verify'`

##### identity.verifyComplete?

> `optional` **verifyComplete?**: `string` = `'Verify and complete'`

##### identity.verifyContinue?

> `optional` **verifyContinue?**: `string` = `'Verify and continue'`

##### identity.verifyRegistration?

> `optional` **verifyRegistration?**: `string` = `'Verify email'`

##### identity.webauthn?

> `optional` **webauthn?**: `string` = `'Confirm with security key'`

##### identity.yourUserId?

> `optional` **yourUserId?**: `string` = `'Your user ID'`

#### invitation?

> `optional` **invitation?**: `object`

##### invitation.accept?

> `optional` **accept?**: `string`

##### invitation.accepted?

> `optional` **accepted?**: `string`

##### invitation.accepting?

> `optional` **accepting?**: `string`

##### invitation.accountKept?

> `optional` **accountKept?**: `string`

##### invitation.applicationLabel?

> `optional` **applicationLabel?**: `string`

##### invitation.aria?

> `optional` **aria?**: `string`

##### invitation.cancel?

> `optional` **cancel?**: `string`

##### invitation.checkRegistration?

> `optional` **checkRegistration?**: `string`

##### invitation.checkResult?

> `optional` **checkResult?**: `string`

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

##### invitation.enrollmentRequired?

> `optional` **enrollmentRequired?**: `string`

##### invitation.expires?

> `optional` **expires?**: (`value`) => `string`

###### Parameters

###### value

`string`

###### Returns

`string`

##### invitation.explicitConfirmation?

> `optional` **explicitConfirmation?**: `string`

##### invitation.invalidEntry?

> `optional` **invalidEntry?**: `string`

##### invitation.join?

> `optional` **join?**: (`organization`) => `string`

###### Parameters

###### organization

`string`

###### Returns

`string`

##### invitation.loading?

> `optional` **loading?**: `string`

##### invitation.loginCompleted?

> `optional` **loginCompleted?**: `string`

##### invitation.loginRequired?

> `optional` **loginRequired?**: `string`

##### invitation.mfaMethod?

> `optional` **mfaMethod?**: `string`

##### invitation.navigate?

> `optional` **navigate?**: `string`

##### invitation.navigationFailed?

> `optional` **navigationFailed?**: `string`

##### invitation.preparationNotSubmitted?

> `optional` **preparationNotSubmitted?**: `string`

##### invitation.recipientLabel?

> `optional` **recipientLabel?**: `string`

##### invitation.recoveryCode?

> `optional` **recoveryCode?**: `string`

##### invitation.retryPreparation?

> `optional` **retryPreparation?**: `string`

##### invitation.reviewChanges?

> `optional` **reviewChanges?**: `string`

##### invitation.roleLabel?

> `optional` **roleLabel?**: `string`

##### invitation.switchAccount?

> `optional` **switchAccount?**: `string`

##### invitation.terminal?

> `optional` **terminal?**: (`state`) => `string`

###### Parameters

###### state

`string`

###### Returns

`string`

##### invitation.title?

> `optional` **title?**: `string`

##### invitation.unknownResult?

> `optional` **unknownResult?**: `string`

##### invitation.useSession?

> `optional` **useSession?**: `string`

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

#### security?

> `optional` **security?**: `object`

##### security.authenticatorDetail?

> `optional` **authenticatorDetail?**: `string` = `'Use codes from your authenticator as an extra sign-in check.'`

##### security.back?

> `optional` **back?**: `string` = `'Back'`

##### security.begin?

> `optional` **begin?**: `string` = `'Show setup instructions'`

##### security.busy?

> `optional` **busy?**: `string` = `'Another security operation is in progress. Resume it or wait for it to expire.'`

##### security.cancel?

> `optional` **cancel?**: `string` = `'Cancel setup'`

##### security.cancelConfirm?

> `optional` **cancelConfirm?**: `string` = `'Cancel this operation? Any setup material will stop working.'`

##### security.cancelled?

> `optional` **cancelled?**: `string` = `'Operation cancelled'`

##### security.cancelNow?

> `optional` **cancelNow?**: `string` = `'Cancel setup'`

##### security.cancelTitle?

> `optional` **cancelTitle?**: `string` = `'Cancel this setup?'`

##### security.choose?

> `optional` **choose?**: `string` = `'Choose a verification method'`

##### security.close?

> `optional` **close?**: `string` = `'Close security verification'`

##### security.code?

> `optional` **code?**: `string` = `'Verification code'`

##### security.committed?

> `optional` **committed?**: `string` = `'Change completed'`

##### security.complete?

> `optional` **complete?**: `string` = `'Confirm setup'`

##### security.confirm?

> `optional` **confirm?**: `string` = `'Continue'`

##### security.confirmDisable?

> `optional` **confirmDisable?**: `string` = `'Turning off your authenticator signs you out. You will need to sign in again.'`

##### security.confirmDisableTitle?

> `optional` **confirmDisableTitle?**: `string` = `'Turn off your authenticator?'`

##### security.confirmGenerate?

> `optional` **confirmGenerate?**: `string` = `'A new set replaces every previous recovery code. Keep the new codes somewhere safe.'`

##### security.confirmGenerateTitle?

> `optional` **confirmGenerateTitle?**: `string` = `'Generate new recovery codes?'`

##### security.conflict?

> `optional` **conflict?**: `string` = `'Your sign-in methods changed. Check this operation and refresh security details.'`

##### security.cooldown?

> `optional` **cooldown?**: (`seconds`) => `string`

###### Parameters

###### seconds

`number`

###### Returns

`string`

##### security.copied?

> `optional` **copied?**: `string` = `'Copied'`

##### security.copy?

> `optional` **copy?**: `string` = `'Copy'`

##### security.description?

> `optional` **description?**: `string` = `'Protect sign-in with an authenticator and recovery codes.'`

##### security.disable?

> `optional` **disable?**: `string` = `'Turn off authenticator'`

##### security.disableAction?

> `optional` **disableAction?**: `string` = `'Turn off authenticator'`

##### security.disabled?

> `optional` **disabled?**: `string` = `'Not enabled'`

##### security.dismiss?

> `optional` **dismiss?**: `string` = `'Cancel'`

##### security.done?

> `optional` **done?**: `string` = `'Done'`

##### security.download?

> `optional` **download?**: `string` = `'Download codes'`

##### security.email?

> `optional` **email?**: `string` = `'Email code'`

##### security.enabled?

> `optional` **enabled?**: `string` = `'Enabled'`

##### security.enroll?

> `optional` **enroll?**: `string` = `'Set up authenticator'`

##### security.enrolled?

> `optional` **enrolled?**: `string` = `'Authenticator enabled. You can now generate recovery codes.'`

##### security.error?

> `optional` **error?**: `string` = `'We could not complete that step. Check the operation and try again.'`

##### security.expired?

> `optional` **expired?**: `string` = `'Setup expired. Its material is no longer available. Check the latest status before starting again.'`

##### security.forgetHint?

> `optional` **forgetHint?**: `string` = `'Forgetting only removes this saved status check. It does not cancel or undo the change.'`

##### security.forgetReceipt?

> `optional` **forgetReceipt?**: `string` = `'Forget saved operation'`

##### security.generate?

> `optional` **generate?**: `string` = `'Generate recovery codes'`

##### security.generateAction?

> `optional` **generateAction?**: `string` = `'Generate new recovery codes'`

##### security.issuer?

> `optional` **issuer?**: `string` = `'Issuer'`

##### security.keep?

> `optional` **keep?**: `string` = `'Keep setting up'`

##### security.loading?

> `optional` **loading?**: `string` = `'Loading security'`

##### security.lostCodes?

> `optional` **lostCodes?**: `string` = `'This set was generated, but its codes cannot be shown again. Confirm a new generation if you need another set.'`

##### security.lostMaterial?

> `optional` **lostMaterial?**: `string` = `'Setup material was not received or has been cleared. Cancel this operation before starting a new setup.'`

##### security.password?

> `optional` **password?**: `string` = `'Current password'`

##### security.provider?

> `optional` **provider?**: `string` = `'Confirm with provider'`

##### security.providerDone?

> `optional` **providerDone?**: `string` = `'I have returned from the provider'`

##### security.providerFailed?

> `optional` **providerFailed?**: `string` = `'Provider confirmation did not complete. Use the same connected account and try again.'`

##### security.qr?

> `optional` **qr?**: `string` = `'Authenticator setup QR code'`

##### security.query?

> `optional` **query?**: `string` = `'Check this operation'`

##### security.recoverCreate?

> `optional` **recoverCreate?**: `string` = `'Recover original request'`

##### security.recovery?

> `optional` **recovery?**: `string` = `'Recovery codes'`

##### security.recoveryDetail?

> `optional` **recoveryDetail?**: `string` = `'Keep backup codes somewhere safe in case you lose access to your authenticator.'`

##### security.recoveryReady?

> `optional` **recoveryReady?**: `string` = `'You are signed in again. Check the saved operation to confirm its result. No change will be sent again.'`

##### security.recoverySignIn?

> `optional` **recoverySignIn?**: `string` = `'Your session ended before the result could be confirmed. Sign in to the same account, then check this operation. The change will not be sent again.'`

##### security.recoveryTitle?

> `optional` **recoveryTitle?**: `string` = `'Confirm your security change'`

##### security.regenerate?

> `optional` **regenerate?**: `string` = `'Generate a new set'`

##### security.relogin?

> `optional` **relogin?**: `string` = `'Your change succeeded. Sign in again to continue.'`

##### security.remaining?

> `optional` **remaining?**: (`count`) => `string`

###### Parameters

###### count

`number`

###### Returns

`string`

##### security.retry?

> `optional` **retry?**: `string` = `'Try again'`

##### security.saveCodes?

> `optional` **saveCodes?**: `string` = `'Save these codes now. They will not be shown again.'`

##### security.secret?

> `optional` **secret?**: `string` = `'Manual setup key'`

##### security.send?

> `optional` **send?**: `string` = `'Send account code'`

##### security.sendUnavailable?

> `optional` **sendUnavailable?**: `string` = `'We cannot send a code right now. Try another method or try again later.'`

##### security.setup?

> `optional` **setup?**: `string` = `'Scan with your authenticator app, or enter the setup key manually. Then enter its six-digit code.'`

##### security.signIn?

> `optional` **signIn?**: `string` = `'Sign in again'`

##### security.stepUp?

> `optional` **stepUp?**: `string` = `'Use an existing authenticator'`

##### security.title?

> `optional` **title?**: `string` = `'Security verification'`

##### security.totp?

> `optional` **totp?**: `string` = `'Authenticator app'`

##### security.unavailable?

> `optional` **unavailable?**: `string` = `'This action is not available right now. Try another verification method or contact support.'`

##### security.uncertain?

> `optional` **uncertain?**: `string` = `'The result is not confirmed. Check this operation before making another change.'`

##### security.verify?

> `optional` **verify?**: `string` = `'Verify and continue'`

##### security.webauthn?

> `optional` **webauthn?**: `string` = `'Use security key'`

##### security.wrongCode?

> `optional` **wrongCode?**: `string` = `'That code did not match. Try a current code.'`

##### security.wrongPassword?

> `optional` **wrongPassword?**: `string` = `'That password did not match. Try again.'`

#### signUp?

> `optional` **signUp?**: `object`

##### signUp.accessCode?

> `optional` **accessCode?**: `string`

##### signUp.accessCodeOptional?

> `optional` **accessCodeOptional?**: `string`

##### signUp.accessCodePlaceholder?

> `optional` **accessCodePlaceholder?**: `string`

##### signUp.accessCodeRequired?

> `optional` **accessCodeRequired?**: `string`

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

##### signUp.passwordRequirements?

> `optional` **passwordRequirements?**: (`minimum`, `rules?`) => `string`

###### Parameters

###### minimum

`number`

###### rules?

###### breachedPasswordCheck

`boolean`

###### requireDigit

`boolean`

###### requireLowercase

`boolean`

###### requireSpecialChar

`boolean`

###### requireUppercase

`boolean`

###### Returns

`string`

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

##### signUp.username?

> `optional` **username?**: `string`

##### signUp.usernamePlaceholder?

> `optional` **usernamePlaceholder?**: `string`

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

### sessionLoginUri?

> `optional` **sessionLoginUri?**: `string`

Required only in server_session mode; never inferred from issuer or token availability.

#### Inherited from

[`IamConfig`](IamConfig.md).[`sessionLoginUri`](IamConfig.md#sessionloginuri)

***

### sessionMode?

> `optional` **sessionMode?**: `"oauth_tokens"` \| `"server_session"`

#### Inherited from

[`IamConfig`](IamConfig.md).[`sessionMode`](IamConfig.md#sessionmode)

***

### sessionProviderReturnUri?

> `optional` **sessionProviderReturnUri?**: `string`

Exact same-origin BFF provider callback path, without query/hash; BFF owns PKCE and upstream IDs.

#### Inherited from

[`IamConfig`](IamConfig.md).[`sessionProviderReturnUri`](IamConfig.md#sessionproviderreturnuri)

***

### sessionTransport?

> `optional` **sessionTransport?**: [`SessionTransport`](SessionTransport.md)

#### Inherited from

[`IamConfig`](IamConfig.md).[`sessionTransport`](IamConfig.md#sessiontransport)

***

### tokenStorage?

> `optional` **tokenStorage?**: `"memory"` \| `"sessionStorage"`

Token and resolved-permission storage strategy for the browser SDK.
Defaults to memory-only. sessionStorage persistence is browser-readable
and should be enabled only when the app deliberately accepts that risk.

#### Inherited from

[`IamConfig`](IamConfig.md).[`tokenStorage`](IamConfig.md#tokenstorage)
