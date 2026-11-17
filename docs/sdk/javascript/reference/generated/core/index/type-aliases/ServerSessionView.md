[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / ServerSessionView

# Type Alias: ServerSessionView

> **ServerSessionView** = \{ `csrfToken`: `string`; `expiresAt`: `string`; `owner`: `string`; `permissions`: \{ `permissions`: `string`[]; `roles`: `string`[]; \}; `profile`: [`CurrentUser`](../interfaces/CurrentUser.md); `state`: `"AUTHENTICATED"`; `version`: `number`; \} \| \{ `authorizationUrl?`: `string`; `challengeExpiresAt?`: `string`; `cooldownSeconds?`: `number`; `csrfToken`: `string`; `expiresAt`: `string`; `nextAction?`: [`LoginView`](LoginView.md)\[`"nextAction"`\]; `state`: `string`; \}
