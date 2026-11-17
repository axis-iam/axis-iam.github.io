[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / PublicAuthPolicyResponse

# Interface: PublicAuthPolicyResponse

Resolved public auth policy for browser login/signup flows.

## Properties

### allowedPasswordIdentifierKinds

> **allowedPasswordIdentifierKinds**: (`"EMAIL"` \| `"USERNAME"` \| `"PHONE"`)[]

***

### allowedRegistrationGrantTypes

> **allowedRegistrationGrantTypes**: [`RegistrationGrantType`](../type-aliases/RegistrationGrantType.md)[]

***

### allowedSignupIdentifierKinds

> **allowedSignupIdentifierKinds**: [`SignupIdentifierKind`](../type-aliases/SignupIdentifierKind.md)[]

***

### breachedPasswordCheck

> **breachedPasswordCheck**: `boolean`

***

### defaultLogin

> **defaultLogin**: [`DefaultLogin`](DefaultLogin.md)

Effective preference, not the resolved capability default.

***

### deviceTrustDays

> **deviceTrustDays**: `number`

***

### emailMagicLinkEnabled

> **emailMagicLinkEnabled**: `boolean`

***

### emailOtpEnabled

> **emailOtpEnabled**: `boolean`

***

### identifierRestrictions

> **identifierRestrictions**: [`IdentifierRestrictions`](IdentifierRestrictions.md)

***

### idpAutoProvisioningEnabled

> **idpAutoProvisioningEnabled**: `boolean`

***

### lockoutDurationMinutes

> **lockoutDurationMinutes**: `number`

***

### maxLoginAttempts

> **maxLoginAttempts**: `number`

***

### maxTrustedDevices

> **maxTrustedDevices**: `number`

***

### mfaEnforcement

> **mfaEnforcement**: `string`

***

### minPasswordLength

> **minPasswordLength**: `number`

***

### passwordLoginEnabled

> **passwordLoginEnabled**: `boolean`

***

### progressiveLockout

> **progressiveLockout**: `boolean`

***

### requireDigit

> **requireDigit**: `boolean`

***

### requireLowercase

> **requireLowercase**: `boolean`

***

### requireSpecialChar

> **requireSpecialChar**: `boolean`

***

### requireUppercase

> **requireUppercase**: `boolean`

***

### signupMode

> **signupMode**: [`SignupMode`](../type-aliases/SignupMode.md)

***

### smsAutoProvisioningEnabled

> **smsAutoProvisioningEnabled**: `boolean`

***

### smsOtpEnabled

> **smsOtpEnabled**: `boolean`

***

### socialLoginEnabled

> **socialLoginEnabled**: `boolean`

***

### stepUpEnabled

> **stepUpEnabled**: `boolean`

***

### stepUpTriggers

> **stepUpTriggers**: `string`[]

***

### totpEnabled

> **totpEnabled**: `boolean`

***

### webauthnEnabled

> **webauthnEnabled**: `boolean`
