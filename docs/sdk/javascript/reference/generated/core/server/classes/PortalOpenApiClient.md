[**Axis Vertex JavaScript SDK: core**](../../README.md)

***

[Axis Vertex JavaScript SDK: core](../../README.md) / [server](../README.md) / PortalOpenApiClient

# Class: PortalOpenApiClient

Server-side client for iam-portal `/open/v1/**`.

This client first obtains a `client_credentials` machine token from iam-server
with an explicit `portal:openapi:read` or `portal:openapi:write` scope, then
sends only `Authorization: Bearer <machine_token>` to iam-portal. It is not a
browser/React client and must not be bundled with a public SPA.

## Constructors

### Constructor

> **new PortalOpenApiClient**(`config`): `PortalOpenApiClient`

#### Parameters

##### config

[`PortalOpenApiClientConfig`](../interfaces/PortalOpenApiClientConfig.md)

#### Returns

`PortalOpenApiClient`

## Methods

### cancelOrganizationInvitation()

> **cancelOrganizationInvitation**(`organizationId`, `invitationId`): `Promise`\<`void`\>

Cancel an invitation. Portal owns terminal-state/idempotency semantics.

#### Parameters

##### organizationId

`string`

##### invitationId

`string`

#### Returns

`Promise`\<`void`\>

***

### clearTokenCache()

> **clearTokenCache**(`scope?`): `void`

#### Parameters

##### scope?

[`PortalOpenApiScope`](../type-aliases/PortalOpenApiScope.md)

#### Returns

`void`

***

### createOrganization()

> **createOrganization**(`input`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Create an Organization. The Idempotency-Key is sent only when explicitly supplied.

#### Parameters

##### input

[`CreateOrganizationInput`](../interfaces/CreateOrganizationInput.md)

##### options?

[`IdempotencyOptions`](../interfaces/IdempotencyOptions.md) = `{}`

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

***

### createOrganizationInvitation()

> **createOrganizationInvitation**(`organizationId`, `input`, `options?`): `Promise`\<[`OrganizationInvitation`](../interfaces/OrganizationInvitation.md)\>

Create an Organization invitation. No raw invitation proof is exposed by this helper.

#### Parameters

##### organizationId

`string`

##### input

[`CreateOrganizationInvitationInput`](../interfaces/CreateOrganizationInvitationInput.md)

##### options?

[`IdempotencyOptions`](../interfaces/IdempotencyOptions.md) = `{}`

#### Returns

`Promise`\<[`OrganizationInvitation`](../interfaces/OrganizationInvitation.md)\>

***

### createPermission()

> **createPermission**(`input`, `options?`): `Promise`\<[`Permission`](../interfaces/Permission.md)\>

#### Parameters

##### input

[`CreatePermissionInput`](../interfaces/CreatePermissionInput.md)

##### options?

[`AuthorizationIdempotencyOptions`](../interfaces/AuthorizationIdempotencyOptions.md) = `{}`

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)\>

***

### createRegistrationGrant()

> **createRegistrationGrant**(`input`): `Promise`\<[`CreatedRegistrationGrant`](../interfaces/CreatedRegistrationGrant.md)\>

#### Parameters

##### input

[`CreateRegistrationGrantInput`](../interfaces/CreateRegistrationGrantInput.md)

#### Returns

`Promise`\<[`CreatedRegistrationGrant`](../interfaces/CreatedRegistrationGrant.md)\>

***

### createRole()

> **createRole**(`input`, `options?`): `Promise`\<[`Role`](../interfaces/Role.md)\>

#### Parameters

##### input

[`CreateRoleInput`](../interfaces/CreateRoleInput.md)

##### options?

[`AuthorizationIdempotencyOptions`](../interfaces/AuthorizationIdempotencyOptions.md) = `{}`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

***

### createUserRole()

> **createUserRole**(`userId`, `input`, `options?`): `Promise`\<[`UserRoleAssignment`](../interfaces/UserRoleAssignment.md)\>

#### Parameters

##### userId

`string`

##### input

[`CreateUserRoleInput`](../interfaces/CreateUserRoleInput.md)

##### options?

