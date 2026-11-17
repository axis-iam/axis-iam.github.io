[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / InvitationJourneyClient

# Class: InvitationJourneyClient

Application authority only: never issuer cookies, raw owner control, or automatic mutation retries.

## Extended by

- [`ConfidentialInvitationClient`](../../server/classes/ConfidentialInvitationClient.md)

## Constructors

### Constructor

> **new InvitationJourneyClient**(`config`): `InvitationJourneyClient`

#### Parameters

##### config

[`InvitationClientConfig`](../interfaces/InvitationClientConfig.md)

#### Returns

`InvitationJourneyClient`

## Properties

### config

> `protected` `readonly` **config**: [`InvitationClientConfig`](../interfaces/InvitationClientConfig.md)

## Methods

### authenticate()

> **authenticate**(`ref`, `input`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

##### input

[`PrimaryAuthentication`](../type-aliases/PrimaryAuthentication.md)

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

***

### authenticatedSession()

> **authenticatedSession**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### cancel()

> **cancel**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### cancelAuthentication()

> **cancelAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

***

### cancelEnrollment()

> **cancelEnrollment**(`ref`, `enrollmentRef`): `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

##### enrollmentRef

`string`

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

***

### cancelRegistration()

> **cancelRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

***

### challenge()

> **challenge**(`ref`, `method`, `identifier`): `Promise`\<\{ `authRef`: `string`; `expiresAt`: `string`; `nextAction`: `string`; \}\>

#### Parameters

##### ref

`string`

##### method

[`PrimaryProofMethod`](../type-aliases/PrimaryProofMethod.md)

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<\{ `authRef`: `string`; `expiresAt`: `string`; `nextAction`: `string`; \}\>

***

### clear()

> **clear**(): `void`

#### Returns

`void`

***

### completeEnrollment()

> **completeEnrollment**(`ref`, `input`): `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

##### input

[`InvitationEnrollmentCompletion`](../type-aliases/InvitationEnrollmentCompletion.md)

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

***

### confirm()

> **confirm**(`ref`, `input`, `idempotencyKey`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

##### input

[`InvitationConfirm`](../interfaces/InvitationConfirm.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### continue()

> **continue**(`ref`, `expectedVersion`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

##### expectedVersion

`number`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### enrollment()

> **enrollment**(`ref`): `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

***

### exchange()

> **exchange**(`continuation`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### continuation

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### get()

> **get**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### mfa()

> **mfa**(`ref`, `method`, `code`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

##### method

[`MfaProofMethod`](../type-aliases/MfaProofMethod.md)

##### code

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

***

### prepareEntry()

> **prepareEntry**(`continuation`, `mode`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

Read the safe ref before exchanging. A registration proof is retained in memory before POST.

#### Parameters

##### continuation

`string`

##### mode

`"authenticated"` \| `"registration"`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### register()

> **register**(`ref`, `input`, `idempotencyKey`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

##### input

[`InvitationRegistrationInput`](../type-aliases/InvitationRegistrationInput.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

***

### registration()

> **registration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

***

### registrationContext()

> **registrationContext**(`continuation`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### continuation

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

***

### registrationHeaders()

> `protected` **registrationHeaders**(): `Record`\<`string`, `string`\>

#### Returns

`Record`\<`string`, `string`\>

***

### resendRegistration()

> **resendRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

***

### startAuthentication()

> **startAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

***

### startEnrollment()

> **startEnrollment**(`ref`, `method`): `Promise`\<[`InvitationEnrollmentBegin`](../interfaces/InvitationEnrollmentBegin.md)\>

#### Parameters

##### ref

`string`

##### method

[`InvitationEnrollmentMethod`](../type-aliases/InvitationEnrollmentMethod.md)

#### Returns

`Promise`\<[`InvitationEnrollmentBegin`](../interfaces/InvitationEnrollmentBegin.md)\>

***

### useAuthenticatedSession()

> **useAuthenticatedSession**(`ref`): `void`

Explicit authority change after normal OAuth login; never a silent fallback.

#### Parameters

##### ref

`string`

#### Returns

`void`

***

### verifyRegistration()

> **verifyRegistration**(`ref`, `code`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

##### code

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>
