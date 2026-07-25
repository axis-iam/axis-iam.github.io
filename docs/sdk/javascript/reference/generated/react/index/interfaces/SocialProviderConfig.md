[**Axis Vertex JavaScript SDK: react**](../../README.md)

***

[Axis Vertex JavaScript SDK: react](../../README.md) / [index](../README.md) / SocialProviderConfig

# Interface: SocialProviderConfig

Social identity provider configuration

## Properties

### ~~clientId?~~

> `optional` **clientId?**: `string`

#### Deprecated

Browser embedded login never uses provider client IDs.

***

### displayName?

> `optional` **displayName?**: `string`

***

### ~~provider~~

> **provider**: `string`

#### Deprecated

Embedded provider buttons are discovered from IAM via
GET /api/v1/apps/&#123;clientId&#125;/identity-providers. This field is now only
used as a legacy display override for matching backend-enabled providers.
