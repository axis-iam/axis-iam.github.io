[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / useDevices

# Function: useDevices()

> **useDevices**(): `object`

Manage user's trusted devices.

## Returns

`object`

### devices

> **devices**: [`Device`](../interfaces/Device.md)[]

### isLoading

> **isLoading**: `boolean`

### refresh

> **refresh**: () => `Promise`\<`void`\> = `fetchDevices`

#### Returns

`Promise`\<`void`\>

### revokeDevice

> **revokeDevice**: (`deviceId`) => `Promise`\<`void`\>

#### Parameters

##### deviceId

`string`

#### Returns

`Promise`\<`void`\>

### trustDevice

> **trustDevice**: (`deviceId`) => `Promise`\<`void`\>

#### Parameters

##### deviceId

`string`

#### Returns

`Promise`\<`void`\>

## Example

```tsx
const { devices, revokeDevice, trustDevice } = useDevices()
```
