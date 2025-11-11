# AGENTS.md

Detailed guidance for AI agents working with this codebase.

## Project Overview

**This repository is a template/base for new Vue projects.** It provides a pre-configured setup with modern tooling and best practices.

This is a Vue 3 template project using:
- **Vue 3** with Composition API
- **TypeScript** with strict mode
- **Vite** as build tool
- **Pinia** for state management
- **Vue Router** with file-based routing (vite-plugin-pages)
- **UnoCSS** for styling with DaisyUI preset
- **PWA** capabilities (vite-plugin-pwa)
- **pnpm** as package manager

## Common Commands

### Development
```bash
pnpm dev                 # Start dev server (opens browser automatically)
pnpm build               # Production build (sets NODE_ENV=production)
pnpm serve               # Preview production build
```

### Testing
```bash
pnpm test                # Run all tests (silent mode)
pnpm test:watch          # Run tests in watch mode
pnpm coverage            # Run tests with coverage report
```

### Linting & Type Checking
```bash
pnpm lint                # Fix all linting issues (JS/CSS)
pnpm lint:js             # Lint specific JS/TS/Vue files
pnpm lint:js:all         # Lint all JS/TS/Vue files
pnpm lint:css            # Lint specific CSS/Vue files
pnpm lint:css:all        # Lint all CSS/Vue files
pnpm tsc                 # TypeScript type checking (no emit)
```

## Architecture

### File-Based Routing
- Pages are auto-generated from `src/pages/*.vue`
- Layouts are managed by `vite-plugin-vue-layouts` from `src/layouts/`
- Routes are set up in `src/main.ts` using `setupLayouts(generatedRoutes)`
- 404 handling via `src/pages/[...all].vue`

### Auto-Imports
The project uses `unplugin-auto-import` to automatically import:
- Vue APIs (`ref`, `computed`, `watch`, etc.)
- VueUse composables (`@vueuse/core`, `@vueuse/head`)
- Utilities from `src/util/` directory

Components are auto-imported via `unplugin-vue-components` with namespace support for nested directories.

Generated type definitions: `auto-imports.d.ts` and `components.d.ts` (do not edit manually).

### State Management
- Uses Pinia for global state
- Store example: `src/store/nav.ts` manages navigation state (page titles)
- Router hook in `src/main.ts` resets nav store on route changes

### Styling
- **UnoCSS** with multiple presets: Mini, Uno, Icons, Attributify, DaisyUI, Scrollbar
- DaisyUI themes: `light` and `dark`
- Attributify mode enabled (use attributes like `flex="~ col"`)
- Custom shortcut `scrollbar-c` for consistent scrollbar styling
- Config: `uno.config.ts`
- Dark mode management in `src/dark.ts`

### Path Aliases
- `/~/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.json`)
- Example: `import { useNavStore } from "/~/store/nav"`

### Testing
- **Vitest** with jsdom environment
- Test setup in `test/setup-plugins.ts`
- Component tests use `@vue/test-utils`
- Example: `test/simple-counter.test.ts`

### Source Control
**Preferred VCS: Jujutsu (`jj`)** - While the repository has git compatibility, the preferred source control tool is `jj` (jujutsu) rather than git.

**Commit Message Format**: Uses conventional commits enforced by commitlint:
- Format: `type(scope): description`
- Common types: `feat`, `fix`, `chore`, `docs`
- Examples:
  - `fix(deps): update dependency @vueuse/core to v14 (#143)`
  - `chore(deps): update actions/checkout digest to 08eba0b`
  - `docs: add user authentication guide`

Pre-commit hook (`.husky/pre-commit`) runs:
1. `lint-staged` - lints and type-checks only staged files:
   - JS/TS/Vue files (excluding auto-imports): ESLint fix + TypeScript check
   - CSS/Vue files: Stylelint fix
2. `pnpm test` - runs all tests

### ESLint Configuration
- Uses `.eslintrc.js` (legacy config) with Vue 3 + TypeScript
- Key rules:
  - `simple-import-sort` for import ordering
  - `prettier-vue` for formatting
  - PascalCase component naming in templates
  - Padding between Vue blocks
- Parser: Uses `vue-eslint-parser` for `.vue` files with TypeScript support

### Stylelint
- Config: `.stylelintrc.json`
- Uses `stylelint-config-standard` and `stylelint-config-idiomatic-order`
- Ignores: `.stylelintignore`

### PWA Configuration
- Workbox with prompt strategy for updates
- Manifest configured in `vite.config.ts` (currently uses placeholder "TODO" values)
- Service worker registration in `src/main.ts`

## Development Workflow

1. When adding new pages, create `.vue` files in `src/pages/` - routes are auto-generated
2. For global utilities, add to `src/util/` - they'll be auto-imported
3. For new components, place in `src/components/` - they'll be auto-imported
4. State management: create stores in `src/store/` following the Pinia pattern
5. Pre-commit hooks will automatically lint and test - ensure tests pass before committing

## Notes

- Package manager is strictly **pnpm** (see `packageManager` field)
- TypeScript strict mode is enabled with `noUnusedLocals`
- Prettier config: `singleAttributePerLine: true`
- Commitlint uses conventional commits format
