[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / IamLocalization

# Interface: IamLocalization

## Properties

### accountCenter

> **accountCenter**: [`AccountCenterLocalization`](AccountCenterLocalization.md)

***

### auth

> **auth**: `object`

#### authenticatorCode

> **authenticatorCode**: `string`

#### back

> **back**: `string`

#### brandingLoading

> **brandingLoading**: `string`

#### brandingUnavailable

> **brandingUnavailable**: `string`

#### challengeExpired

> **challengeExpired**: `string`

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

#### haveAccount

> **haveAccount**: `string`

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

#### mfaDescription

> **mfaDescription**: `string`

#### noAccount

> **noAccount**: `string`

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

#### retryBranding

> **retryBranding**: `string`

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

#### signUp

> **signUp**: `string`

#### verificationCode

> **verificationCode**: `string`

#### verificationCodePlaceholder

> **verificationCodePlaceholder**: `string`

#### verificationEmailFailed

> **verificationEmailFailed**: `string`

#### verificationEmailSent

> **verificationEmailSent**: `string`

#### verify

> **verify**: `string`

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

### identity

> **identity**: `object`

#### accept

> **accept**: `string` = `'Accept transfer'`

#### add

> **add**: `string` = `'Add a method'`

#### addEmail

> **addEmail**: `string` = `'Add email'`

#### addPhone

> **addPhone**: `string` = `'Add phone number'`

#### addUsername

> **addUsername**: `string` = `'Add username'`

#### AVAILABLE

> **AVAILABLE**: `string` = `'Available'`

#### AWAITING\_PROOF

> **AWAITING\_PROOF**: `string` = `'Complete the required proofs'`

#### AWAITING\_REAUTH

> **AWAITING\_REAUTH**: `string` = `'Confirm account control'`

#### awaitingCounterpart

> **awaitingCounterpart**: `string` = `'Waiting for the other account to confirm. You can continue later.'`

#### cancel

> **cancel**: `string` = `'Cancel operation'`

#### cancelChange

> **cancelChange**: `string` = `'Cancel this change'`

#### CANCELLED

> **CANCELLED**: `string` = `'Operation cancelled'`

#### cancelRegistration

> **cancelRegistration**: `string` = `'Cancel registration'`

#### cancelUnconfirmed

> **cancelUnconfirmed**: `string` = `'Cancellation is unconfirmed. Reopen this operation before continuing.'`

#### change

> **change**: `string` = `'Change'`

#### choosePhoneCountry

> **choosePhoneCountry**: `string` = `'Choose a country / region'`

#### COMMITTED

> **COMMITTED**: `string` = `'Change completed'`

#### complete

> **complete**: `string` = `'Complete change'`

#### confirmCancelChange

> **confirmCancelChange**: `string` = `'Cancel change'`

#### confirmProviderTarget

> **confirmProviderTarget**: `string` = `'Confirm connection'`

#### connectProvider

> **connectProvider**: `string` = `'Connect a provider'`

#### continueOperation

> **continueOperation**: `string` = `'Continue change'`

#### createUnconfirmed

> **createUnconfirmed**: `string` = `'The server may have created this change, but its response was lost. Recover the original request before editing or starting another change. Keep this window open.'`

#### CURRENT\_ACCOUNT

> **CURRENT\_ACCOUNT**: `string` = `'Current account'`

#### description

> **description**: `string` = `'Manage the identifiers and connected accounts you use to sign in.'`

#### details

> **details**: `string` = `'Technical details'`

#### didNotReceive

> **didNotReceive**: `string` = `"Didn't receive an email?"`

#### done

> **done**: `string` = `'Done'`

#### EMAIL

> **EMAIL**: `string` = `'Email'`

#### emailCount

> **emailCount**: (`count`) => `string`

##### Parameters

###### count

`number`

##### Returns

`string`

#### emailOverview

> **emailOverview**: `string` = `'Back to email overview'`

#### emailPages

> **emailPages**: `string` = `'Email pages'`

#### error

> **error**: `string` = `'This change could not be completed. Refresh the operation and try again.'`

#### exitDescription

> **exitDescription**: `string` = `'The pending change will be cancelled. Your existing sign-in methods will stay unchanged.'`

#### exitTitle

> **exitTitle**: `string` = `'Cancel this change?'`

#### EXPIRED

> **EXPIRED**: `string` = `'Operation expired; start again'`

#### expires

> **expires**: `string` = `'Expires'`

#### FIRST\_FACTOR

> **FIRST\_FACTOR**: `string` = `'Sign-in'`

#### identifiers

> **identifiers**: `string` = `'Identifiers'`

#### keepChange

> **keepChange**: `string` = `'Continue change'`

#### kind

> **kind**: `string` = `'Identifier type'`

#### lastPathProtection

> **lastPathProtection**: `string` = `'You must keep a usable sign-in method. This is checked again when you save.'`

#### later

> **later**: `string` = `'Continue later'`

#### link

> **link**: `string` = `'Connect'`

#### managed

> **managed**: `string` = `'Managed by your organization'`

#### manageEmails

> **manageEmails**: `string` = `'Manage emails'`

#### managementProofs

> **managementProofs**: `string` = `'Available current-account confirmation'`

#### managementRequirement

> **managementRequirement**: `object`

##### managementRequirement.COUNTERPART\_CONFIRMATION

> **COUNTERPART\_CONFIRMATION**: `string` = `'The receiving account must also confirm.'`

##### managementRequirement.CURRENT\_ACCOUNT\_PROOF

> **CURRENT\_ACCOUNT\_PROOF**: `string` = `'Confirm control of your current account.'`

##### managementRequirement.NEW\_IDENTIFIER

> **NEW\_IDENTIFIER**: `string` = `'The new identifier must meet the current application policy.'`

##### managementRequirement.REMAINING\_LOGIN\_PATH

> **REMAINING\_LOGIN\_PATH**: `string` = `'Keep another complete, usable sign-in path.'`

##### managementRequirement.REMOVE\_OLD

> **REMOVE\_OLD**: `string` = `'Remove the old identifier after verification.'`

##### managementRequirement.REPLACEMENT\_PRIMARY

> **REPLACEMENT\_PRIMARY**: `string` = `'Choose an eligible replacement primary identifier.'`

##### managementRequirement.TARGET\_EMAIL\_OTP

> **TARGET\_EMAIL\_OTP**: `string` = `'Verify the target email with a code.'`

##### managementRequirement.TARGET\_PHONE\_OTP

> **TARGET\_PHONE\_OTP**: `string` = `'Verify the target phone number with a code.'`

#### managementRequirements

> **managementRequirements**: `string` = `'Requirements for this change'`

#### moreActions

> **moreActions**: `string` = `'More actions'`

#### newIdentifier

> **newIdentifier**: `object`

##### newIdentifier.EMAIL

> **EMAIL**: `string` = `'New email'`

##### newIdentifier.PHONE

> **PHONE**: `string` = `'New phone number'`

##### newIdentifier.USERNAME

> **USERNAME**: `string` = `'New username'`

#### next

> **next**: `string` = `'Next'`

#### noPrimaryEmail

> **noPrimaryEmail**: `string` = `'No primary email'`

#### operationId

> **operationId**: `string` = `'Operation ID'`

#### otherMethods

> **otherMethods**: `string` = `'Use another sign-in method'`

#### otherProofs

> **otherProofs**: `string` = `'Use another verification method'`

#### otp

> **otp**: `string` = `'Verification code'`

#### page

> **page**: (`page`, `count`) => `string`

##### Parameters

###### page

`number`

###### count

`number`

##### Returns

`string`

#### password

> **password**: `string` = `'Confirm your current password'`

#### passwordMethod

> **passwordMethod**: `string` = `'Password'`

#### PHONE

> **PHONE**: `string` = `'Phone number'`

#### phoneAmbiguous

> **phoneAmbiguous**: `string` = `'Choose a country / region and enter the local number.'`

#### phoneCountry

> **phoneCountry**: `string` = `'Country / region'`

#### phoneInvalid

> **phoneInvalid**: `string` = `'Enter a valid phone number for the selected country / region.'`

#### phoneNumber

> **phoneNumber**: `string` = `'Phone number'`

#### previous

> **previous**: `string` = `'Previous'`

#### primary

> **primary**: `string` = `'Primary'`

#### providerAuth

> **providerAuth**: `string` = `'Confirm with provider'`

#### providerDone

> **providerDone**: `string` = `'I completed provider confirmation'`

#### providerMethod

> **providerMethod**: (`name`) => `string`

##### Parameters

###### name

`string`

##### Returns

`string`

#### providers

> **providers**: `string` = `'Connected providers'`

#### providerSelection

> **providerSelection**: `string` = `'Choose a provider, confirm your current account, then authorize the external account. Its identity is confirmed only after you return.'`

#### providerTargetPending

> **providerTargetPending**: `string` = `'Waiting for the verified external account. Authorize with the provider before confirming the connection.'`

#### providerTargetPrivate

> **providerTargetPrivate**: `string` = `'The provider confirmed an account without a display name or email.'`

#### providerTargetTitle

> **providerTargetTitle**: `string` = `'External account to connect'`

#### providerUnavailable

> **providerUnavailable**: `string` = `'Connection information unavailable'`

#### queryStatus

> **queryStatus**: `string` = `'Check latest status'`

#### READY

> **READY**: `string` = `'Ready to complete'`

#### reauthenticate

> **reauthenticate**: `string` = `'Confirm account control'`

#### receive

> **receive**: `string` = `'Receive a transfer'`

#### recoverCreate

> **recoverCreate**: `string` = `'Recover original request'`

#### RECOVERY

> **RECOVERY**: `string` = `'Recovery'`

#### region

> **region**: `string` = `'Phone region (ISO country code)'`

#### registrationComplete

> **registrationComplete**: `string` = `'Registration completed. You can now sign in.'`

#### registrationPending

> **registrationPending**: `string` = `'Verify your email to create your account. No account or session exists yet.'`

#### reject

> **reject**: `string` = `'Reject transfer'`

#### REJECTED

> **REJECTED**: `string` = `'Transfer rejected'`

#### relogin

> **relogin**: `string` = `'Your change succeeded. Sign in again to continue.'`

#### remaining

> **remaining**: (`minutes`) => `string`

##### Parameters

###### minutes

`number`

##### Returns

`string`

#### remove

> **remove**: `string` = `'Remove'`

#### removeOld

> **removeOld**: `string` = `'Remove the old identifier after verification'`

#### reopen

> **reopen**: `string` = `'Open or refresh operation'`

#### replace

> **replace**: `string` = `'Replace'`

#### replacementPrimary

> **replacementPrimary**: `string` = `'Replacement primary identifier (required when removing the primary)'`

#### restart

> **restart**: `string` = `'Registration control is missing. Start again and choose your own password.'`

#### restartRegistration

> **restartRegistration**: `string` = `'Start registration again'`

#### retry

> **retry**: `string` = `'Retry'`

#### SECOND\_FACTOR

> **SECOND\_FACTOR**: `string` = `'Second factor'`

#### send

> **send**: `string` = `'Send target code'`

#### sendAccountCode

> **sendAccountCode**: `string` = `'Send current-account code'`

#### setPrimary

> **setPrimary**: `string` = `'Set primary'`

#### signIn

> **signIn**: `string` = `'Sign in again'`

#### source

> **source**: `string` = `'Verification source'`

#### status

> **status**: `string` = `'Operation status'`

#### stepUp

> **stepUp**: `string` = `'Confirm with authenticator'`

#### TARGET\_OWNERSHIP

> **TARGET\_OWNERSHIP**: `string` = `'Target ownership'`

#### targetUser

> **targetUser**: `string` = `'Receiving user ID'`

#### title

> **title**: `string` = `'Login methods'`

#### transfer

> **transfer**: `string` = `'Transfer'`

#### TRANSFER\_COUNTERPART

> **TRANSFER\_COUNTERPART**: `string` = `'Receiving account'`

#### transferWarning

> **transferWarning**: `string` = `'Both accounts must confirm. Roles, organizations and business data stay with each account.'`

#### unavailable

> **unavailable**: `string` = `'This action is not available. Try another method or contact support.'`

#### UNAVAILABLE

> **UNAVAILABLE**: `string` = `'Unavailable'`

#### unlink

> **unlink**: `string` = `'Disconnect'`

#### unverified

> **unverified**: `string` = `'Unverified'`

#### useKind

> **useKind**: (`kind`) => `string`

##### Parameters

###### kind

`string`

##### Returns

`string`

#### USERNAME

> **USERNAME**: `string` = `'Username'`

#### value

> **value**: `string` = `'Identifier'`

#### verificationUnknown

> **verificationUnknown**: `string` = `'Verification status unavailable'`

#### verified

> **verified**: `string` = `'Verified'`

#### verify

> **verify**: `string` = `'Verify'`

#### verifyComplete

> **verifyComplete**: `string` = `'Verify and complete'`

#### verifyContinue

> **verifyContinue**: `string` = `'Verify and continue'`

#### verifyRegistration

> **verifyRegistration**: `string` = `'Verify email'`

#### webauthn

> **webauthn**: `string` = `'Confirm with security key'`

#### yourUserId

> **yourUserId**: `string` = `'Your user ID'`

***

### invitation

> **invitation**: `object`

#### accept

> **accept**: `string`

#### accepted

> **accepted**: `string`

#### accepting

> **accepting**: `string`

#### accountKept

> **accountKept**: `string`

#### applicationLabel

> **applicationLabel**: `string`

#### aria

> **aria**: `string`

#### cancel

> **cancel**: `string`

#### checkRegistration

> **checkRegistration**: `string`

#### checkResult

> **checkResult**: `string`

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

#### enrollmentRequired

> **enrollmentRequired**: `string`

#### expires

> **expires**: (`value`) => `string`

##### Parameters

###### value

`string`

##### Returns

`string`

#### explicitConfirmation

> **explicitConfirmation**: `string`

#### invalidEntry

> **invalidEntry**: `string`

#### join

> **join**: (`organization`) => `string`

##### Parameters

###### organization

`string`

##### Returns

`string`

#### loading

> **loading**: `string`

#### loginCompleted

> **loginCompleted**: `string`

#### loginRequired

> **loginRequired**: `string`

#### mfaMethod

> **mfaMethod**: `string`

#### navigate

> **navigate**: `string`

#### navigationFailed

> **navigationFailed**: `string`

#### preparationNotSubmitted

> **preparationNotSubmitted**: `string`

#### recipientLabel

> **recipientLabel**: `string`

#### recoveryCode

> **recoveryCode**: `string`

#### retryPreparation

> **retryPreparation**: `string`

#### reviewChanges

> **reviewChanges**: `string`

#### roleLabel

> **roleLabel**: `string`

#### switchAccount

> **switchAccount**: `string`

#### terminal

> **terminal**: (`state`) => `string`

##### Parameters

###### state

`string`

##### Returns

`string`

#### title

> **title**: `string`

#### unknownResult

> **unknownResult**: `string`

#### useSession

> **useSession**: `string`

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

### security

> **security**: `object`

#### authenticatorDetail

> **authenticatorDetail**: `string` = `'Use codes from your authenticator as an extra sign-in check.'`

#### back

> **back**: `string` = `'Back'`

#### begin

> **begin**: `string` = `'Show setup instructions'`

#### busy

> **busy**: `string` = `'Another security operation is in progress. Resume it or wait for it to expire.'`

#### cancel

> **cancel**: `string` = `'Cancel setup'`

#### cancelConfirm

> **cancelConfirm**: `string` = `'Cancel this operation? Any setup material will stop working.'`

#### cancelled

> **cancelled**: `string` = `'Operation cancelled'`

#### cancelNow

> **cancelNow**: `string` = `'Cancel setup'`

#### cancelTitle

> **cancelTitle**: `string` = `'Cancel this setup?'`

#### choose

> **choose**: `string` = `'Choose a verification method'`

#### close

> **close**: `string` = `'Close security verification'`

#### code

> **code**: `string` = `'Verification code'`

#### committed

> **committed**: `string` = `'Change completed'`

#### complete

> **complete**: `string` = `'Confirm setup'`

#### confirm

> **confirm**: `string` = `'Continue'`

#### confirmDisable

> **confirmDisable**: `string` = `'Turning off your authenticator signs you out. You will need to sign in again.'`

#### confirmDisableTitle

> **confirmDisableTitle**: `string` = `'Turn off your authenticator?'`

#### confirmGenerate

> **confirmGenerate**: `string` = `'A new set replaces every previous recovery code. Keep the new codes somewhere safe.'`

#### confirmGenerateTitle

> **confirmGenerateTitle**: `string` = `'Generate new recovery codes?'`

#### conflict

> **conflict**: `string` = `'Your sign-in methods changed. Check this operation and refresh security details.'`

#### cooldown

> **cooldown**: (`seconds`) => `string`

##### Parameters

###### seconds

`number`

##### Returns

`string`

#### copied

> **copied**: `string` = `'Copied'`

#### copy

> **copy**: `string` = `'Copy'`

#### description

> **description**: `string` = `'Protect sign-in with an authenticator and recovery codes.'`

#### disable

> **disable**: `string` = `'Turn off authenticator'`

#### disableAction

> **disableAction**: `string` = `'Turn off authenticator'`

#### disabled

> **disabled**: `string` = `'Not enabled'`

#### dismiss

> **dismiss**: `string` = `'Cancel'`

#### done

> **done**: `string` = `'Done'`

#### download

> **download**: `string` = `'Download codes'`

#### email

> **email**: `string` = `'Email code'`

#### enabled

> **enabled**: `string` = `'Enabled'`

#### enroll

> **enroll**: `string` = `'Set up authenticator'`

#### enrolled

> **enrolled**: `string` = `'Authenticator enabled. You can now generate recovery codes.'`

#### error

> **error**: `string` = `'We could not complete that step. Check the operation and try again.'`

#### expired

> **expired**: `string` = `'Setup expired. Its material is no longer available. Check the latest status before starting again.'`

#### forgetHint

> **forgetHint**: `string` = `'Forgetting only removes this saved status check. It does not cancel or undo the change.'`

#### forgetReceipt

> **forgetReceipt**: `string` = `'Forget saved operation'`

#### generate

> **generate**: `string` = `'Generate recovery codes'`

#### generateAction

> **generateAction**: `string` = `'Generate new recovery codes'`

#### issuer

> **issuer**: `string` = `'Issuer'`

#### keep

> **keep**: `string` = `'Keep setting up'`

#### loading

> **loading**: `string` = `'Loading security'`

#### lostCodes

> **lostCodes**: `string` = `'This set was generated, but its codes cannot be shown again. Confirm a new generation if you need another set.'`

#### lostMaterial

> **lostMaterial**: `string` = `'Setup material was not received or has been cleared. Cancel this operation before starting a new setup.'`

#### password

> **password**: `string` = `'Current password'`

#### provider

> **provider**: `string` = `'Confirm with provider'`

#### providerDone

> **providerDone**: `string` = `'I have returned from the provider'`

#### providerFailed

> **providerFailed**: `string` = `'Provider confirmation did not complete. Use the same connected account and try again.'`

#### qr

> **qr**: `string` = `'Authenticator setup QR code'`

#### query

> **query**: `string` = `'Check this operation'`

#### recoverCreate

> **recoverCreate**: `string` = `'Recover original request'`

#### recovery

> **recovery**: `string` = `'Recovery codes'`

#### recoveryDetail

> **recoveryDetail**: `string` = `'Keep backup codes somewhere safe in case you lose access to your authenticator.'`

#### recoveryReady

> **recoveryReady**: `string` = `'You are signed in again. Check the saved operation to confirm its result. No change will be sent again.'`

#### recoverySignIn

> **recoverySignIn**: `string` = `'Your session ended before the result could be confirmed. Sign in to the same account, then check this operation. The change will not be sent again.'`

#### recoveryTitle

> **recoveryTitle**: `string` = `'Confirm your security change'`

#### regenerate

> **regenerate**: `string` = `'Generate a new set'`

#### relogin

> **relogin**: `string` = `'Your change succeeded. Sign in again to continue.'`

#### remaining

> **remaining**: (`count`) => `string`

##### Parameters

###### count

`number`

##### Returns

`string`

#### retry

> **retry**: `string` = `'Try again'`

#### saveCodes

> **saveCodes**: `string` = `'Save these codes now. They will not be shown again.'`

#### secret

> **secret**: `string` = `'Manual setup key'`

#### send

> **send**: `string` = `'Send account code'`

#### sendUnavailable

> **sendUnavailable**: `string` = `'We cannot send a code right now. Try another method or try again later.'`

#### setup

> **setup**: `string` = `'Scan with your authenticator app, or enter the setup key manually. Then enter its six-digit code.'`

#### signIn

> **signIn**: `string` = `'Sign in again'`

#### stepUp

> **stepUp**: `string` = `'Use an existing authenticator'`

#### title

> **title**: `string` = `'Security verification'`

#### totp

> **totp**: `string` = `'Authenticator app'`

#### unavailable

> **unavailable**: `string` = `'This action is not available right now. Try another verification method or contact support.'`

#### uncertain

> **uncertain**: `string` = `'The result is not confirmed. Check this operation before making another change.'`

#### verify

> **verify**: `string` = `'Verify and continue'`

#### webauthn

> **webauthn**: `string` = `'Use security key'`

#### wrongCode

> **wrongCode**: `string` = `'That code did not match. Try a current code.'`

#### wrongPassword

> **wrongPassword**: `string` = `'That password did not match. Try again.'`

***

### signUp

> **signUp**: `object`

#### accessCode

> **accessCode**: `string`

#### accessCodeOptional

> **accessCodeOptional**: `string`

#### accessCodePlaceholder

> **accessCodePlaceholder**: `string`

#### accessCodeRequired

> **accessCodeRequired**: `string`

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

#### passwordRequirements

> **passwordRequirements**: (`minimum`, `rules?`) => `string`

##### Parameters

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

##### Returns

`string`

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

#### username

> **username**: `string`

#### usernamePlaceholder

> **usernamePlaceholder**: `string`

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
