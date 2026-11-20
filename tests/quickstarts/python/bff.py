from contextlib import asynccontextmanager
from fastapi import Depends, FastAPI, Request
from axis_vertex.fastapi import require_web_session, session_router, web_session_from_request
from axis_vertex.web_session import MemorySessionStore, ServerSession, SessionConfig


def create_app(issuer: str, audience: str, client_id: str, secret: str) -> FastAPI:
    config = SessionConfig(
        issuer=issuer, resource_audience=audience,
        client_id=client_id, client_secret=secret,
        origin="https://app.example.com",
        callback_uri="https://app.example.com/auth/callback",
        scopes=("openid", "profile"),
        return_paths=("/signed-in", "/signed-out"), replicas=1,
    )
    store = MemorySessionStore()
    session = ServerSession(config, store)

    @asynccontextmanager
    async def lifespan(app: FastAPI):
        try:
            yield
        finally:
            await session.aclose()
            await store.aclose()

    app = FastAPI(lifespan=lifespan)
    app.include_router(session_router(session))

    @app.get('/api/documents', dependencies=[Depends(require_web_session(session, 'documents:read'))])
    async def documents(request: Request) -> dict[str, object]:
        view = web_session_from_request(request)
        assert view is not None
        return {'profile': view['profile']}

    return app
