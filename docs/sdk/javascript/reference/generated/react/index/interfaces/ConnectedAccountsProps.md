[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / ConnectedAccountsProps

# Interface: ConnectedAccountsProps

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

***

### confirmDisconnect?

> `optional` **confirmDisconnect?**: `boolean`

***

### onLinkStarted?

> `optional` **onLinkStarted?**: (`provider`, `authorizationUrl`) => `void`

#### Parameters

##### provider

[`LinkableIdentityProvider`](LinkableIdentityProvider.md)

##### authorizationUrl

`string`

#### Returns

`void`

***

### onUnlinked?

> `optional` **onUnlinked?**: () => `void` \| `Promise`\<`void`\>

#### Returns

`void` \| `Promise`\<`void`\>

***

### redirect?

> `optional` **redirect?**: `boolean`

***

### redirectUri?

> `optional` **redirectUri?**: `string`
