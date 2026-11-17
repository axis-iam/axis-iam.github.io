[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AccountSecurityPanelProps

# Interface: AccountSecurityPanelProps

## Extended by

- [`AccountSecurityDialogProps`](AccountSecurityDialogProps.md)

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

***

### className?

> `optional` **className?**: `string`

***

### colorScheme?

> `optional` **colorScheme?**: `AppearanceColorScheme`

***

### darkAppearance?

> `optional` **darkAppearance?**: [`Appearance`](Appearance.md)

***

### localization?

> `optional` **localization?**: `Partial`\<\{ `authenticatorDetail`: `string`; `back`: `string`; `begin`: `string`; `busy`: `string`; `cancel`: `string`; `cancelConfirm`: `string`; `cancelled`: `string`; `cancelNow`: `string`; `cancelTitle`: `string`; `choose`: `string`; `close`: `string`; `code`: `string`; `committed`: `string`; `complete`: `string`; `confirm`: `string`; `confirmDisable`: `string`; `confirmDisableTitle`: `string`; `confirmGenerate`: `string`; `confirmGenerateTitle`: `string`; `conflict`: `string`; `cooldown`: (`seconds`) => `string`; `copied`: `string`; `copy`: `string`; `description`: `string`; `disable`: `string`; `disableAction`: `string`; `disabled`: `string`; `dismiss`: `string`; `done`: `string`; `download`: `string`; `email`: `string`; `enabled`: `string`; `enroll`: `string`; `enrolled`: `string`; `error`: `string`; `expired`: `string`; `forgetHint`: `string`; `forgetReceipt`: `string`; `generate`: `string`; `generateAction`: `string`; `issuer`: `string`; `keep`: `string`; `loading`: `string`; `lostCodes`: `string`; `lostMaterial`: `string`; `password`: `string`; `provider`: `string`; `providerDone`: `string`; `providerFailed`: `string`; `qr`: `string`; `query`: `string`; `recoverCreate`: `string`; `recovery`: `string`; `recoveryDetail`: `string`; `recoveryReady`: `string`; `recoverySignIn`: `string`; `recoveryTitle`: `string`; `regenerate`: `string`; `relogin`: `string`; `remaining`: (`count`) => `string`; `retry`: `string`; `saveCodes`: `string`; `secret`: `string`; `send`: `string`; `sendUnavailable`: `string`; `setup`: `string`; `signIn`: `string`; `stepUp`: `string`; `title`: `string`; `totp`: `string`; `unavailable`: `string`; `uncertain`: `string`; `verify`: `string`; `webauthn`: `string`; `wrongCode`: `string`; `wrongPassword`: `string`; \}\>

***

### onComplete?

> `optional` **onComplete?**: (`operation`) => `void`

#### Parameters

##### operation

[`MfaOperation`](MfaOperation.md)

#### Returns

`void`

***

### onReauthenticate?

> `optional` **onReauthenticate?**: (`receipt`) => `void`

#### Parameters

##### receipt

`Pick`\<[`MfaOperation`](MfaOperation.md), `"ref"` \| `"type"`\>

#### Returns

`void`

***

### style?

> `optional` **style?**: `CSSProperties`
