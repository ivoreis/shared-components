# Shared Components

Example monorepo project with minimal setup for shared components

## Goals

- Minimal configuration
- Easy local development / testing experience
- Packages include:
  - [Typescript declaration files](https://www.typescriptlang.org/docs/handbook/declaration-files/introduction.html)
  - [ECMAScript Modules (esm)](https://nodejs.org/api/esm.html)
  - Browser compatible bundle
- Packages should run in all evergreen browsers. IE 11 excluded. If anyone consuming these packages need to provide support for IE11 or other older browsers they need to include these packages in their transpilation process

## Using

- [Docz](https://github.com/doczjs/docz)
- [Lerna](https://lerna.js.org/)
- [Pika](https://github.com/pikapkg/pack) and [Article](https://www.pika.dev/blog/introducing-pika-pack/)
- [Parcel](https://parceljs.org/)

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

For documentation:

```ts
  npm i // install local dependencies
  npm run bootstrap // the same as lerna bootstrap (install all dependencies)
  npm run docz:dev // runs docz in local development
```

For components:

```ts
  npm i // install local dependencies
  npm run bootstrap // the same as lerna bootstrap (install all dependencies)
  cd packages/... // go to your project
  npm run dev // runs the code in localhost for quick prototyping
```
