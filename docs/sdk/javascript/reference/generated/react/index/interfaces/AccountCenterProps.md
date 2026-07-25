[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / AccountCenterProps

# Interface: AccountCenterProps

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

### initialSection?

> `optional` **initialSection?**: [`AccountCenterSection`](../type-aliases/AccountCenterSection.md)

***

### labels?

> `optional` **labels?**: `Partial`\<`Record`\<`"menu"` \| `"title"` \| `"close"` \| `"back"` \| [`AccountCenterSection`](../type-aliases/AccountCenterSection.md), `string`\>\>

***

### localization?

> `optional` **localization?**: `Partial`\<[`AccountCenterLocalization`](AccountCenterLocalization.md)\>

***

### onOpenChange

> **onOpenChange**: (`open`) => `void`

#### Parameters

##### open

`boolean`

#### Returns

`void`

***

### open

> **open**: `boolean`

***

### organizationId?

> `optional` **organizationId?**: `string` \| `null`

***

### passwordProps?

> `optional` **passwordProps?**: `Omit`\<[`PasswordChangeFormProps`](PasswordChangeFormProps.md), `"localization"` \| `"colorScheme"` \| `"appearance"` \| `"darkAppearance"`\>

***

### permissionsProps?

> `optional` **permissionsProps?**: `Omit`\<[`AccountPermissionsPanelProps`](AccountPermissionsPanelProps.md), `"localization"` \| `"colorScheme"` \| `"appearance"` \| `"darkAppearance"` \| `"organizationId"`\>

***

### profileProps?

> `optional` **profileProps?**: `Omit`\<[`AccountProfilePanelProps`](AccountProfilePanelProps.md), `"localization"` \| `"colorScheme"` \| `"appearance"` \| `"darkAppearance"`\>

***

### sessionsProps?

> `optional` **sessionsProps?**: `Omit`\<[`AccountSessionsPanelProps`](AccountSessionsPanelProps.md), `"localization"` \| `"colorScheme"` \| `"appearance"` \| `"darkAppearance"`\>

***

### style?

> `optional` **style?**: `CSSProperties`
