[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / RegistrationGrantInput

# Type Alias: RegistrationGrantInput

> **RegistrationGrantInput** = \{ `registrationGrantToken`: `string`; `type`: `"EMAIL_LINK"`; \} \| \{ `registrationAccessCode`: `string`; `type`: `"ACCESS_CODE"`; \} \| \{ `organizationInvitationToken`: `string`; `type`: `"ORG_INVITATION"`; \}

Exactly one proof for an Application registration grant. Proof values are
caller-managed, short-lived browser memory only.
