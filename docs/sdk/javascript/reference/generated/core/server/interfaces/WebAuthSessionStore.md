[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / WebAuthSessionStore

# Interface: WebAuthSessionStore

## Methods

### create()

> **create**(`id`, `session`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

##### session

[`WebAuthSession`](WebAuthSession.md)

#### Returns

`Promise`\<`void`\>

***

### delete()

> **delete**(`id`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### read()

> **read**(`id`): `Promise`\<[`WebAuthSession`](WebAuthSession.md) \| `null`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`WebAuthSession`](WebAuthSession.md) \| `null`\>

***

### replace()

> **replace**(`id`, `expectedRevision`, `session`): `Promise`\<`boolean`\>

Atomically replaces only the record whose revision still matches.

#### Parameters

##### id

`string`

##### expectedRevision

`string`

##### session

[`WebAuthSession`](WebAuthSession.md)

#### Returns

`Promise`\<`boolean`\>
