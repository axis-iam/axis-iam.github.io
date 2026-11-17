[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / SignInProps

# Interface: SignInProps

## Properties

### allowSignUp?

> `optional` **allowSignUp?**: `boolean`

Show the SDK-owned signup footer when server registration policy permits it. Defaults to true.

***

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

Override appearance (merged with branding)

***

### forgotPasswordUrl?

> `optional` **forgotPasswordUrl?**: `string`

URL for the application's forgot-password page.

***

### mode?

> `optional` **mode?**: `"redirect"` \| `"embedded"`

'redirect' (default) jumps to iam-server login page; 'embedded' renders inline form

***

### onError?

> `optional` **onError?**: (`error`) => `void`

Called on error

#### Parameters

##### error

`Error`

#### Returns

`void`

***

### onForgotPassword?

> `optional` **onForgotPassword?**: () => `void`

Callback for opening forgot-password UI without requiring a router.

#### Returns

`void`

***

### onSuccess?

> `optional` **onSuccess?**: (`user`) => `void`

Called after successful embedded login

#### Parameters

##### user

[`IamUser`](IamUser.md)

#### Returns

`void`

***

### presentation?

> `optional` **presentation?**: `"standalone"` \| `"dialog"`

Compact presentation for a container that already supplies the auth dialog title and frame.

***

### providerNavigation?

> `optional` **providerNavigation?**: `"redirect"` \| `"popup"`

Popup waits automatically; the registered callback page leaves consumption to its opener.

***

### renderProviderButton?

> `optional` **renderProviderButton?**: (`props`) => `ReactNode`

Customize embedded provider buttons while reusing SDK discovery/login logic.

#### Parameters

##### props

`SignInProviderButtonRenderProps`

#### Returns

`ReactNode`
