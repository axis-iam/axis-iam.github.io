[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / useStepUp

# Function: useStepUp()

> **useStepUp**(): `object`

The server owns purpose/session-bound grants; displayed assurance is never a grant.

## Returns

`object`

### authenticationContext

> **authenticationContext**: [`AuthenticationContext`](../interfaces/AuthenticationContext.md) \| `null`

### start

> **start**: (`trigger`, `reason?`) => `Promise`\<\{ `availableMethods`: `string`[]; `ref`: `string`; `startWebAuthn`: () => `Promise`\<`unknown`\>; `verifyTotp`: (`code`) => `Promise`\<`void`\>; `verifyWebAuthn`: (`credential`) => `Promise`\<`void`\>; \} \| \{ `availableMethods`: (`"totp"` \| `"webauthn"`)[]; `challengeId`: `string`; `verifyTotp`: (`code`) => `Promise`\<`void`\>; \}\>

#### Parameters

##### trigger

[`StepUpTrigger`](../type-aliases/StepUpTrigger.md)

##### reason?

`string`

#### Returns

`Promise`\<\{ `availableMethods`: `string`[]; `ref`: `string`; `startWebAuthn`: () => `Promise`\<`unknown`\>; `verifyTotp`: (`code`) => `Promise`\<`void`\>; `verifyWebAuthn`: (`credential`) => `Promise`\<`void`\>; \} \| \{ `availableMethods`: (`"totp"` \| `"webauthn"`)[]; `challengeId`: `string`; `verifyTotp`: (`code`) => `Promise`\<`void`\>; \}\>
