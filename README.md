# Axis Vertex public documentation

This repository builds the public Axis Vertex documentation at `https://axis-iam.github.io/`. English is the default
locale and Simplified Chinese is available under `/zh-CN/`. Product documentation lives under `/vertex/**`; the root
page is the Vertex documentation entry point.

## Toolchain

- Node.js 24
- pnpm 11.9.0
- Docusaurus 3.10.2 with TypeScript and MDX

Run `corepack enable`, then install and preview:

```bash
pnpm install --frozen-lockfile
pnpm start
```

Before review, run the focused documentation checks:

```bash
pnpm validate:public
pnpm references:generate
pnpm quickstarts:check
pnpm build
pnpm links:external
pnpm test:e2e
```

`references:generate` and `quickstarts:check` read sibling Axis Vertex SDK source checkouts. They do not publish or
modify SDK packages. Generated references are checked against public package exports.

## Release model

The `main` workflow builds with GitHub's official Pages actions. Deployment requires repository Pages settings and an
authorized workflow run; a local build does not enable Pages. Before beta, Docusaurus uses only the current version and
does not create a version snapshot.

To roll back a documentation release, redeploy a previously reviewed repository revision. If a routing contract was
changed, restore its matching `static/route-manifest.json` and verify direct refreshes before deployment. Never edit
generated Pages output in place.
