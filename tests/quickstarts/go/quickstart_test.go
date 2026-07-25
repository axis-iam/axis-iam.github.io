package main

import (
  "net/http"
  vertex "github.com/axis-iam/vertex-sdk-go"
  "github.com/axis-iam/vertex-sdk-go/authz"
)

func routes(iam *vertex.SDK) http.Handler {
  mux := http.NewServeMux()
  mux.Handle("GET /orders", iam.RequirePerm(authz.PermissionKey{Resource: "orders", Action: "read"})(http.HandlerFunc(
    func(w http.ResponseWriter, r *http.Request) { w.WriteHeader(http.StatusNoContent) },
  )))
  return iam.Authenticate()(mux)
}
