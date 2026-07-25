[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / RequirePermGuard

# Class: RequirePermGuard

Guard that checks the

## Require Perm

metadata against req.user.permissions.
Must run AFTER IamAuthGuard (which populates req.user).

## Implements

- `CanActivate`

## Constructors

### Constructor

> **new RequirePermGuard**(`reflector`): `RequirePermGuard`

#### Parameters

##### reflector

`Reflector`

#### Returns

`RequirePermGuard`

## Methods

### canActivate()

> **canActivate**(`ctx`): `boolean`

#### Parameters

##### ctx

`ExecutionContext`

#### Returns

`boolean`

Value indicating whether or not the current request is allowed to
proceed.

#### Implementation of

`CanActivate.canActivate`
