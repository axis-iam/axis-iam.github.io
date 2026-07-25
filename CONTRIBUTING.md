# Contributing

Keep public product pages under `docs/`, which Docusaurus serves at `/vertex/**`. Keep the root page focused on direct
Vertex navigation. Do not add internal coordination records, credentials, private topology, workstation paths, or
unreleased registry installation claims.

English source documents live in `docs/`. Simplified Chinese translations mirror them in
`i18n/zh-CN/docusaurus-plugin-content-docs/current/`. Preserve callable identifiers, endpoint paths, configuration
keys, and code examples when translating. UI translations live in the other `i18n/zh-CN` catalogs.

Add every stable public page to `src/routes.ts`. Add supported API families to `src/apiFamilies.ts`. The build
regenerates both JSON manifests and verifies route output, internal links, and the public-content allowlist.

SDK reference output is generated from the exact source revisions recorded in `static/source-revisions.json`. Update
that record only after validating the corresponding read-only source checkout and focused quickstart consumer.
