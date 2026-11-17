[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / UseAuthFlowOptions

# Interface: UseAuthFlowOptions

## Properties

### autoProviderCallback?

> `optional` **autoProviderCallback?**: `boolean`

Automatically consume an exactly bound CUSTOM return in this tab (default true).

***

### initialIntent?

> `optional` **initialIntent?**: [`AuthFlowIntent`](../type-aliases/AuthFlowIntent.md)

***

### onError?

> `optional` **onError?**: (`error`) => `void`

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onSignInSuccess?

> `optional` **onSignInSuccess?**: (`user`) => `void`

#### Parameters

##### user

[`IamUser`](IamUser.md)

#### Returns

`void`

***

### onSignUpSuccess?

> `optional` **onSignUpSuccess?**: (`operation`) => `void`

#### Parameters

##### operation

[`RegistrationOperation`](RegistrationOperation.md)

#### Returns

`void`

***

### registrationGrant?

> `optional` **registrationGrant?**: [`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)
