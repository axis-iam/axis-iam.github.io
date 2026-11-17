[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [index](../README.md) / SessionInvitationJourneyClient

# Class: SessionInvitationJourneyClient

Safe-view consumer of a finite customer BFF. The browser never sees its upstream context.

## Implements

- [`InvitationJourneyApi`](../type-aliases/InvitationJourneyApi.md)

## Constructors

### Constructor

> **new SessionInvitationJourneyClient**(`send`): `SessionInvitationJourneyClient`

#### Parameters

##### send

(`request`) => `Promise`\<`unknown`\>

#### Returns

`SessionInvitationJourneyClient`

## Methods

### authenticate()

> **authenticate**(`ref`, `body`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

##### body

[`PrimaryAuthentication`](../type-aliases/PrimaryAuthentication.md)

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Implementation of

`InvitationJourneyApi.authenticate`

***

### authenticatedSession()

> **authenticatedSession**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

`InvitationJourneyApi.authenticatedSession`

***

### cancel()

> **cancel**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

`InvitationJourneyApi.cancel`

***

### cancelAuthentication()

> **cancelAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Implementation of

`InvitationJourneyApi.cancelAuthentication`

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

#### Implementation of

`InvitationJourneyApi.cancelEnrollment`

***

### cancelRegistration()

> **cancelRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Implementation of

`InvitationJourneyApi.cancelRegistration`

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

#### Implementation of

`InvitationJourneyApi.challenge`

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

#### Implementation of

`InvitationJourneyApi.completeEnrollment`

***

### confirm()

> **confirm**(`ref`, `body`, `idempotencyKey`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

##### body

[`InvitationConfirm`](../interfaces/InvitationConfirm.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

`InvitationJourneyApi.confirm`

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

#### Implementation of

`InvitationJourneyApi.continue`

***

### enrollment()

> **enrollment**(`ref`): `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Implementation of

`InvitationJourneyApi.enrollment`

***

### exchange()

> **exchange**(`continuation`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### continuation

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`exchange`](InvitationJourneyClient.md#exchange)

***

### get()

> **get**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

`InvitationJourneyApi.get`

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

#### Implementation of

`InvitationJourneyApi.mfa`

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

#### Implementation of

`InvitationJourneyApi.prepareEntry`

***

### register()

> **register**(`ref`, `body`, `idempotencyKey`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

##### body

[`InvitationRegistrationInput`](../type-aliases/InvitationRegistrationInput.md)

##### idempotencyKey

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Implementation of

`InvitationJourneyApi.register`

***

### registration()

> **registration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Implementation of

`InvitationJourneyApi.registration`

***

### registrationContext()

> **registrationContext**(`continuation`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### continuation

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`registrationContext`](InvitationJourneyClient.md#registrationcontext)

***

### resendRegistration()

> **resendRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Implementation of

`InvitationJourneyApi.resendRegistration`

***

### startAuthentication()

> **startAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Implementation of

`InvitationJourneyApi.startAuthentication`

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

#### Implementation of

`InvitationJourneyApi.startEnrollment`

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

#### Implementation of

`InvitationJourneyApi.verifyRegistration`
