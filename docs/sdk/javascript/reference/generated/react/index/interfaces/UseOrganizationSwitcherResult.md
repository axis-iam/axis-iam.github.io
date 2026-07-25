[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / UseOrganizationSwitcherResult

# Interface: UseOrganizationSwitcherResult

## Extends

- `ReturnType`\<*typeof* [`useAccountOrganizations`](../functions/useAccountOrganizations.md)\>

## Properties

### currentOrganization

> **currentOrganization**: [`AccountOrganization`](AccountOrganization.md) \| `null`

#### Inherited from

`ReturnType.currentOrganization`

***

### error

> **error**: `Error` \| `null`

#### Inherited from

`ReturnType.error`

***

### isLoading

> **isLoading**: `boolean`

#### Inherited from

`ReturnType.isLoading`

***

### isSwitching

> **isSwitching**: `boolean`

***

### organizations

> **organizations**: [`AccountOrganization`](AccountOrganization.md)[]

#### Inherited from

`ReturnType.organizations`

***

### refetch

> **refetch**: () => `Promise`\<[`AccountOrganization`](AccountOrganization.md)[]\>

#### Returns

`Promise`\<[`AccountOrganization`](AccountOrganization.md)[]\>

#### Inherited from

`ReturnType.refetch`

***

### switchOrganization

> **switchOrganization**: (`organizationId`) => `Promise`\<[`OrganizationSwitchResponse`](OrganizationSwitchResponse.md)\>

#### Parameters

##### organizationId

`string`

#### Returns

`Promise`\<[`OrganizationSwitchResponse`](OrganizationSwitchResponse.md)\>

***

### switchResponse

> **switchResponse**: [`OrganizationSwitchResponse`](OrganizationSwitchResponse.md) \| `null`
