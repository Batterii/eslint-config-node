# @batterii/eslint-config-node

This package contains a
[sharable configuration](https://eslint.org/docs/developer-guide/shareable-configs)
file for [ESLint](https://eslint.org/), to be used in Batterii Node.js projects.

All rules contained within are described in the
[ESLint rules docs](https://eslint.org/docs/rules/).


## Relationship to TypeScript Projects

The configuration in this project are used as the basis for
[@batterii/eslint-config-ts](https://www.npmjs.com/package/@batterii/eslint-config-ts).
It is kept separate so that any non-TypeScript-specific configuration can be
re-used in plain-JS Node projects-- such as other sharable configs, scaffolding
tools, and other purely internal utilities where TypeScript would be overkill.


## Scripts

This project includes a couple helpful npm scripts to use while developing:

- `npm run lint`
	- Lints the project using itself as configuration.
- `npm run lintf`
	- Runs the linter with the `--fix` option.


## Before Publishing

Since there isn't a way of reliably testing linter configuration except to
run the linter, you should consider using `npm link` to see how your changes
affect the linter before publishing them.

To do this, run the following in this project:

```sh
npm link
```

Followed by this in your consuming project:

```sh
npm link @batterii/eslint-config-node
```

This will replace the package in your consuming project with a symlink that
points at your changed files. Now you can run `npm run lint` or `npm run lintf`
in the consuming project to try out your changes.

Once you're done, you can get rid of the symlinks by running the following
in this project:

```sh
npm unlink
```

As well as this in your consuming project:

```sh
npm ci
```

This latter command will fully revert your `node_modules` folder back to exactly
what is specified in `package-lock.json`. This will this also destroy any other
linked packages, but this is actually for the best.

Ideally, you should not keep your packages linked this way for any significant
length of time, so make sure you remember to perform this cleanup when you are
done testing.


## Publishing

To publish, first run `npm version` with `major`, `minor`, or `patch` as the
first argument. When you do this, the following happens:

1. The `preversion` script runs the linter and aborts if there are any errors.
2. `npm version` updates the version field in `package.json`, creates a new
   commit for this change, and tags the commit with the version number.

Next, run `npm publish`, which causes the following:

1. The `prepublishOnly` script pushes the current branch and all tags.
2. `npm publish` publishes the new version to the registry.

Note that `npm publish` has been completed, this process *cannot be undone*, so
make sure you know what you're doing before running it.


### Concerning Version Numbers

Because of the nature of linter rules, almost every change to this project
could conceivably be considered a "breaking change" by producing linter
errors in other projects where there were none before. That being said, the
linter output is purely the concern of developers, not users, so there is no
need to keep strictly to semver conventions.

As such, most new versions of this package should only increment the patch
version using `npm version patch`. Minor versions are effectively meaningless
here and should not be used, while major versions should be reserved for two
situations only:

- A new major version of ESLint itself is released that breaks some of these
  rules, requiring backwards-incompatible changes to this project.

- Linter rule changes that are likely to produce a large amount of linter errors
  in existing code that must be fixed manually (without the `--fix` option).

In either case, a major version is appropriate so that consuming projects can
hold off on updating until they are ready.
