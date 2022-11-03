![](/src/assets/imgs/logo.png)

# React Native Blueprint

## Purpose

The purpose of this project is to provide an example for common technologies, architectures, standards and practices that can be adopted for our React Native projects here at K+C.

## How to use this project

Utilise this project as you see fit. But the recommended approach would be to clone this project and use it an example reference that you can extract the parts that you need into an existing or new project.

## Whats inside?

- Linting and Formatting using **Eslint** and **Prettier**
- [**React Query**](https://tanstack.com/query/v4) for optimised API calls
- State Management via [**Zustand**](https://github.com/pmndrs/zustand)
- Unit Tests using [**Jest**](https://jestjs.io/docs/tutorial-react-native)
- Integration Tests using [**React Native Testing Library**](https://testing-library.com/docs/react-native-testing-library/intro/)
- E2E Tests using [**Detox**](https://wix.github.io/Detox/)
- UI Test Automation using [**Maestro**](https://maestro.mobile.dev/)

## Roadmap

- Testing using Jest
- State management using Zustand
- Firebase Crashlytics configuration
- CI/CD pipeline (preferably with Fastlane)
- App Center distribution

## Static Analysis and Linting

This project uses Eslint for code quality and Prettier for code formatting. This is configured via [Husky](https://www.npmjs.com/package/husky) such at for every commit, husky pre-commit hook is triggered and it checks the code based on the rules defined in package.json

## Architecture

### Inspiration

[How To Structure a React Native App For Scale](https://medium.com/the-andela-way/how-to-structure-a-react-native-app-for-scale-a29194cd33fc)

### Summary

This project has been split into several modules as follows:

- `src/` - The top level app module
- `__tests__/` - Includes UI, Integration and End-to-End tests. Unit tests can be found in each component's folder
- `api/` - Contains logic related to external API communications
- `assets/` - Contains images, fonts and other static files
- `components/` - Shared components used across different screens live here along with their unit tests
- `screens/` - Modules that include a screen or set of screens that makeup a distinct user-flow and their respective styles
- `store/` - This module handles the application state management using [Zustand](https://github.com/pmndrs/zustand)
- `styles/` - This module holds the application-level styles
- `utils/` - This module holds the utility functions and constants

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
