package main

import (
  "testing"

  vertex "github.com/axis-iam/vertex-sdk-go"
  _ "github.com/axis-iam/vertex-sdk-go/chi"
  _ "github.com/axis-iam/vertex-sdk-go/gin"
  _ "github.com/axis-iam/vertex-sdk-go/echo"
)

func TestPublicModulesCompile(t *testing.T) {
  var sdk *vertex.SDK
  if sdk != nil {
    t.Fatal("unexpected initialized SDK")
  }
}
