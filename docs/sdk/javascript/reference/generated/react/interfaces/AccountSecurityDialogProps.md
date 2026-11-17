[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AccountSecurityDialogProps

# Interface: AccountSecurityDialogProps

## Extends

- [`AccountSecurityPanelProps`](AccountSecurityPanelProps.md)

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`appearance`](AccountSecurityPanelProps.md#appearance)

***

### className?

> `optional` **className?**: `string`

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`className`](AccountSecurityPanelProps.md#classname)

***

### colorScheme?

> `optional` **colorScheme?**: `AppearanceColorScheme`

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`colorScheme`](AccountSecurityPanelProps.md#colorscheme)

***

### darkAppearance?

> `optional` **darkAppearance?**: [`Appearance`](Appearance.md)

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`darkAppearance`](AccountSecurityPanelProps.md#darkappearance)

***

### localization?

> `optional` **localization?**: `Partial`\<\{ `authenticatorDetail`: `string`; `back`: `string`; `begin`: `string`; `busy`: `string`; `cancel`: `string`; `cancelConfirm`: `string`; `cancelled`: `string`; `cancelNow`: `string`; `cancelTitle`: `string`; `choose`: `string`; `close`: `string`; `code`: `string`; `committed`: `string`; `complete`: `string`; `confirm`: `string`; `confirmDisable`: `string`; `confirmDisableTitle`: `string`; `confirmGenerate`: `string`; `confirmGenerateTitle`: `string`; `conflict`: `string`; `cooldown`: (`seconds`) => `string`; `copied`: `string`; `copy`: `string`; `description`: `string`; `disable`: `string`; `disableAction`: `string`; `disabled`: `string`; `dismiss`: `string`; `done`: `string`; `download`: `string`; `email`: `string`; `enabled`: `string`; `enroll`: `string`; `enrolled`: `string`; `error`: `string`; `expired`: `string`; `forgetHint`: `string`; `forgetReceipt`: `string`; `generate`: `string`; `generateAction`: `string`; `issuer`: `string`; `keep`: `string`; `loading`: `string`; `lostCodes`: `string`; `lostMaterial`: `string`; `password`: `string`; `provider`: `string`; `providerDone`: `string`; `providerFailed`: `string`; `qr`: `string`; `query`: `string`; `recoverCreate`: `string`; `recovery`: `string`; `recoveryDetail`: `string`; `recoveryReady`: `string`; `recoverySignIn`: `string`; `recoveryTitle`: `string`; `regenerate`: `string`; `relogin`: `string`; `remaining`: (`count`) => `string`; `retry`: `string`; `saveCodes`: `string`; `secret`: `string`; `send`: `string`; `sendUnavailable`: `string`; `setup`: `string`; `signIn`: `string`; `stepUp`: `string`; `title`: `string`; `totp`: `string`; `unavailable`: `string`; `uncertain`: `string`; `verify`: `string`; `webauthn`: `string`; `wrongCode`: `string`; `wrongPassword`: `string`; \}\>

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`localization`](AccountSecurityPanelProps.md#localization)

***

### onComplete?

> `optional` **onComplete?**: (`operation`) => `void`

#### Parameters

##### operation

[`MfaOperation`](MfaOperation.md)

#### Returns

`void`

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`onComplete`](AccountSecurityPanelProps.md#oncomplete)

***

### onOpenChange

> **onOpenChange**: (`open`) => `void`

#### Parameters

##### open

`boolean`

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

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`onReauthenticate`](AccountSecurityPanelProps.md#onreauthenticate)

***

### open

> **open**: `boolean`

***

### style?

> `optional` **style?**: `CSSProperties`

#### Inherited from

[`AccountSecurityPanelProps`](AccountSecurityPanelProps.md).[`style`](AccountSecurityPanelProps.md#style)
