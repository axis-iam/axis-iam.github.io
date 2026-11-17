[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AccountPermissionsPanelProps

# Interface: AccountPermissionsPanelProps

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

### onChecked?

> `optional` **onChecked?**: (`permission`, `allowed`) => `void` \| `Promise`\<`void`\>

#### Parameters

##### permission

`string`

##### allowed

`boolean`

#### Returns

`void` \| `Promise`\<`void`\>

***

### organizationId?

> `optional` **organizationId?**: `string` \| `null`

***

### showPermissionChecker?

> `optional` **showPermissionChecker?**: `boolean`

Enables the developer-oriented raw permission checker on standalone panels.

***

### style?

> `optional` **style?**: `CSSProperties`
