[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / providerAuthorization

# Function: providerAuthorization()

> **providerAuthorization**(`providerId`, `proof?`): \{ `providerId`: `string`; `registrationAccessCode?`: `undefined`; `registrationGrantToken`: `string`; \} \| \{ `providerId`: `string`; `registrationAccessCode`: `string`; `registrationGrantToken?`: `undefined`; \} \| \{ `providerId`: `string`; `registrationAccessCode?`: `undefined`; `registrationGrantToken?`: `undefined`; \}

Exact strict authorize DTO. Proofs gate registration; they never authenticate.

## Parameters

### providerId

`string`

### proof?

[`ProviderRegistrationProof`](../type-aliases/ProviderRegistrationProof.md)

## Returns

\{ `providerId`: `string`; `registrationAccessCode?`: `undefined`; `registrationGrantToken`: `string`; \} \| \{ `providerId`: `string`; `registrationAccessCode`: `string`; `registrationGrantToken?`: `undefined`; \} \| \{ `providerId`: `string`; `registrationAccessCode?`: `undefined`; `registrationGrantToken?`: `undefined`; \}