[`AuthorizationIdempotencyOptions`](../interfaces/AuthorizationIdempotencyOptions.md) = `{}`

#### Returns

`Promise`\<[`UserRoleAssignment`](../interfaces/UserRoleAssignment.md)\>

***

### deleteOrganization()

> **deleteOrganization**(`organizationId`, `options?`): `Promise`\<`void`\>

Delete an Organization, optionally enforcing the ETag received from a prior read.

#### Parameters

##### organizationId

`string`

##### options?

[`IfMatchOptions`](../interfaces/IfMatchOptions.md) = `{}`

#### Returns

`Promise`\<`void`\>

***

### deletePermission()

> **deletePermission**(`permissionId`, `ifMatch`): `Promise`\<`void`\>

#### Parameters

##### permissionId

`string`

##### ifMatch

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteRole()

> **deleteRole**(`roleId`, `ifMatch`): `Promise`\<`void`\>

#### Parameters

##### roleId

`string`

##### ifMatch

`string`

#### Returns

`Promise`\<`void`\>

***

### deleteUserRole()

> **deleteUserRole**(`userId`, `assignmentId`, `ifMatch`): `Promise`\<`void`\>

#### Parameters

##### userId

`string`

##### assignmentId

`string`

##### ifMatch

`string`

#### Returns

`Promise`\<`void`\>

***

### getMachineToken()

> **getMachineToken**(`scope`): `Promise`\<[`PortalOpenApiMachineToken`](../interfaces/PortalOpenApiMachineToken.md)\>

#### Parameters

##### scope

[`PortalOpenApiScope`](../type-aliases/PortalOpenApiScope.md)

#### Returns

`Promise`\<[`PortalOpenApiMachineToken`](../interfaces/PortalOpenApiMachineToken.md)\>

***

### getOrganization()

> **getOrganization**(`organizationId`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Get one Organization scoped to the M2M token's Application.

#### Parameters

##### organizationId

`string`

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

***

### getOrganizationInvitation()

> **getOrganizationInvitation**(`organizationId`, `invitationId`): `Promise`\<[`OrganizationInvitation`](../interfaces/OrganizationInvitation.md)\>

#### Parameters

##### organizationId

`string`

##### invitationId

`string`

#### Returns

`Promise`\<[`OrganizationInvitation`](../interfaces/OrganizationInvitation.md)\>

***

### getOrganizationMember()

> **getOrganizationMember**(`organizationId`, `membershipId`): `Promise`\<[`OrganizationMember`](../interfaces/OrganizationMember.md)\>

#### Parameters

##### organizationId

`string`

##### membershipId

`string`

#### Returns

`Promise`\<[`OrganizationMember`](../interfaces/OrganizationMember.md)\>

***

### getPermission()

> **getPermission**(`permissionId`): `Promise`\<[`Permission`](../interfaces/Permission.md)\>

#### Parameters

##### permissionId

`string`

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)\>

***

### getRegistrationGrant()

> **getRegistrationGrant**(`grantId`): `Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

#### Parameters

##### grantId

`string`

#### Returns

`Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

***

### getRole()

> **getRole**(`roleId`): `Promise`\<[`Role`](../interfaces/Role.md)\>

#### Parameters

##### roleId

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

***

### listOrganizationInvitations()

> **listOrganizationInvitations**(`organizationId`, `options?`): `Promise`\<[`OrganizationInvitationPage`](../interfaces/OrganizationInvitationPage.md)\>

List Organization invitations, including delivery and lifecycle state.

#### Parameters

##### organizationId

`string`

##### options?

[`OrganizationInvitationListOptions`](../interfaces/OrganizationInvitationListOptions.md) = `{}`

#### Returns

`Promise`\<[`OrganizationInvitationPage`](../interfaces/OrganizationInvitationPage.md)\>

***

### listOrganizationMembers()

> **listOrganizationMembers**(`organizationId`, `options?`): `Promise`\<[`OrganizationMemberPage`](../interfaces/OrganizationMemberPage.md)\>

#### Parameters

##### organizationId

`string`

##### options?

[`OrganizationMemberListOptions`](../interfaces/OrganizationMemberListOptions.md) = `{}`

