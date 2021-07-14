# custom-eslint-config
An example repo for customizing eslint config in a custom env

## Structure
In this repo we created a new custom-env using `bit create react-env custom-env` and a simple react component using `bit create react-component ui/button`;

The `ui/button` component is configured to use the `custom-env` (see in the workspace.jsonc file).

## custom-env
The custom env is using the new API of `useEslint` (see more details in (this pr)[https://github.com/teambit/bit/pull/4575])
It's mutating the default react env eslint config, and changing the no-console rule to show error for `console.log` instead of warning

## Run this project
```
git clone https://github.com/teambit/custom-eslint-config.git
bit install
bit compile
bit lint
```

The `bit lint` will show an error in the button files, for the console.log in the `button.tsx` file.
Removing the `config.setRule('no-console', ['error']);` in the `custom-env.extension.ts` file (followed by `bit compile`) will show the `console.log` as warning in `bit lint`. 