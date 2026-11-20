[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / BffSessionBinding

# Interface: BffSessionBinding

## Methods

### clear()

> **clear**(`req`, `res`): `Promise`\<`void`\>

#### Parameters

##### req

`Request`

##### res

`Response`

#### Returns

`Promise`\<`void`\>

***

### read()

> **read**(`req`): `Promise`\<`string` \| `undefined`\>

This binding is the sole owner of the host's existing session Cookie.

#### Parameters

##### req

`Request`

#### Returns

`Promise`\<`string` \| `undefined`\>

***

### write()

> **write**(`req`, `res`, `id`): `Promise`\<`void`\>

#### Parameters

##### req

`Request`

##### res

`Response`

##### id

`string`

#### Returns

`Promise`\<`void`\>
