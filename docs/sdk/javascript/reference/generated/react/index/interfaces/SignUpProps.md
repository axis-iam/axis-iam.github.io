[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / SignUpProps

# Interface: SignUpProps

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

***

### mode?

> `optional` **mode?**: `"redirect"` \| `"embedded"`

***

### onError?

> `optional` **onError?**: (`error`) => `void`

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onSuccess?

> `optional` **onSuccess?**: (`user`) => `void`

#### Parameters

##### user

[`SignUpUserInfo`](SignUpUserInfo.md)

#### Returns

`void`

***

### presentation?

> `optional` **presentation?**: `"standalone"` \| `"dialog"`

Compact presentation for a container that already supplies the auth dialog title and frame.

***

### registrationGrant?

> `optional` **registrationGrant?**: [`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)

Optional short-lived registration proof held by the calling application.
