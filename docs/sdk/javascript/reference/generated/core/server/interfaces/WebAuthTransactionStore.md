[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / WebAuthTransactionStore

# Interface: WebAuthTransactionStore

## Methods

### consume()

> **consume**(`id`): `Promise`\<[`WebAuthTransaction`](WebAuthTransaction.md) \| `null`\>

Atomically returns and deletes the transaction.

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`WebAuthTransaction`](WebAuthTransaction.md) \| `null`\>

***

### save()

> **save**(`id`, `transaction`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

##### transaction

[`WebAuthTransaction`](WebAuthTransaction.md)

#### Returns

`Promise`\<`void`\>
