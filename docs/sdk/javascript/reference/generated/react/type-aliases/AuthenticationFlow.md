[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AuthenticationFlow

# Type Alias: AuthenticationFlow

> **AuthenticationFlow** = `Pick`\<[`AuthenticationTransaction`](../classes/AuthenticationTransaction.md), `"invalidate"` \| `"persistForNavigation"`\> & `object`

## Type Declaration

### authenticate()

> **authenticate**(`input`): `Promise`\<[`LoginView`](LoginView.md)\>

#### Parameters

##### input

[`PrimaryAuthentication`](PrimaryAuthentication.md)

#### Returns

`Promise`\<[`LoginView`](LoginView.md)\>

### authenticateMagicLink()

> **authenticateMagicLink**(`url`, `identifier`): `Promise`\<[`LoginView`](LoginView.md)\>

#### Parameters

##### url

`string`

##### identifier

[`LoginIdentifier`](LoginIdentifier.md)

#### Returns

`Promise`\<[`LoginView`](LoginView.md)\>

### authorizeProvider()

> **authorizeProvider**(`providerId`, `proof?`): `Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; \}\>

#### Parameters

##### providerId

`string`

##### proof?

[`ProviderRegistrationProof`](ProviderRegistrationProof.md)

#### Returns

`Promise`\<\{ `authorizationUrl`: `string`; `expiresAt`: `string`; \}\>

### cancel()

> **cancel**(): `Promise`\<[`LoginView`](LoginView.md)\>

#### Returns

`Promise`\<[`LoginView`](LoginView.md)\>

### challenge()

> **challenge**(`method`, `identifier`): `Promise`\<\{ `challengeExpiresAt`: `string`; `cooldownSeconds`: `number`; `expiresAt`: `string`; \}\>

#### Parameters

##### method

[`PrimaryProofMethod`](PrimaryProofMethod.md)

##### identifier

[`LoginIdentifier`](LoginIdentifier.md)

#### Returns

`Promise`\<\{ `challengeExpiresAt`: `string`; `cooldownSeconds`: `number`; `expiresAt`: `string`; \}\>

### get()

> **get**(): `Promise`\<[`LoginView`](LoginView.md)\>

#### Returns

`Promise`\<[`LoginView`](LoginView.md)\>

### getSnapshot()

> **getSnapshot**(): [`LoginView`](LoginView.md)

#### Returns

[`LoginView`](LoginView.md)

### verifyMfa()

> **verifyMfa**(`method`, `code`): `Promise`\<[`LoginView`](LoginView.md)\>

#### Parameters

##### method

[`MfaProofMethod`](MfaProofMethod.md)

##### code

`string`

#### Returns

`Promise`\<[`LoginView`](LoginView.md)\>