#### Returns

`Promise`\<[`OrganizationMemberPage`](../interfaces/OrganizationMemberPage.md)\>

***

### listOrganizations()

> **listOrganizations**(`options?`): `Promise`\<[`OrganizationPage`](../interfaces/OrganizationPage.md)\>

List Application-bound Organizations with optional search, paging, and sorting.

#### Parameters

##### options?

[`OrganizationListOptions`](../interfaces/OrganizationListOptions.md) = `{}`

#### Returns

`Promise`\<[`OrganizationPage`](../interfaces/OrganizationPage.md)\>

***

### listPermissions()

> **listPermissions**(`options?`): `Promise`\<[`PermissionPage`](../interfaces/PermissionPage.md)\>

#### Parameters

##### options?

[`AuthorizationPageOptions`](../interfaces/AuthorizationPageOptions.md) = `{}`

#### Returns

`Promise`\<[`PermissionPage`](../interfaces/PermissionPage.md)\>

***

### listRegistrationGrantRedemptions()

> **listRegistrationGrantRedemptions**(`grantId`, `options?`): `Promise`\<[`RegistrationGrantRedemptionPage`](../interfaces/RegistrationGrantRedemptionPage.md)\>

#### Parameters

##### grantId

`string`

##### options?

`Pick`\<[`RegistrationGrantListOptions`](../interfaces/RegistrationGrantListOptions.md), `"page"` \| `"size"`\> = `{}`

#### Returns

`Promise`\<[`RegistrationGrantRedemptionPage`](../interfaces/RegistrationGrantRedemptionPage.md)\>

***

### listRegistrationGrants()

> **listRegistrationGrants**(`options?`): `Promise`\<[`RegistrationGrantPage`](../interfaces/RegistrationGrantPage.md)\>

#### Parameters

##### options?

[`RegistrationGrantListOptions`](../interfaces/RegistrationGrantListOptions.md) = `{}`

#### Returns

`Promise`\<[`RegistrationGrantPage`](../interfaces/RegistrationGrantPage.md)\>

***

### listRolePermissions()

> **listRolePermissions**(`roleId`, `options?`): `Promise`\<[`RolePermissionBindingPage`](../interfaces/RolePermissionBindingPage.md)\>

#### Parameters

##### roleId

`string`

##### options?

[`AuthorizationPageOptions`](../interfaces/AuthorizationPageOptions.md) = `{}`

#### Returns

`Promise`\<[`RolePermissionBindingPage`](../interfaces/RolePermissionBindingPage.md)\>

***

### listRoles()

> **listRoles**(`options?`): `Promise`\<[`RolePage`](../interfaces/RolePage.md)\>

#### Parameters

##### options?

[`AuthorizationPageOptions`](../interfaces/AuthorizationPageOptions.md) = `{}`

#### Returns

`Promise`\<[`RolePage`](../interfaces/RolePage.md)\>

***

### listUserRoles()

> **listUserRoles**(`userId`, `options?`): `Promise`\<[`UserRoleAssignmentPage`](../interfaces/UserRoleAssignmentPage.md)\>

#### Parameters

##### userId

`string`

##### options?

[`AuthorizationPageOptions`](../interfaces/AuthorizationPageOptions.md) = `{}`

#### Returns

`Promise`\<[`UserRoleAssignmentPage`](../interfaces/UserRoleAssignmentPage.md)\>

***

### pauseRegistrationGrant()

> **pauseRegistrationGrant**(`grantId`): `Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

#### Parameters

##### grantId

`string`

#### Returns

`Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

***

### removeOrganizationMember()

> **removeOrganizationMember**(`organizationId`, `membershipId`): `Promise`\<`void`\>

Remove an Organization member. Last-owner conflicts remain typed Portal errors.

#### Parameters

##### organizationId

`string`

##### membershipId

`string`

#### Returns

`Promise`\<`void`\>

***

### replaceRolePermissions()

> **replaceRolePermissions**(`roleId`, `permissionIds`, `ifMatch`): `Promise`\<[`RolePermissionSet`](../interfaces/RolePermissionSet.md)\>

#### Parameters

##### roleId

`string`

