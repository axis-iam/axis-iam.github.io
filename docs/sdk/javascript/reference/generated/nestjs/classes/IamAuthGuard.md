[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / IamAuthGuard

# Class: IamAuthGuard

Global guard that verifies JWT and resolves permissions.
Attaches `req.user` with payload + permissions.

## Implements

- `CanActivate`

## Constructors

### Constructor

> **new IamAuthGuard**(`verifier`, `resolver`, `reflector`): `IamAuthGuard`

#### Parameters

##### verifier

`JwtVerifier`

##### resolver

`HttpPermissionResolver`

##### reflector

`Reflector`

#### Returns

`IamAuthGuard`

## Methods

### canActivate()

> **canActivate**(`ctx`): `Promise`\<`boolean`\>

#### Parameters

##### ctx

`ExecutionContext`

#### Returns

`Promise`\<`boolean`\>

Value indicating whether or not the current request is allowed to
proceed.

#### Implementation of

`CanActivate.canActivate`
