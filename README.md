# Project Status Application

React dashboard for tracking project statuses.

## Major packages used

- React
- Redux/Redux Toolkit
- Storybook
- Tailwind

## Folder Structure

General folder structure for a component should look something like this:

```
/componentName
  /hooks
    useComponentNameState
    useComponentNameDispatch
  componentName.stories.tsx
  componentName.tsx
  types.ts
  utils
```

This keeps folders clean and consistent across the app, while colocating most or all component logic. Utilities that can be shared between components should be in a top-level util folder.

Info on the `/hooks` usage is in [the redux section](#Redux-Usage)

## Style Guide

### Import order

Import order should be as follows:

- Vendors
- Absolute
- Relative
- types
- css

## Redux Usage

Abstract React components from redux logic. Do this by creating react hooks that handle all of the redux-specific work, i.e. one hook that handles state and one that handles dispatch.

Components shouldn't care about the internal workings of state management, or even what state management library is being used. You should be able to swap out redux for another library and not have to change any code in the component itself - just the state provider for that component.
