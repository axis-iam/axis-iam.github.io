[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / SessionInvitationJourneyClient

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`authenticate`](InvitationJourneyClient.md#authenticate)

***

### authenticatedSession()

> **authenticatedSession**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`authenticatedSession`](InvitationJourneyClient.md#authenticatedsession)

***

### cancel()

> **cancel**(`ref`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`cancel`](InvitationJourneyClient.md#cancel)

***

### cancelAuthentication()

> **cancelAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`cancelAuthentication`](InvitationJourneyClient.md#cancelauthentication)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`cancelEnrollment`](InvitationJourneyClient.md#cancelenrollment)

***

### cancelRegistration()

> **cancelRegistration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`cancelRegistration`](InvitationJourneyClient.md#cancelregistration)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`completeEnrollment`](InvitationJourneyClient.md#completeenrollment)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`confirm`](InvitationJourneyClient.md#confirm)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`continue`](InvitationJourneyClient.md#continue)

***

### enrollment()

> **enrollment**(`ref`): `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`enrollment`](InvitationJourneyClient.md#enrollment)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`get`](InvitationJourneyClient.md#get)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`mfa`](InvitationJourneyClient.md#mfa)

***

### prepareEntry()

> **prepareEntry**(`continuation`, `mode`): `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

Read the safe ref before exchanging. A registration proof is retained in memory before POST.

#### Parameters

##### continuation

`string`

##### mode

`"registration"` \| `"authenticated"`

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`register`](InvitationJourneyClient.md#register)

***

### registration()

> **registration**(`ref`): `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`registration`](InvitationJourneyClient.md#registration)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`resendRegistration`](InvitationJourneyClient.md#resendregistration)

***

### startAuthentication()

> **startAuthentication**(`ref`): `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### ref

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Implementation of

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`startAuthentication`](InvitationJourneyClient.md#startauthentication)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`startEnrollment`](InvitationJourneyClient.md#startenrollment)

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

[`InvitationJourneyClient`](InvitationJourneyClient.md).[`verifyRegistration`](InvitationJourneyClient.md#verifyregistration)
