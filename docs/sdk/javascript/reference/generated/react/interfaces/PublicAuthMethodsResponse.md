[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / PublicAuthMethodsResponse

# Interface: PublicAuthMethodsResponse

## Extends

- [`AuthCapabilities`](AuthCapabilities.md)

## Properties

### allowedPasswordIdentifierKinds

> **allowedPasswordIdentifierKinds**: (`"EMAIL"` \| `"USERNAME"` \| `"PHONE"`)[]

#### Inherited from

[`AuthCapabilities`](AuthCapabilities.md).[`allowedPasswordIdentifierKinds`](AuthCapabilities.md#allowedpasswordidentifierkinds)

***

### allowedSignupIdentifierKinds

> **allowedSignupIdentifierKinds**: [`SignupIdentifierKind`](../type-aliases/SignupIdentifierKind.md)[]

#### Inherited from

[`AuthCapabilities`](AuthCapabilities.md).[`allowedSignupIdentifierKinds`](AuthCapabilities.md#allowedsignupidentifierkinds)

***

### clientId

> **clientId**: `string`

***

### defaultIdentifierKind

> **defaultIdentifierKind**: `"EMAIL"` \| `"USERNAME"` \| `"PHONE"` \| `null`

#### Inherited from

[`AuthCapabilities`](AuthCapabilities.md).[`defaultIdentifierKind`](AuthCapabilities.md#defaultidentifierkind)

***

### defaultLogin

> **defaultLogin**: [`DefaultLogin`](DefaultLogin.md) \| `null`

#### Inherited from

[`AuthCapabilities`](AuthCapabilities.md).[`defaultLogin`](AuthCapabilities.md#defaultlogin)

***

### emailMagicLinkEnabled

> **emailMagicLinkEnabled**: `boolean`

***

### emailOtpEnabled

> **emailOtpEnabled**: `boolean`

***

### identifierMethods

> **identifierMethods**: [`IdentifierMethods`](IdentifierMethods.md)[]

#### Inherited from

[`AuthCapabilities`](AuthCapabilities.md).[`identifierMethods`](AuthCapabilities.md#identifiermethods)

***

### identifierRestrictions

> **identifierRestrictions**: [`IdentifierRestrictions`](IdentifierRestrictions.md)

#### Inherited from

[`AuthCapabilities`](AuthCapabilities.md).[`identifierRestrictions`](AuthCapabilities.md#identifierrestrictions)

***

### idpAutoProvisioningEnabled

> **idpAutoProvisioningEnabled**: `boolean`

***

### idpProviders

> **idpProviders**: [`AuthMethodIdpProviderResponse`](AuthMethodIdpProviderResponse.md)[]

***

### loginInitiationUri

> **loginInitiationUri**: `string` \| `null`

***

### methods

> **methods**: [`AuthMethodAvailabilityResponse`](AuthMethodAvailabilityResponse.md)[]

***

### passwordLoginEnabled

> **passwordLoginEnabled**: `boolean`

***

### postVerificationRedirectUri

> **postVerificationRedirectUri**: `string` \| `null`

***

### resend

> **resend**: `object`

#### emailVerificationCooldownSeconds

> **emailVerificationCooldownSeconds**: `number`

***

### selfRegistrationEnabled

> **selfRegistrationEnabled**: `boolean`

***

### signupEnabled

> **signupEnabled**: `boolean`

***

### smsOtpEnabled

> **smsOtpEnabled**: `boolean`

***

### socialLoginEnabled

> **socialLoginEnabled**: `boolean`
