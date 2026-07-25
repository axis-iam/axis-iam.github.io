[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / useStepUp

# Function: useStepUp()

> **useStepUp**(): `object`

Step-up authentication hook.
Triggers MFA challenge for sensitive operations.

## Returns

`object`

### isSteppedUp

> **isSteppedUp**: `boolean`

### stepUp

> **stepUp**: (`options?`) => `Promise`\<`void`\>

#### Parameters

##### options?

###### reason?

`string`

#### Returns

`Promise`\<`void`\>

## Example

```tsx
const { stepUp, isSteppedUp } = useStepUp()
async function handleSensitive() {
  if (!isSteppedUp) await stepUp({ reason: 'Confirm payment' })
  // proceed with sensitive action
}
```
