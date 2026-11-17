[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / InvitationEnrollmentBegin

# Interface: InvitationEnrollmentBegin

One-time material belongs to the initiating view, never a cache or ordinary session.

## Properties

### delivery

> **delivery**: `"NOT_APPLICABLE"` \| `"AVAILABLE"` \| `"ALREADY_DELIVERED"`

***

### enrollment

> **enrollment**: [`InvitationEnrollment`](InvitationEnrollment.md)

***

### totp

> **totp**: \{ `issuer`: `string`; `qrCodeUri`: `string`; `secret`: `string`; \} \| `null`

***

### webauthn

> **webauthn**: \{ `publicKeyCredentialCreationOptions`: `string`; `requestId`: `string`; \} \| `null`
