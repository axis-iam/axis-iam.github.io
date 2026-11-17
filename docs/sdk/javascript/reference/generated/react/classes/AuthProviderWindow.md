[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / AuthProviderWindow

# Class: AuthProviderWindow

Observe one exact WindowProxy. Broadcast messages never complete authentication.

## Constructors

### Constructor

> **new AuthProviderWindow**(`redirectUri`, `timeoutMs?`, `returnMode?`): `AuthProviderWindow`

#### Parameters

##### redirectUri

`string`

##### timeoutMs?

`number` = `600_000`

##### returnMode?

`"oauth"` \| `"server-session"`

#### Returns

`AuthProviderWindow`

## Methods

### close()

> **close**(): `void`

#### Returns

`void`

***

### start()

> **start**(`authorize`): `Promise`\<`string`\>

Open during user activation, then automatically wait for the registered return.

#### Parameters

##### authorize

() => `Promise`\<`string`\>

#### Returns

`Promise`\<`string`\>

***

### isCallbackWindow()

> `static` **isCallbackWindow**(): `boolean`

Callback popups leave consumption to their opener, including in StrictMode.

#### Returns

`boolean`
