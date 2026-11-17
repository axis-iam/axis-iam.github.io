[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / InvitationBffSession

# Interface: InvitationBffSession

Resolved by the host's validated HttpOnly (prelogin or OAuth) session, never from request JSON.

## Properties

### accessToken

> **accessToken**: `string` \| `null`

***

### csrfToken

> **csrfToken**: `string`

***

### expiresAt

> **expiresAt**: `number`

***

### identity

> **identity**: \{ `applicationId`: `string`; `clientId`: `string`; `userId`: `string`; \} \| `null`

From a verified token or authenticated /me response, never decoded JWT text.

***

### owner

> **owner**: `string`

Must change on user, Application, Client, or authentication-owner replacement.
