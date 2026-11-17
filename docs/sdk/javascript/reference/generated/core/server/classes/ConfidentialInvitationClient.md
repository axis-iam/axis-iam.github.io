[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / ConfidentialInvitationClient

# Class: ConfidentialInvitationClient

Application authority only: never issuer cookies, raw owner control, or automatic mutation retries.

## Extends

- [`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md)

## Constructors

### Constructor

> **new ConfidentialInvitationClient**(`config`): `ConfidentialInvitationClient`

#### Parameters

##### config

[`InvitationClientConfig`](../../index/interfaces/InvitationClientConfig.md) & `object`

#### Returns

`ConfidentialInvitationClient`

#### Overrides

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`constructor`](../../index/classes/InvitationJourneyClient.md#constructor)

## Properties

### config

> `protected` `readonly` **config**: [`InvitationClientConfig`](../../index/interfaces/InvitationClientConfig.md)

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`config`](../../index/classes/InvitationJourneyClient.md#config)

## Methods

### authenticate()

> **authenticate**(`ref`, `input`): `Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

##### input

[`PrimaryAuthentication`](../../index/type-aliases/PrimaryAuthentication.md)

#### Returns

`Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`authenticate`](../../index/classes/InvitationJourneyClient.md#authenticate)

***

### authenticatedSession()

> **authenticatedSession**(`ref`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`authenticatedSession`](../../index/classes/InvitationJourneyClient.md#authenticatedsession)

***

### cancel()

> **cancel**(`ref`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`cancel`](../../index/classes/InvitationJourneyClient.md#cancel)

***

### cancelAuthentication()

> **cancelAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`cancelAuthentication`](../../index/classes/InvitationJourneyClient.md#cancelauthentication)

***

### cancelEnrollment()

> **cancelEnrollment**(`ref`, `enrollmentRef`): `Promise`\<[`InvitationEnrollment`](../../index/interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

##### enrollmentRef

`string`

#### Returns

`Promise`\<[`InvitationEnrollment`](../../index/interfaces/InvitationEnrollment.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`cancelEnrollment`](../../index/classes/InvitationJourneyClient.md#cancelenrollment)

***

### cancelRegistration()

> **cancelRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`cancelRegistration`](../../index/classes/InvitationJourneyClient.md#cancelregistration)

***

### challenge()

> **challenge**(`ref`, `method`, `identifier`): `Promise`\<\{ `authRef`: `string`; `expiresAt`: `string`; `nextAction`: `string`; \}\>

#### Parameters

##### ref

`string`

##### method

[`PrimaryProofMethod`](../../index/type-aliases/PrimaryProofMethod.md)

##### identifier

[`LoginIdentifier`](../../index/type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<\{ `authRef`: `string`; `expiresAt`: `string`; `nextAction`: `string`; \}\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`challenge`](../../index/classes/InvitationJourneyClient.md#challenge)

***

### clear()

> **clear**(): `void`

#### Returns

`void`

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`clear`](../../index/classes/InvitationJourneyClient.md#clear)

***

### completeEnrollment()

> **completeEnrollment**(`ref`, `input`): `Promise`\<[`InvitationEnrollment`](../../index/interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

##### input

[`InvitationEnrollmentCompletion`](../../index/type-aliases/InvitationEnrollmentCompletion.md)

#### Returns

`Promise`\<[`InvitationEnrollment`](../../index/interfaces/InvitationEnrollment.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`completeEnrollment`](../../index/classes/InvitationJourneyClient.md#completeenrollment)

***

### confirm()

> **confirm**(`ref`, `input`, `idempotencyKey`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

##### input

[`InvitationConfirm`](../../index/interfaces/InvitationConfirm.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`confirm`](../../index/classes/InvitationJourneyClient.md#confirm)

***

### continue()

> **continue**(`ref`, `expectedVersion`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

##### expectedVersion

`number`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`continue`](../../index/classes/InvitationJourneyClient.md#continue)

***

### enrollment()

> **enrollment**(`ref`): `Promise`\<[`InvitationEnrollment`](../../index/interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationEnrollment`](../../index/interfaces/InvitationEnrollment.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`enrollment`](../../index/classes/InvitationJourneyClient.md#enrollment)

***

### exchange()

> **exchange**(`continuation`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### continuation

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`exchange`](../../index/classes/InvitationJourneyClient.md#exchange)

***

### get()

> **get**(`ref`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`get`](../../index/classes/InvitationJourneyClient.md#get)

***

### mfa()

> **mfa**(`ref`, `method`, `code`): `Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

##### method

[`MfaProofMethod`](../../index/type-aliases/MfaProofMethod.md)

##### code

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`mfa`](../../index/classes/InvitationJourneyClient.md#mfa)

***

### prepareEntry()

> **prepareEntry**(`continuation`, `mode`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

Read the safe ref before exchanging. A registration proof is retained in memory before POST.

#### Parameters

##### continuation

`string`

##### mode

`"authenticated"` \| `"registration"`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`prepareEntry`](../../index/classes/InvitationJourneyClient.md#prepareentry)

***

### register()

> **register**(`ref`, `input`, `idempotencyKey`): `Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

##### input

[`InvitationRegistrationInput`](../../index/type-aliases/InvitationRegistrationInput.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`register`](../../index/classes/InvitationJourneyClient.md#register)

***

### registration()

> **registration**(`ref`): `Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`registration`](../../index/classes/InvitationJourneyClient.md#registration)

***

### registrationContext()

> **registrationContext**(`continuation`): `Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Parameters

##### continuation

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../../index/interfaces/InvitationJourney.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`registrationContext`](../../index/classes/InvitationJourneyClient.md#registrationcontext)

***

### registrationHeaders()

> `protected` **registrationHeaders**(): `object`

#### Returns

`object`

##### Authorization

> **Authorization**: `string`

#### Overrides

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`registrationHeaders`](../../index/classes/InvitationJourneyClient.md#registrationheaders)

***

### resendRegistration()

> **resendRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`resendRegistration`](../../index/classes/InvitationJourneyClient.md#resendregistration)

***

### startAuthentication()

> **startAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../../index/interfaces/InvitationAuthentication.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`startAuthentication`](../../index/classes/InvitationJourneyClient.md#startauthentication)

***

### startEnrollment()

> **startEnrollment**(`ref`, `method`): `Promise`\<[`InvitationEnrollmentBegin`](../../index/interfaces/InvitationEnrollmentBegin.md)\>

#### Parameters

##### ref

`string`

##### method

[`InvitationEnrollmentMethod`](../../index/type-aliases/InvitationEnrollmentMethod.md)

#### Returns

`Promise`\<[`InvitationEnrollmentBegin`](../../index/interfaces/InvitationEnrollmentBegin.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`startEnrollment`](../../index/classes/InvitationJourneyClient.md#startenrollment)

***

### useAuthenticatedSession()

> **useAuthenticatedSession**(`ref`): `void`

Explicit authority change after normal OAuth login; never a silent fallback.

#### Parameters

##### ref

`string`

#### Returns

`void`

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`useAuthenticatedSession`](../../index/classes/InvitationJourneyClient.md#useauthenticatedsession)

***

### verifyRegistration()

> **verifyRegistration**(`ref`, `code`): `Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

##### code

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../../index/interfaces/InvitationRegistration.md)\>

#### Inherited from

[`InvitationJourneyClient`](../../index/classes/InvitationJourneyClient.md).[`verifyRegistration`](../../index/classes/InvitationJourneyClient.md#verifyregistration)
