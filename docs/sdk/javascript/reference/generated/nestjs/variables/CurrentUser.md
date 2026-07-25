[**Axis Vertex JavaScript SDK: nestjs**](../README.md)

***

[Axis Vertex JavaScript SDK: nestjs](../README.md) / CurrentUser

# Variable: CurrentUser

> `const` **CurrentUser**: (...`dataOrPipes`) => `ParameterDecorator`

Extract the authenticated user from the request.

## Parameters

### dataOrPipes

...`unknown`[]

## Returns

`ParameterDecorator`

## Example

```ts
@Get('me')
getProfile(@CurrentUser() user: IamJwtPayload & { permissions: string[] }) {
  return { userId: user.sub }
}
```
