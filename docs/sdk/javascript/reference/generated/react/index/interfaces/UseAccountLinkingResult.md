[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / UseAccountLinkingResult

# Interface: UseAccountLinkingResult

## Properties

### error

> **error**: `Error` \| `null`

***

### isLoading

> **isLoading**: `boolean`

***

### isStarting

> **isStarting**: `boolean`

***

### isUnlinking

> **isUnlinking**: `boolean`

***

### startLink

> **startLink**: (`providerOrId`, `options?`) => `Promise`\<[`AccountLinkAuthorizeResult`](AccountLinkAuthorizeResult.md)\>

#### Parameters

##### providerOrId

`string` \| [`LinkableIdentityProvider`](LinkableIdentityProvider.md)

##### options?

[`StartAccountLinkOptions`](StartAccountLinkOptions.md)

#### Returns

`Promise`\<[`AccountLinkAuthorizeResult`](AccountLinkAuthorizeResult.md)\>

***

### unlink

> **unlink**: (`methodId`) => `Promise`\<`void`\>

#### Parameters

##### methodId

`string`

#### Returns

`Promise`\<`void`\>
