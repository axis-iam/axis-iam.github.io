[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / PermissionManifestStartupOptions

# Interface: PermissionManifestStartupOptions

## Properties

### failurePolicy?

> `optional` **failurePolicy?**: [`PermissionManifestFailurePolicy`](../type-aliases/PermissionManifestFailurePolicy.md)

***

### idempotencyKey?

> `optional` **idempotencyKey?**: `string`

***

### mode?

> `optional` **mode?**: [`PermissionManifestStartupMode`](../type-aliases/PermissionManifestStartupMode.md)

***

### onContinueError?

> `optional` **onContinueError?**: (`event`) => `void`

#### Parameters

##### event

[`PermissionManifestContinueEvent`](PermissionManifestContinueEvent.md)

#### Returns

`void`

***

### signal?

> `optional` **signal?**: `AbortSignal`
