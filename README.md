# pokemon-graphql-server

Simple GraphQL stack for connecting to the pokemon REST API

## Getting Started

These instructions will get you a copy of the project up and running on your local machine.

### Prerequisites

To write and test code you will need [NodeJS](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/lang/en/) installed. If your on a Mac, use [Homebrew](https://docs.brew.sh/Installation) for installation.

```
brew install node
brew install yarn
```

Will also need [TypeScript](https://www.typescriptlang.org/) installed.

```
npm install -g typescript
```

### Installing

Install project dependencies

```
yarn
```

## Tests

### Unit Tests

Unit tests use [jest](https://facebook.github.io/jest/). Tests can be run globally from the root directory by running `yarn test`

```
yarn test
```

### Coding Style Tests

Code style is enforced by using a linter ([tslint](https://palantir.github.io/tslint/)) and [Prettier](https://prettier.io/).

```
yarn lint
```

## Built With

### Languages / Core Tools

- [Typescript](http://www.typescriptlang.org/) - The primary language

### Secondary Tooling

- [jest](https://jestjs.io/) - Unit and integration testing framework
- [lerna](https://github.com/lerna/lerna) - Managing multi package repo's
- [yarn](https://yarnpkg.com/lang/en/) - Typescript package management
- [express](https://github.com/expressjs/express) - rest service framework

## Versioning

There are no particular versioning systems in use.

## Authors

![](docs/mrkiplin-icon.gif)

**Theo Jones** - [MrKiplin](https://github.com/MrKiplin)
