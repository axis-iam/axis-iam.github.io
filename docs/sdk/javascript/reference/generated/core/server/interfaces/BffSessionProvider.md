[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / BffSessionProvider

# Interface: BffSessionProvider

Every mutation is atomic across the provider's declared scope.
compareAndSet never inserts an absent/expired record, and binds the complete
expected version/owner/fence. invalidate must fence outstanding writers.
Storage faults throw BffError; null means only absent/expired.

## Properties

### scope

> `readonly` **scope**: `"process"` \| `"shared"`

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### compareAndSet()

> **compareAndSet**(`id`, `expected`, `replacement`): `Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Parameters

##### id

`string`

##### expected

[`BffRecord`](BffRecord.md)

##### replacement

[`BffRecord`](BffRecord.md)

#### Returns

`Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

***

### create()

> **create**(`id`, `record`): `Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Parameters

##### id

`string`

##### record

[`BffRecord`](BffRecord.md)

#### Returns

`Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

***

### invalidate()

> **invalidate**(`id`): `Promise`\<[`BffRecord`](BffRecord.md) \| `null`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BffRecord`](BffRecord.md) \| `null`\>

***

### read()

> **read**(`id`): `Promise`\<[`BffRecord`](BffRecord.md) \| `null`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BffRecord`](BffRecord.md) \| `null`\>

***

### rotate()

> **rotate**(`id`, `expected`, `nextId`, `session`): `Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

Atomically consumes expected prelogin and creates a new session ID.

#### Parameters

##### id

`string`

##### expected

[`BffRecord`](BffRecord.md)

##### nextId

`string`

##### session

[`BffRecord`](BffRecord.md)

#### Returns

`Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>
