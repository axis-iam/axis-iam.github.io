[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / InvitationBff

# Class: InvitationBff

Finite single-process BFF adapter. Route it behind the host's secure HttpOnly session store.

## Constructors

### Constructor

> **new InvitationBff**(`config`): `InvitationBff`

#### Parameters

##### config

[`InvitationBffConfig`](../interfaces/InvitationBffConfig.md)

#### Returns

`InvitationBff`

## Methods

### dispose()

> **dispose**(): `void`

#### Returns

`void`

***

### handle()

> **handle**(`request`): `Promise`\<`Response`\>

#### Parameters

##### request

`Request`

#### Returns

`Promise`\<`Response`\>

***

### releaseOwner()

> **releaseOwner**(`owner`): `void`

#### Parameters

##### owner

`string`

#### Returns

`void`
