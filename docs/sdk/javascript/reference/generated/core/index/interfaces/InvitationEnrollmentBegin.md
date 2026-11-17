[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / InvitationEnrollmentBegin

# Interface: InvitationEnrollmentBegin

One-time material belongs to the initiating view, never a cache or ordinary session.

## Properties

### delivery

> **delivery**: `"AVAILABLE"` \| `"ALREADY_DELIVERED"` \| `"NOT_APPLICABLE"`

***

### enrollment

> **enrollment**: [`InvitationEnrollment`](InvitationEnrollment.md)

***

### totp

> **totp**: \{ `issuer`: `string`; `qrCodeUri`: `string`; `secret`: `string`; \} \| `null`

***

### webauthn

> **webauthn**: \{ `publicKeyCredentialCreationOptions`: `string`; `requestId`: `string`; \} \| `null`
