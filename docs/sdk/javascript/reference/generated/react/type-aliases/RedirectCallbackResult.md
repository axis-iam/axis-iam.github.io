[**Axis Vertex JavaScript SDK: react**](../README.md)

***

[Axis Vertex JavaScript SDK: react](../README.md) / RedirectCallbackResult

# Type Alias: RedirectCallbackResult

> **RedirectCallbackResult** = \{ `status`: `"session"`; `user`: [`IamUser`](../interfaces/IamUser.md); \} \| \{ `status`: `"continuation"`; `transaction`: [`AuthenticationFlow`](AuthenticationFlow.md); `view`: [`LoginView`](LoginView.md); \} \| \{ `status`: `"idle"`; \} \| \{ `status`: `"success"`; `tokens`: [`TokenSet`](../interfaces/TokenSet.md); \} \| \{ `error`: `Error`; `status`: `"error"`; \}
