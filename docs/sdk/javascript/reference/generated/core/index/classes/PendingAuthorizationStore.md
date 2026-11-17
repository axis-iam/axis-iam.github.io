[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / PendingAuthorizationStore

# Class: PendingAuthorizationStore

One tab-local, bounded navigation capability; never an ordinary token store.

## Constructors

### Constructor

> **new PendingAuthorizationStore**(): `PendingAuthorizationStore`

#### Returns

`PendingAuthorizationStore`

## Methods

### assertNoReplacement()

> `static` **assertNoReplacement**(): `void`

A consumed callback cannot commit over a newer navigation owner.

#### Returns

`void`

***

### discard()

> `static` **discard**(`binding`): `void`

#### Parameters

##### binding

`Pick`\<[`PendingAuthorization`](../interfaces/PendingAuthorization.md), `"issuer"` \| `"clientId"`\>

#### Returns

`void`

***

### read()

> `static` **read**(`binding`): [`PendingAuthorization`](../interfaces/PendingAuthorization.md)

#### Parameters

##### binding

`Pick`\<[`PendingAuthorization`](../interfaces/PendingAuthorization.md), `"clientId"` \| `"issuer"` \| `"redirectUri"`\> & `object`

#### Returns

[`PendingAuthorization`](../interfaces/PendingAuthorization.md)

***

### remove()

> `static` **remove**(`flowOwner`): `void`

#### Parameters

##### flowOwner

`string`

#### Returns

`void`

***

### save()

> `static` **save**(`pending`): `void`

#### Parameters

##### pending

[`PendingAuthorization`](../interfaces/PendingAuthorization.md)

#### Returns

`void`
