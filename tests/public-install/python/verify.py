from importlib import metadata
from axis_vertex import IamClient, IamConfig, PortalOpenApiClient
from axis_vertex.fastapi import require_permission

assert metadata.metadata("axis-iam-vertex")["Name"] == "axis-iam-vertex"
assert all(callable(value) for value in (IamClient, IamConfig, PortalOpenApiClient, require_permission))
