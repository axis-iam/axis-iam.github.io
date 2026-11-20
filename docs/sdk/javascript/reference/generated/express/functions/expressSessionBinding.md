[**Axis Vertex JavaScript SDK: express**](../README.md)

***

[Axis Vertex JavaScript SDK: express](../README.md) / expressSessionBinding

# Function: expressSessionBinding()

> **expressSessionBinding**(`namespace?`): [`BffSessionBinding`](../interfaces/BffSessionBinding.md)

express-session compatible bridge: only a namespaced opaque reference is saved.
Authentication data and fences remain in provider, including on resave/touch.
The native middleware owns its sole Cookie; mount it before createBff.router.

## Parameters

### namespace?

`string` = `'axisVertexBff'`

## Returns

[`BffSessionBinding`](../interfaces/BffSessionBinding.md)
