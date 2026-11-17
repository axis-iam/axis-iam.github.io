[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AuthFlowActions

# Interface: AuthFlowActions

## Methods

### back()

> **back**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### cancel()

> **cancel**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### cancelRegistration()

> **cancelRegistration**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### completeMagicLink()

> **completeMagicLink**(`url`): `Promise`\<`void`\>

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`void`\>

***

### completeRegistration()

> **completeRegistration**(`code`): `Promise`\<`void`\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`void`\>

***

### continueWithIdentifier()

> **continueWithIdentifier**(`identifier`): `void`

#### Parameters

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`void`

***

### resendVerification()

> **resendVerification**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### reset()

> **reset**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### resumeProviderCallback()

> **resumeProviderCallback**(`url`): `Promise`\<`void`\>

#### Parameters

##### url

`string`

#### Returns

`Promise`\<`void`\>

***

### resumeRegistration()

> **resumeRegistration**(`id`): `Promise`\<`void`\>

#### Parameters

##### id

`string`

#### Returns

`Promise`\<`void`\>

***

### retryOptions()

> **retryOptions**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### selectMethod()

> **selectMethod**(`method`): `void`

#### Parameters

##### method

[`AuthCredentialMethod`](../type-aliases/AuthCredentialMethod.md)

#### Returns

`void`

***

### sendCode()

> **sendCode**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### sendMagicLink()

> **sendMagicLink**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

***

### setIntent()

> **setIntent**(`intent`): `Promise`\<`void`\>

#### Parameters

##### intent

[`AuthFlowIntent`](../type-aliases/AuthFlowIntent.md)

#### Returns

`Promise`\<`void`\>

***

### signInWithProvider()

> **signInWithProvider**(`providerId`, `options?`): `Promise`\<`void`\>

Shared popup flow: open, await, validate, continue, close. Call from a user action.

#### Parameters

##### providerId

`string`

##### options?

###### registrationGrant?

[`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)

###### timeoutMs?

`number`

#### Returns

`Promise`\<`void`\>

***

### signUp()

> **signUp**(`input`): `Promise`\<`void`\>

#### Parameters

##### input

###### identifier

[`RegistrationIdentifier`](../type-aliases/RegistrationIdentifier.md)

###### password

`string`

###### registrationGrant?

[`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)

#### Returns

`Promise`\<`void`\>

***

### startProvider()

> **startProvider**(`providerId`, `registrationGrant?`): `Promise`\<`string`\>

#### Parameters

##### providerId

`string`

##### registrationGrant?

[`RegistrationGrantInput`](../type-aliases/RegistrationGrantInput.md)

#### Returns

`Promise`\<`string`\>

***

### submitPassword()

> **submitPassword**(`password`): `Promise`\<`void`\>

#### Parameters

##### password

`string`

#### Returns

`Promise`\<`void`\>

***

### verifyCode()

> **verifyCode**(`code`): `Promise`\<`void`\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<`void`\>

***

### verifyMfa()

> **verifyMfa**(`code`, `method?`): `Promise`\<`void`\>

#### Parameters

##### code

`string`

##### method?

[`MfaProofMethod`](../type-aliases/MfaProofMethod.md)

#### Returns

`Promise`\<`void`\>
