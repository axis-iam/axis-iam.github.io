[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / MemorySessionProvider

# Class: MemorySessionProvider

Every mutation is atomic across the provider's declared scope.
compareAndSet never inserts an absent/expired record, and binds the complete
expected version/owner/fence. invalidate must fence outstanding writers.
Storage faults throw BffError; null means only absent/expired.

## Implements

- [`BffSessionProvider`](../interfaces/BffSessionProvider.md)

## Constructors

### Constructor

> **new MemorySessionProvider**(`config?`): `MemorySessionProvider`

#### Parameters

##### config?

[`MemorySessionProviderConfig`](../interfaces/MemorySessionProviderConfig.md) = `{}`

#### Returns

`MemorySessionProvider`

## Properties

### scope

> `readonly` **scope**: `"process"`

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`scope`](../interfaces/BffSessionProvider.md#scope)

## Methods

### close()

> **close**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`close`](../interfaces/BffSessionProvider.md#close)

***

### compareAndSet()

> **compareAndSet**(`id`, `expected`, `replacement`): `Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Parameters

##### id

`string`

##### expected

[`BffRecord`](../interfaces/BffRecord.md)

##### replacement

[`BffRecord`](../interfaces/BffRecord.md)

#### Returns

`Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`compareAndSet`](../interfaces/BffSessionProvider.md#compareandset)

***

### create()

> **create**(`id`, `record`): `Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Parameters

##### id

`string`

##### record

[`BffRecord`](../interfaces/BffRecord.md)

#### Returns

`Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`create`](../interfaces/BffSessionProvider.md#create)

***

### invalidate()

> **invalidate**(`id`): `Promise`\<[`BffRecord`](../interfaces/BffRecord.md) \| `null`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BffRecord`](../interfaces/BffRecord.md) \| `null`\>

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`invalidate`](../interfaces/BffSessionProvider.md#invalidate)

***

### read()

> **read**(`id`): `Promise`\<[`BffRecord`](../interfaces/BffRecord.md) \| `null`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<[`BffRecord`](../interfaces/BffRecord.md) \| `null`\>

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`read`](../interfaces/BffSessionProvider.md#read)

***

### rotate()

> **rotate**(`id`, `expected`, `nextId`, `session`): `Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

Atomically consumes expected prelogin and creates a new session ID.

#### Parameters

##### id

`string`

##### expected

[`BffRecord`](../interfaces/BffRecord.md)

##### nextId

`string`

##### session

[`BffRecord`](../interfaces/BffRecord.md)

#### Returns

`Promise`\<[`ProviderResult`](../type-aliases/ProviderResult.md)\>

#### Implementation of

[`BffSessionProvider`](../interfaces/BffSessionProvider.md).[`rotate`](../interfaces/BffSessionProvider.md#rotate)
