[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / OrganizationInvitationAcceptProps

# Interface: OrganizationInvitationAcceptProps

## Properties

### appearance?

> `optional` **appearance?**: [`Appearance`](Appearance.md)

***

### continuation?

> `optional` **continuation?**: `string`

Application one-use continuation, never raw invitation token or issuer owner control.

***

### journeyRef?

> `optional` **journeyRef?**: `string`

***

### loginMode?

> `optional` **loginMode?**: `"embedded"` \| `"hosted"`

Hosted runs in a bounded popup so this page retains the invitation in memory.

***

### onAccepted?

> `optional` **onAccepted?**: (`journey`) => `void` \| `Promise`\<`void`\>

#### Parameters

##### journey

[`InvitationJourney`](InvitationJourney.md)

#### Returns

`void` \| `Promise`\<`void`\>

***

### renderLogin?

> `optional` **renderLogin?**: () => `ReactNode`

Dialog/Custom/Headless hosts retain the entry in memory while their login completes.

#### Returns

`ReactNode`
