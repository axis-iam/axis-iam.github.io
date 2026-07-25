package publicconsumer

import (
  "testing"

  vertex "github.com/axis-iam/vertex-sdk-go"
  _ "github.com/axis-iam/vertex-sdk-go/chi"
)

func TestPublicModulesCompile(t *testing.T) {
  var sdk *vertex.SDK
  if sdk != nil {
    t.Fatal("unexpected initialized SDK")
  }
}
