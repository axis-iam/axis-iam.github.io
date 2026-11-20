[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / getBffSession

# Function: getBffSession()

> **getBffSession**(`req`): \{ `csrfToken`: `string`; `expiresAt`: `string`; `owner`: `string`; `permissions`: \{ `permissions`: `string`[]; `roles`: `string`[]; \}; `profile`: `CurrentUser`; `state`: `"AUTHENTICATED"`; `version`: `number`; \} \| `undefined`

Reads only the value validated by requireSession for this exact request.

## Parameters

### req

`Request`

## Returns

\{ `csrfToken`: `string`; `expiresAt`: `string`; `owner`: `string`; `permissions`: \{ `permissions`: `string`[]; `roles`: `string`[]; \}; `profile`: `CurrentUser`; `state`: `"AUTHENTICATED"`; `version`: `number`; \} \| `undefined`
