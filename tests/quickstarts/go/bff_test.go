package main

import (
  "context"
  "net/http"
  "github.com/axis-iam/vertex-sdk-go/websession"
)

func bffRoutes(ctx context.Context, issuer, audience, clientID, secret string, documents http.Handler) (http.Handler, func(), error) {
  store, err := websession.NewMemory(websession.MemoryOptions{})
  if err != nil { return nil, nil, err }
  service, err := websession.New(ctx, websession.Config{
    Issuer: issuer, Audience: audience, ClientID: clientID, ClientSecret: secret,
    Origin: "https://app.example.com",
    CallbackURL: "https://app.example.com/auth/callback",
    Scopes: []string{"openid", "profile"},
    ReturnTo: "/signed-in", AllowedReturnTo: []string{"/signed-in", "/signed-out"},
    Provider: store, Replicas: 1, Workers: 1,
  })
  if err != nil { store.Close(); return nil, nil, err }
  mux := http.NewServeMux()
  mux.Handle("/auth/", service.Handler())
  mux.Handle("/api/documents", service.Middleware(documents))
  return mux, func() { store.Close() }, nil
}
