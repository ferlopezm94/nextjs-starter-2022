# Next.js starter

[![Set release version](https://github.com/ferlopezm94/nextjs-starter-2021/workflows/Set%20release%20version/badge.svg)](https://github.com/ferlopezm94/nextjs-starter-2021/blob/master/.github/workflows/set-release-version.yml)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

A Next.js starter that includes support for:

- [typescript](https://www.typescriptlang.org): a typed superset of JavaScript that compiles to plain JavaScript.
- [tailwindcss](https://tailwindcss.com): a utility-first, highly customizable CSS framework for rapidly building custom designs.
- [styled-components](https://styled-components.com): use the best bits of ES6 and CSS to style your apps without stress.
- [twin.macro](https://github.com/ben-rogerson/twin.macro): blends the magic of Tailwind with the flexibility of css-in-js (emotion, styled-components, stitches and goober) at build time.
- [font-awesome](https://fontawesome.com): the web's most popular icon set and toolkit to get vector icons and social logos on your website.
- [eslint](https://github.com/eslint/eslint): statically analyzes your code to quickly find problems.
- [prettier](https://github.com/prettier/prettier): an opinionated code formatter that enforces a consistent style by parsing your code.
- [stylelint](https://stylelint.io): a mighty, modern linter that helps you avoid errors and enforce conventions in your styles.
- [commitizen](https://github.com/commitizen/cz-cli): prompts you to fill out any required commit fields at commit time.
- [commitlint](https://github.com/conventional-changelog/commitlint): lints your commit messages and checks if they meet the [conventional commit format](https://www.conventionalcommits.org).
- [semantic-release](https://github.com/semantic-release/semantic-release): automates the whole package release workflow including: determining the next version number, generating the release note,s and publishing the package.

## Getting started

### Requirements

Make sure the following tools are installed in your system:

- [Node v14.X.X](https://nodejs.org/en/download/)
- [Yarn v1.22.X](https://yarnpkg.com/en/docs/install)

### Installation

Clone the GitHub repository and use `yarn` to install the dependencies:

```
$ git clone https://github.com/ferlopezm94/nextjs-starter-2021.git project-name
$ cd project-name
$ yarn install
```

## Development

### Local

To start developing simply run:

```
$ yarn dev
```

`nextjs` will compile and start your program in development mode. You can start making some changes and each one will trigger a restart to your program.

Finally, remove all things related to this repo:

- Remove CHANGELOG.md and the git repo with `rm -rf .git`
- Update README.md accordingly (e.g. project name, repo url)
- Update project info in `package.json` (name, set version to 0.0.0, change description)
- Empty `index.tsx` file
- Init git repo and create first commit `chore(repo): add basic files`

### Build

To create a production build simply run:

```
$ yarn build
```

`nextjs` will build the application for production usage.

To run the production build locally run:

```
$ yarn start
```

`nextjs` will start a production server.

## What's inside?

### Conventional commits

Commit messages are an essential part of software development because they allow us to communicate why our code changed. They're useful for your collaborators and also for your future self, so having a good convention from the beginning will facilitate development.

To enforce a good convention is followed we're using [Commitizen](https://github.com/commitizen/cz-cli) and [Commitlint](https://github.com/conventional-changelog/commitlint).

Commitizen is a command line utility that will prompt you to fill in any required fields (run with `yarn commit`) and your commit messages will be formatted according to the standards defined by project maintainers. In our case, we're using the [conventional changelog](https://github.com/conventional-changelog/conventional-changelog) standard with the following structure:

```
type(scope): subject
```

Commitlint is a linter for our commit messages and checks if they meet the [conventional commit format](https://www.conventionalcommits.org).

Commitizen and commitlint will enforce we're creating conventional commit messages and, with the help of [husky](https://github.com/typicode/husky), they will prevent us from committing changes without the proper message structure.

### Semantic release

One of the advantages of using the conventional commit format is that dovetails with [SemVer](https://semver.org), by describing the features, fixes, and breaking changes made in commit messages.

Semantic release uses the commit messages to determine the type of changes in the codebase and automatically determines the next semantic version number, updates our version property in `package.json`, generates a changelog, commits the change, and publishes the release to GitHub (both the commit and the release tag).

### ESLint and Prettier

Just as a good commit convention is important, so it is a good style guide to write consistent, reusable, and clean code. That's what ESLint will be used for, to identify and report on patterns found in our codebase that don't follow a set of established rules.

In conjunction with [lint-staged](https://github.com/okonet/lint-staged) and [husky](https://github.com/typicode/husky), we'll be able to run ESLint against staged git files in a pre-commit check (run after staging your changes and running `git commit`, and before a commit is completed).

While ESLint analyzes our code for errors, it doesn't enforce a certain code formatting style. That's where Prettier comes into place, ensuring that all outputted code conforms to a consistent style.

Prettier and ESLint complement each other, but they can also conflict when they disagree about style rules. We've configured this project so that you can use both without conflict.

To enhance the developer experience we recommend you to install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) VSCode extensions. We also added a `settings.json` that will automatically apply your linting rules (as long as they are auto-fixable) every time you save your files.

### GitHub templates and workflows

To automate the release of new versions we're using GitHub Actions to run the following workflows:

- **Set release version:** Run when changes are pushed to `main`. To enable this workflow in your repository add the `GH_TOKEN` based on a personal access token with repo scope.

To disable a given workflow simply remove the file.

## Contributions

Currently, no contributions are been accepted.
