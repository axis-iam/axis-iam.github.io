[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / IamLocalization

# Interface: IamLocalization

## Properties

### accountCenter

> **accountCenter**: [`AccountCenterLocalization`](AccountCenterLocalization.md)

***

### auth

> **auth**: `object`

#### change

> **change**: `string`

#### continue

> **continue**: `string`

#### credentialMethod

> **credentialMethod**: (`method`) => `string`

##### Parameters

###### method

`"password"` \| `"sms"` \| `"magic_link"` \| `"email_otp"`

##### Returns

`string`

#### email

> **email**: `string`

#### emailPlaceholder

> **emailPlaceholder**: `string`

#### forgotPassword

> **forgotPassword**: `string`

#### identifierInvalid

> **identifierInvalid**: `string`

#### identifierLabel

> **identifierLabel**: `string`

#### identifierPlaceholder

> **identifierPlaceholder**: `string`

#### loadingOptions

> **loadingOptions**: `string`

#### logoAlt

> **logoAlt**: `string`

#### magicLinkSent

> **magicLinkSent**: (`email`) => `string`

##### Parameters

###### email

`string`

##### Returns

`string`

#### noMethodAvailable

> **noMethodAvailable**: `string`

#### noMethodForIdentifier

> **noMethodForIdentifier**: `string`

#### optionsUnavailable

> **optionsUnavailable**: `string`

#### or

> **or**: `string`

#### password

> **password**: `string`

#### passwordPlaceholder

> **passwordPlaceholder**: `string`

#### phone

> **phone**: `string`

#### phonePlaceholder

> **phonePlaceholder**: `string`

#### providerSignIn

> **providerSignIn**: (`provider`) => `string`

##### Parameters

###### provider

`string`

##### Returns

`string`

#### redirecting

> **redirecting**: `string`

#### resend

> **resend**: `string`

#### resendIn

> **resendIn**: (`seconds`) => `string`

##### Parameters

###### seconds

`number`

##### Returns

`string`

#### resendVerification

> **resendVerification**: `string`

#### sendCode

> **sendCode**: `string`

#### sending

> **sending**: `string`

#### sendingMagicLink

> **sendingMagicLink**: `string`

#### sendMagicLink

> **sendMagicLink**: `string`

#### signedInAs

> **signedInAs**: (`email`) => `string`

##### Parameters

###### email

`string`

##### Returns

`string`

#### signIn

> **signIn**: `string`

#### signInBusy

> **signInBusy**: `string`

#### signingInAs

> **signingInAs**: (`identifier`) => `string`

##### Parameters

###### identifier

`string`

##### Returns

`string`

#### verificationCode

> **verificationCode**: `string`

#### verificationCodePlaceholder

> **verificationCodePlaceholder**: `string`

#### verificationEmailFailed

> **verificationEmailFailed**: `string`

#### verificationEmailSent

> **verificationEmailSent**: `string`

#### verifying

> **verifying**: `string`

***

### authDialog

> **authDialog**: `object`

#### close

> **close**: `string`

#### signInTab

> **signInTab**: `string`

#### signUpTab

> **signUpTab**: `string`

#### title

> **title**: (`view`) => `string`

##### Parameters

###### view

`"sign-in"` \| `"sign-up"`

##### Returns

`string`

***

### connectedAccounts

> **connectedAccounts**: `object`

#### aria

> **aria**: `string`

#### confirmDisconnect

> **confirmDisconnect**: (`name`) => `string`

##### Parameters

###### name

`string`

##### Returns

`string`

#### connect

> **connect**: `string`

#### connectAccount

> **connectAccount**: `string`

#### connectAria

> **connectAria**: (`name`) => `string`

##### Parameters

###### name

`string`

##### Returns

`string`

#### connected

> **connected**: `string`

#### connectedAt

> **connectedAt**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### credential

> **credential**: `string`

#### credentialType

> **credentialType**: (`type`) => `string`

##### Parameters

###### type

`string` \| `null` \| `undefined`

##### Returns

`string`

#### description

> **description**: `string`

#### disconnect

> **disconnect**: `string`

#### disconnectAria

> **disconnectAria**: (`name`) => `string`

##### Parameters

###### name

`string`

##### Returns

`string`

#### disconnecting

> **disconnecting**: `string`

#### loading

> **loading**: `string`

#### noProviders

> **noProviders**: `string`

#### noSignInMethods

> **noSignInMethods**: `string`

#### opening

> **opening**: `string`

#### providerType

> **providerType**: (`providerType`, `protocol`) => `string`

##### Parameters

###### providerType

`string` \| `null` \| `undefined`

###### protocol

`string` \| `null` \| `undefined`

##### Returns

`string`

#### requiredForAccess

> **requiredForAccess**: `string`

#### signInMethods

> **signInMethods**: `string`

#### stepUpMethod

> **stepUpMethod**: (`method`) => `string`

##### Parameters

###### method

`string` \| `null` \| `undefined`

##### Returns

`string`

#### stepUpRequired

> **stepUpRequired**: `string`

#### stepUpRequiredWithMethods

> **stepUpRequiredWithMethods**: (`methods`) => `string`

##### Parameters

###### methods

`string`

##### Returns

`string`

#### title

> **title**: `string`

#### unavailable

> **unavailable**: `string`

***

### errors

> **errors**: `object`

#### accountLinkFailed

> **accountLinkFailed**: `string`

#### accountUnlinkFailed

> **accountUnlinkFailed**: `string`

#### codes

> **codes**: `Record`\<`ErrorCode`, `string`\>

#### generic

> **generic**: `string`

#### invitationFailed

> **invitationFailed**: `string`

#### organizationSwitchFailed

> **organizationSwitchFailed**: `string`

#### resetFailed

> **resetFailed**: `string`

#### resetRequestFailed

> **resetRequestFailed**: `string`

#### signInFailed

> **signInFailed**: `string`

#### signInOptionsUnavailable

> **signInOptionsUnavailable**: `string`

#### signUpFailed

> **signUpFailed**: `string`

***

### invitation

> **invitation**: `object`

#### accept

> **accept**: `string`

#### accepted

> **accepted**: `string`

#### accepting

> **accepting**: `string`

#### aria

> **aria**: `string`

#### detail

> **detail**: (`application`, `email`, `role`) => `string`

##### Parameters

###### application

`string`

###### email

`string`

###### role

`string`

##### Returns

`string`

#### expires

> **expires**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### join

> **join**: (`organization`) => `string`

##### Parameters

###### organization

`string`

##### Returns

`string`

#### loading

> **loading**: `string`

#### loginRequired

> **loginRequired**: `string`

#### title

> **title**: `string`

***

### organization

> **organization**: `object`

#### role

> **role**: (`role`) => `string`

##### Parameters

###### role

`string` \| `null` \| `undefined`

##### Returns

`string`

#### select

> **select**: `string`

#### switching

> **switching**: `string`

#### switchUnavailable

> **switchUnavailable**: `string`

***

### passwordReset

> **passwordReset**: `object`

#### checkEmail

> **checkEmail**: `string`

#### confirmPassword

> **confirmPassword**: `string`

#### confirmPasswordPlaceholder

> **confirmPasswordPlaceholder**: `string`

#### createNewPassword

> **createNewPassword**: `string`

#### email

> **email**: `string`

#### emailPlaceholder

> **emailPlaceholder**: `string`

#### invalidEmail

> **invalidEmail**: `string`

#### newPassword

> **newPassword**: `string`

#### passwordMinLength

> **passwordMinLength**: `string`

#### passwordMismatch

> **passwordMismatch**: `string`

#### passwordPlaceholder

> **passwordPlaceholder**: `string`

#### resetComplete

> **resetComplete**: `string`

#### resetCompleteDetail

> **resetCompleteDetail**: `string`

#### resetPassword

> **resetPassword**: `string`

#### resetSent

> **resetSent**: `string`

#### resetting

> **resetting**: `string`

#### resetTokenRequired

> **resetTokenRequired**: `string`

#### sending

> **sending**: `string`

#### sendResetLink

> **sendResetLink**: `string`

***

### signUp

> **signUp**: `object`

#### accessCode

> **accessCode**: `string`

#### accessCodePlaceholder

> **accessCodePlaceholder**: `string`

#### accountCreated

> **accountCreated**: `string`

#### accountCreatedDetail

> **accountCreatedDetail**: (`email`) => `string`

##### Parameters

###### email

`string`

##### Returns

`string`

#### checkEmail

> **checkEmail**: `string`

#### confirmPassword

> **confirmPassword**: `string`

#### confirmPasswordPlaceholder

> **confirmPasswordPlaceholder**: `string`

#### createAccount

> **createAccount**: `string`

#### creatingAccount

> **creatingAccount**: `string`

#### email

> **email**: `string`

#### emailPlaceholder

> **emailPlaceholder**: `string`

#### grantNotAccepted

> **grantNotAccepted**: `string`

#### invitationOrAccessCodeRequired

> **invitationOrAccessCodeRequired**: `string`

#### invitationRequired

> **invitationRequired**: `string`

#### password

> **password**: `string`

#### passwordMinLength

> **passwordMinLength**: `string`

#### passwordMismatch

> **passwordMismatch**: `string`

#### passwordPlaceholder

> **passwordPlaceholder**: `string`

#### resendIn

> **resendIn**: (`seconds`) => `string`

##### Parameters

###### seconds

`number`

##### Returns

`string`

#### resendVerification

> **resendVerification**: `string`

#### sending

> **sending**: `string`

#### signUp

> **signUp**: `string`

#### title

> **title**: `string`

#### unavailable

> **unavailable**: `string`

#### verificationEmailFailed

> **verificationEmailFailed**: `string`

#### verificationEmailSent

> **verificationEmailSent**: `string`

#### verificationOptional

> **verificationOptional**: (`email`) => `string`

##### Parameters

###### email

`string`

##### Returns

`string`

#### verificationRequired

> **verificationRequired**: (`email`) => `string`

##### Parameters

###### email

`string`

##### Returns

`string`

#### verificationUnknown

> **verificationUnknown**: `string`

***

### userButton

> **userButton**: `object`

#### fallbackUser

> **fallbackUser**: `string`

#### menuAria

> **menuAria**: `string`

#### organization

> **organization**: (`slug`) => `string`

##### Parameters

###### slug

`string`

##### Returns

`string`

#### signOut

> **signOut**: `string`

***

### userProfile

> **userProfile**: `object`

#### account

> **account**: `string`

#### devices

> **devices**: `string`

#### email

> **email**: `string`

#### lastSeen

> **lastSeen**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### name

> **name**: `string`

#### organization

> **organization**: `string`

#### revoke

> **revoke**: `string`

#### roles

> **roles**: `string`

#### title

> **title**: `string`

#### unavailable

> **unavailable**: `string`

#### username

> **username**: `string`
