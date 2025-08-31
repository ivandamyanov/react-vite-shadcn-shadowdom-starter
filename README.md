# Shadow DOM support modifications on top of React + Vite + TypeScript Template (react-vite-ui)
- main.tsx creates a shadow root (closed mode, change to open if you need to) and includes tailwind styles using `globals.css?inline` syntax
- src/styles/globals.css includes :host selector to support ShadowDOM styling and has re-declared variables as in [this github discussion](https://github.com/tailwindlabs/tailwindcss/discussions/15556)
- ShadowRoot context wrapper for `<App` component and `useShadowRoot` hook
- DialogContent component in dialog.tsx patched to pass ShadowRoot to `DialogPortal` container prop - this also fixes the Command component and even if you don't use these shadcn components, this approach might help you fix other ones you might add later by using a portal to render the component inside the shadow DOM instead of the body as default for some use cases.
- Command component list was not scrolling (not related to shadow DOM), after reading [this discussion](https://github.com/shadcn-ui/ui/issues/542) I updated DialogPrimitive.Content in dialog.tsx to add `onWheel` and `onTouchMove` handling to fix the issue.

- THEME - to apply dark theme using the 'dark' class, I removed it from the `html` element as it is outside the Shadow DOM and you can add it to the `main` element instead
- Updated to latest npm packages using `ncu -u` command (i use this tool everywhere - `npm install -g npm-check-updates` and type `ncu` to check for changes without applying them)

- Known console error (no render issues) due to missing DialogTitle because of shadcn's known bug

# React + Vite + TypeScript Template (react-vite-ui)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Dan5py/react-vite-ui/blob/main/LICENSE)

A React + Vite template powered by shadcn/ui.

## 🎉 Features

- **React 19** - A JavaScript library for building user interfaces.
- **Vite** - A fast, opinionated frontend build tool.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS v4** - A utility-first CSS framework (`v4`).
- **Tailwind Prettier Plugin** - A Prettier plugin for formatting Tailwind CSS classes.
- **ESLint** - A pluggable linting utility for JavaScript and TypeScript.
- **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.

## ⚙️ Prerequisites

Make sure you have the following installed on your development machine:

- Node.js (version 22 or above)
- pnpm (package manager)


## 📄 License

This project is licensed under the MIT License. See the [LICENSE](https://choosealicense.com/licenses/mit/) file for details.
