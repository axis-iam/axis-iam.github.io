[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / useInvitationJourney

# Function: useInvitationJourney()

> **useInvitationJourney**(`options`): `object`

## Parameters

### options

[`UseInvitationJourneyOptions`](../interfaces/UseInvitationJourneyOptions.md)

## Returns

`object`

### authenticate

> **authenticate**: (`input`) => `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### input

[`PrimaryAuthentication`](../type-aliases/PrimaryAuthentication.md)

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

### authentication

> **authentication**: [`InvitationAuthentication`](../interfaces/InvitationAuthentication.md) \| `null`

### beginRegistration

> **beginRegistration**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### cancel

> **cancel**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### cancelAuthentication

> **cancelAuthentication**: () => `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

### cancelEnrollment

> **cancelEnrollment**: () => `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

### cancelRegistration

> **cancelRegistration**: () => `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

### canRetryPreparation

> **canRetryPreparation**: `boolean`

### canSwitchAccount

> **canSwitchAccount**: `boolean`

### challenge

> **challenge**: (`method`, `identifier`) => `Promise`\<\{ `authRef`: `string`; `expiresAt`: `string`; `nextAction`: `string`; \}\>

#### Parameters

##### method

[`PrimaryProofMethod`](../type-aliases/PrimaryProofMethod.md)

##### identifier

[`LoginIdentifier`](../type-aliases/LoginIdentifier.md)

#### Returns

`Promise`\<\{ `authRef`: `string`; `expiresAt`: `string`; `nextAction`: `string`; \}\>

### completeEnrollment

> **completeEnrollment**: (`input`) => `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Parameters

##### input

[`InvitationEnrollmentCompletion`](../type-aliases/InvitationEnrollmentCompletion.md)

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

### completeHostedLogin

> **completeHostedLogin**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### confirm

> **confirm**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### continueJourney

> **continueJourney**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### enrollment

> **enrollment**: [`InvitationEnrollment`](../interfaces/InvitationEnrollment.md) \| `null`

### entryPending

> **entryPending**: `boolean`

### error

> **error**: `Error` \| `null`

### isAuthenticated

> **isAuthenticated**: `boolean`

### isLoaded

> **isLoaded**: `boolean`

### journey

> **journey**: [`InvitationJourney`](../interfaces/InvitationJourney.md) \| `null`

### phase

> **phase**: `"idle"` \| `"error"` \| `"loading"` \| `"ready"` \| `"unknown"`

### recover

> **recover**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### recoverEnrollment

> **recoverEnrollment**: () => `Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

#### Returns

`Promise`\<[`InvitationEnrollment`](../interfaces/InvitationEnrollment.md)\>

### recoverRegistration

> **recoverRegistration**: () => `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

### register

> **register**: (`input`) => `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### input

[`InvitationRegistrationInput`](../type-aliases/InvitationRegistrationInput.md)

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

### registration

> **registration**: [`InvitationRegistration`](../interfaces/InvitationRegistration.md) \| `null`

### resendRegistration

> **resendRegistration**: () => `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

### retryPreparation

> **retryPreparation**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### startAuthentication

> **startAuthentication**: () => `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

### startEnrollment

> **startEnrollment**: (`method`) => `Promise`\<[`InvitationEnrollmentBegin`](../interfaces/InvitationEnrollmentBegin.md)\>

#### Parameters

##### method

[`InvitationEnrollmentMethod`](../type-aliases/InvitationEnrollmentMethod.md)

#### Returns

`Promise`\<[`InvitationEnrollmentBegin`](../interfaces/InvitationEnrollmentBegin.md)\>

### startHostedLogin

> **startHostedLogin**: (`locale?`) => `Promise`\<`void`\>

#### Parameters

##### locale?

`string`

#### Returns

`Promise`\<`void`\>

### switchAccount

> **switchAccount**: () => `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

### unknownAction

> **unknownAction**: `"registration"` \| `"mutation"` \| `"enrollment"` \| `null`

### useAuthenticatedSession

> **useAuthenticatedSession**: () => `Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

#### Returns

`Promise`\<[`InvitationJourney`](../interfaces/InvitationJourney.md)\>

### verifyMfa

> **verifyMfa**: (`method`, `code`) => `Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

#### Parameters

##### method

[`MfaProofMethod`](../type-aliases/MfaProofMethod.md)

##### code

`string`

#### Returns

`Promise`\<[`InvitationAuthentication`](../interfaces/InvitationAuthentication.md)\>

### verifyRegistration

> **verifyRegistration**: (`code`) => `Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>

#### Parameters

##### code

`string`

#### Returns

`Promise`\<[`InvitationRegistration`](../interfaces/InvitationRegistration.md)\>
