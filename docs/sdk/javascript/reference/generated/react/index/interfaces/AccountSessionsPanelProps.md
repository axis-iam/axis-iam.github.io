[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / AccountSessionsPanelProps

# Interface: AccountSessionsPanelProps

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

***

### className?

> `optional` **className?**: `string`

***

### colorScheme?

> `optional` **colorScheme?**: [`AccountCenterColorScheme`](../type-aliases/AccountCenterColorScheme.md)

***

### darkAppearance?

> `optional` **darkAppearance?**: [`Appearance`](Appearance.md)

***

### localization?

> `optional` **localization?**: `Partial`\<[`AccountCenterLocalization`](AccountCenterLocalization.md)\>

***

### onLoggedOut?

> `optional` **onLoggedOut?**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### onOtherSessionsRevoked?

> `optional` **onOtherSessionsRevoked?**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### onSessionRevoked?

> `optional` **onSessionRevoked?**: (`session`) => `void` \| `Promise`\<`void`\>

#### Parameters

##### session

[`AccountSession`](AccountSession.md)

#### Returns

`void` \| `Promise`\<`void`\>

***

### showLogout?

> `optional` **showLogout?**: `boolean`

***

### style?

> `optional` **style?**: `CSSProperties`