##### permissionIds

`string`[]

##### ifMatch

`string`

#### Returns

`Promise`\<[`RolePermissionSet`](../interfaces/RolePermissionSet.md)\>

***

### requestJson()

> **requestJson**\<`T`\>(`method`, `path`, `body?`): `Promise`\<`T`\>

#### Type Parameters

##### T

`T`

#### Parameters

##### method

[`PortalOpenApiMethod`](../type-aliases/PortalOpenApiMethod.md)

##### path

`string`

##### body?

`unknown`

#### Returns

`Promise`\<`T`\>

***

### resendOrganizationInvitation()

> **resendOrganizationInvitation**(`organizationId`, `invitationId`): `Promise`\<[`OrganizationInvitation`](../interfaces/OrganizationInvitation.md)\>

Resend a pending invitation. A 429 exposes its Retry-After header on PortalOpenApiError.

#### Parameters

##### organizationId

`string`

##### invitationId

`string`

#### Returns

`Promise`\<[`OrganizationInvitation`](../interfaces/OrganizationInvitation.md)\>

***

### resumeRegistrationGrant()

> **resumeRegistrationGrant**(`grantId`): `Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

#### Parameters

##### grantId

`string`

#### Returns

`Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

***

### revokeRegistrationGrant()

> **revokeRegistrationGrant**(`grantId`, `reason?`): `Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

#### Parameters

##### grantId

`string`

##### reason?

`string`

#### Returns

`Promise`\<[`RegistrationGrant`](../interfaces/RegistrationGrant.md)\>

***

### updateOrganization()

> **updateOrganization**(`organizationId`, `input`, `options?`): `Promise`\<[`Organization`](../interfaces/Organization.md)\>

Patch an Organization, optionally enforcing the ETag received from a prior read.

#### Parameters

##### organizationId

`string`

##### input

[`UpdateOrganizationInput`](../interfaces/UpdateOrganizationInput.md)

##### options?

[`IfMatchOptions`](../interfaces/IfMatchOptions.md) = `{}`

#### Returns

`Promise`\<[`Organization`](../interfaces/Organization.md)\>

***

### updateOrganizationMemberRole()

> **updateOrganizationMemberRole**(`organizationId`, `membershipId`, `role`, `options?`): `Promise`\<[`OrganizationMember`](../interfaces/OrganizationMember.md)\>

Change a member's role, optionally enforcing the member version with If-Match.

#### Parameters

##### organizationId

`string`

##### membershipId

`string`

##### role

[`OrganizationMemberRole`](../type-aliases/OrganizationMemberRole.md)

##### options?

[`IfMatchOptions`](../interfaces/IfMatchOptions.md) = `{}`

#### Returns

`Promise`\<[`OrganizationMember`](../interfaces/OrganizationMember.md)\>

***

### updatePermission()

> **updatePermission**(`permissionId`, `input`, `ifMatch`): `Promise`\<[`Permission`](../interfaces/Permission.md)\>

#### Parameters

##### permissionId

`string`

##### input

[`UpdatePermissionInput`](../interfaces/UpdatePermissionInput.md)

##### ifMatch

`string`

#### Returns

`Promise`\<[`Permission`](../interfaces/Permission.md)\>

***

### updateRole()

> **updateRole**(`roleId`, `input`, `ifMatch`): `Promise`\<[`Role`](../interfaces/Role.md)\>

#### Parameters

##### roleId

`string`

##### input

[`UpdateRoleInput`](../interfaces/UpdateRoleInput.md)

##### ifMatch

`string`

#### Returns

`Promise`\<[`Role`](../interfaces/Role.md)\>

***

### updateUserRole()

> **updateUserRole**(`userId`, `assignmentId`, `input`, `ifMatch`): `Promise`\<[`UserRoleAssignment`](../interfaces/UserRoleAssignment.md)\>

#### Parameters

##### userId

`string`

##### assignmentId

`string`

##### input

[`UpdateUserRoleInput`](../interfaces/UpdateUserRoleInput.md)

##### ifMatch

`string`

#### Returns

`Promise`\<[`UserRoleAssignment`](../interfaces/UserRoleAssignment.md)\>
