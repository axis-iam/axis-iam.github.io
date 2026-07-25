import os
from contextlib import asynccontextmanager
from fastapi import Depends, FastAPI
from axis_vertex import IamClient, IamConfig
from axis_vertex.fastapi import require_permission

iam = IamClient(IamConfig(
    endpoint=os.environ["IAM_ENDPOINT"],
    client_id=os.environ["IAM_CLIENT_ID"],
    client_secret=os.environ["IAM_CLIENT_SECRET"],
    resource_audience=os.environ["IAM_RESOURCE_AUDIENCE"],
))

@asynccontextmanager
async def lifespan(app: FastAPI):
    yield
    await iam.close()

app = FastAPI(lifespan=lifespan)

@app.get("/orders", dependencies=[Depends(require_permission(iam, "orders", "read"))])
async def list_orders() -> dict[str, list[object]]:
    return {"orders": []}
