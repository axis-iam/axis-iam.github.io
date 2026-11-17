[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / SessionLifecycle

# Class: SessionLifecycle\<T\>

## Type Parameters

### T

`T`

## Constructors

### Constructor

> **new SessionLifecycle**\<`T`\>(): `SessionLifecycle`\<`T`\>

#### Returns

`SessionLifecycle`\<`T`\>

## Accessors

### generation

#### Get Signature

> **get** **generation**(): `number`

##### Returns

`number`

***

### invalidationReason

#### Get Signature

> **get** **invalidationReason**(): [`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) \| `null`

##### Returns

[`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) \| `null`

## Methods

### assertCurrent()

> **assertCurrent**(`generation`): `void`

#### Parameters

##### generation

`number`

#### Returns

`void`

***

### cancelTimer()

> **cancelTimer**(): `void`

#### Returns

`void`

***

### invalidate()

> **invalidate**(`reason?`): `void`

#### Parameters

##### reason?

[`SessionInvalidationReason`](../type-aliases/SessionInvalidationReason.md) = `'cleared'`

#### Returns

`void`

***

### isCurrent()

> **isCurrent**(`generation`): `boolean`

#### Parameters

##### generation

`number`

#### Returns

`boolean`

***

### run()

> **run**(`operation`): `Promise`\<`T`\>

#### Parameters

##### operation

(`generation`) => `Promise`\<`T`\>

#### Returns

`Promise`\<`T`\>

***

### scheduleAt()

> **scheduleAt**(`deadline`, `operation`): `void`

#### Parameters

##### deadline

`number`

##### operation

() => `void`

#### Returns

`void`
