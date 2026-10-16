# Vite Module Federation dependent-resolution reproduction

This is a minimal public reproduction for repeated dependent-tree walks during a Vite Module Federation build under a strict pnpm layout.

## Reproduce

```sh
pnpm install --frozen-lockfile
time pnpm build
```

With `@module-federation/vite@1.23.5`, the build prints warnings for transitive packages that are not direct project dependencies before the normal `vite v8.2.2 building client environment` line. The warnings are produced while Module Federation resolves singleton dependency metadata.

The demo deliberately keeps the shared packages external to the browser bundle. Its purpose is to isolate the dependency-resolution phase from application code and browser bundling.

## Expected output shape

```text
[Module Federation] Shared package "schema-utils" is not a dependency of the project ...
[Module Federation] Shared package "ajv-formats" is not a dependency of the project ...
[Module Federation] Shared package "commander" is not a dependency of the project ...
vite v8.2.2 building client environment for production...
```

No application-specific code, configuration, or services are required.

