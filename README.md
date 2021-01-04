# Patreon-TS Client

Please note that @0.4.1 is the newest version published on NPM,
it isn't complete yet though so if you need extended features
please make a PR.

[![code style: eslint](https://img.shields.io/badge/code_style-eslint-8080F2.svg?style=flat-square)](https://github.com/eslint/eslint)

- [Patreon-TS Client](#patreon-ts-client)
  - [Install](#install)
  - [Package](#package)
    - [Publishing](#publishing)
  - [Examples](#examples)
  - [Debugging](#debugging)
  - [Linting](#linting)

## Install

```bash
npm install patreon-ts --save
# @types are included.
```

## Package

> [npm package](https://www.npmjs.com/package/patreon-ts)

### Publishing

Where `<>` is optional or pick one.

- `npm version <newversion|patch>`
- `npm publish <--tag beta>`

## Examples

See the examples folder for in-depth example of how to use this library.

See `.vscode/launch.json` for breakdown of different debug profiles.

## Debugging

Launching "Debug Example" will use <examples/redirect-flow/src/index.ts> as the entrypoint.

Launching "Debug Library" will use <src/patreon.ts> as the entrypoint.

Launching "Debug Current Library File" will debug the currently focused file.

## Linting

The linting profile is set to *error* for the most part,
so make sure you fix the issues!
