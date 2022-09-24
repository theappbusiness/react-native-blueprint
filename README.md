![](/src/assets/imgs/logo.png)

# React Native Blueprint

## Purpose

The purpose of this project is to provide an example for common technologies, architectures, standards and practices that can be adopted for our React Native projects here at K+C.

## How to use this project

Utilise this project as you see fit. But the recommended approach would be to clone this project and use it an example reference that you can extract the parts that you need into an existing or new project.

## Whats inside?

- Linting and Formatting using **Eslint** and **Prettier**
- [**React Query**](https://tanstack.com/query/v4) for optimised API calls
- UI Test Automation using [**Maestro**](https://maestro.mobile.dev/)

## Roadmap

- Testing using Jest
- State management using Redux
- Firebase Crashlytics configuration
- CI/CD pipeline (preferably with Fastlane)
- App Center distribution

## Static Analysis and Linting

This project uses Eslint for code quality and Prettier for code formatting. This is configured via [Husky](https://www.npmjs.com/package/husky) such at for every commit, husky pre-commit hook is triggered and it checks the code based on the rules defined in package.json

<!-- ## Architecture
This project has been split into several modules, where modules have been grouped into top-level modules by type and nested modules by appropriate domain:

* `:app` - The top level app module
* `:features` - Modules that include a screen or set of screens that makeup a distinct user-flow. This also includes the UI, presentation and domain logic for the feature.
* `:repositories` - Modules that include repository classes. E.g. network api, database, storage etc.
* `:core` - Includes modules that are core to entire project.
* `:libs` - Any arbitrary libraries.
* `:test-utils` - Testing utility library modules, which include test helper classes.


Some important modules include:

* `:core:common` - A shared common parent of all modules. i.e. commonly used interfaces (that are implemented by the application) will go here, so that those interfaces are shared across all modules.
* `:feature:base` - A shared common parent of all feature modules. E.g. feature only utilities and custom widgets go here.
* `:test-utils:unit-test` - A module that includes all test helper classes for unit tests, including Robolectric. All modules (excluding core libraries) have a <b>test only dependency</b> on this. -->

## Project Maintenance

Keeping all third-party dependencies up-to-date with their latest versions.

Over time, it may be beneficial to adopt new technologies, architectures, standards or practices, that we should include this in the blueprint. These changes should be discussed by the CoP and agreed before a PR is created and merged.

## Branching Strategy

We generally follow the standard GitFlow branching strategy:

- `master` - This should mirror what's currently in production. You should never commit directly to master.

- `develop` - Code in develop should be code reviewed and unit/ui tested.

- `feat/xxxx` - Used for developing features before submitting for code review to develop.

- `fix/xxxx` - Used for bug fixes before submitting for code review.

- `chore/xxxx` - Changes that are not part of a feature or bug fix, such as bumping the build version or updating automated build settings.

- `hotfix/xxxx` - Used for developing urgent fixes, created from master rather than develop. Follows the same branch naming conventions. Tags should be applied as new versions are created at the point of being merged into master and develop.
