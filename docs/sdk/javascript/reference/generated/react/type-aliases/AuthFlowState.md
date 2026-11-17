[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AuthFlowState

# Type Alias: AuthFlowState

> **AuthFlowState** = `AuthFlowCommon` & \{ `step`: `"loading"` \| `"unavailable"` \| `"identifier"` \| `"sign-up"`; \} \| \{ `codeSent`: `boolean`; `identifier`: `string`; `identifierKind`: `"email"` \| `"phone"` \| `"username"`; `loginIdentifier`: [`LoginIdentifier`](LoginIdentifier.md); `magicLinkSent`: `boolean`; `method`: [`AuthCredentialMethod`](AuthCredentialMethod.md) \| `null`; `methods`: readonly [`AuthCredentialMethod`](AuthCredentialMethod.md)[]; `phase`: `"credentials"` \| `"code"` \| `"magic-link"`; `step`: `"method"`; \} \| \{ `identifier`: `string`; `methods`: readonly [`MfaProofMethod`](MfaProofMethod.md)[]; `step`: `"mfa"`; \} \| \{ `registration`: [`RegistrationOperation`](../interfaces/RegistrationOperation.md); `step`: `"verification"`; \} \| \{ `step`: `"success"`; `user`: [`IamUser`](../interfaces/IamUser.md); \}
