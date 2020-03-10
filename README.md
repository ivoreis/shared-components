# Shared Components

Example monorepo project with minimal setup for shared components

Styleguide available in gh-pages. https://ivoreis.github.io/shared-components/

## Goals

- Minimal configuration
- Easy local development / testing experience
- Packages include:
  - ESNext - Unstranspiled code
  - Types - [Typescript declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
  - ESM - [ECMAScript Modules (esm)](https://nodejs.org/api/esm.html)
- Packages should run in all evergreen browsers. IE 11 excluded. If anyone consuming these packages need to provide support for IE11 or other older browsers they need to include these packages in their transpilation process
- Minimum dependencies (You can use tools like [bundlephobia](https://bundlephobia.com/) to check package size before adding to the library). No ramda. No moment :)

Example output:

```ts
  // package.json
  "esnext": "dist-src/index.js",
  "types": "dist-types/index.d.ts",
  "module": "dist-web/index.js",
```

```ts
// Publish-ready pkg folder
pkg
├── dist-src
│   └── index.js
├── dist-types
│   └── index.d.ts
├── dist-web
│   ├── index.js
│   └── index.js.map
└── package.json
```

## Todo

- [x] Add github actions
  - [x] Build alpha packages when PRs merged into Master
  - [x] Build documentation and publish packages on releases
- [x] Add snapshot testing
- [x] Add eslint
  - [x] Prettier integration
  - [x] A11y integration
- [x] Add react-axe to packages
- [x] Add react-axe to documentation

## Using

- [Docz](https://github.com/doczjs/docz)
- [Lerna](https://lerna.js.org/)
- [Conventional-commits](https://www.conventionalcommits.org/en/v1.0.0/)
- [Commitizen](http://commitizen.github.io/cz-cli/)
- [Pika](https://github.com/pikapkg/pack) ([More info](https://www.pika.dev/blog/introducing-pika-pack/))
- [Parcel (local dev)](https://parceljs.org/)
- [Theme UI (Design System)](https://theme-ui.com/)

## Commands

### Install

```ts
  npm i // install local dependencies
```

### Bootstrap

```ts
  npm run bootstrap // the same as lerna bootstrap (install all dependencies)
```

### Build

```ts
  npm run build // build all the packages (excludes documentation)
```

```ts
  npm run docz:build // build documentation
```

### Extra

```ts
  npm run nuke // removes all node_modules and force install of new packages
```

## Development

**For documentation:**

```ts
  npm i // install local dependencies
  npm run bootstrap // the same as lerna bootstrap (install all dependencies)
  npm run docz:dev // runs docz in local development
```

**For components:**

```ts
  npm i // install local dependencies
  npm run bootstrap // the same as lerna bootstrap (install all dependencies)
  cd packages/... // go to your project
  npm run dev // runs the code in localhost for quick prototyping
```

## Publishing

```ts
  npm run version // bump version of packages changed since the last release (using conventional-commits / Semver)
  npm run version:prerelease // release current changes as prerelease versions
  npm run version:graduate // graduate prerelease versioned packages to stable versions
  npm run publish -- --registry=REGISTRY_URL // publishes the packages to `REGISTRY_URL`
```
