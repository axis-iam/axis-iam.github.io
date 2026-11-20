[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / mountBff

# Function: mountBff()

> **mountBff**(`app`, `config`): `BffHandlers`

Nest's Express HTTP adapter only. Mount before init/listen: auth routes finish
in middleware before Bearer guards. Business routes retain their own guards.

## Parameters

### app

`INestApplication`

### config

`BffExpressConfig`

## Returns

`BffHandlers`
