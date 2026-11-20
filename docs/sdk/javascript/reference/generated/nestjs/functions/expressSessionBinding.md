[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / expressSessionBinding

# Function: expressSessionBinding()

> **expressSessionBinding**(`namespace?`): `BffSessionBinding`

express-session compatible bridge: only a namespaced opaque reference is saved.
Authentication data and fences remain in provider, including on resave/touch.
The native middleware owns its sole Cookie; mount it before createBff.router.

## Parameters

### namespace?

`string`

## Returns

`BffSessionBinding`
