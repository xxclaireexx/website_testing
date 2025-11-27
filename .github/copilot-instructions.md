## Purpose
This file gives concise, project-specific guidance for AI coding agents working in this repository. Focus on the two Create-React-App projects and the minimal conventions shown in the source.

**Project Overview**
- **Primary CRA app:** `test-website` (TypeScript). It is a standalone Create-React-App with its own `package.json` and `src/` folder.
- **Entrypoint:** `test-website/src/index.tsx` creates the React root.
- **UI components:** Small, locally-scoped components live in `src/` (examples: `home.tsx`, `background.tsx`, `questionform.tsx`). Styling is via `App.css` + some inline styles.

**How to run & build (explicit)**
- Install and run either app from its folder. Use PowerShell on developer machines (commands joined with `;`).

```powershell
cd .\test-website; npm install; npm start
```

- Build for production:

```powershell
cd .\test-website; npm run build
```

- Tests use CRA's test runner:

```powershell
cd .\test-website; npm test
```

Note: the repository root `package.json` contains a placeholder `test` script (exit 1). Run scripts inside each project folder.

**Important patterns & examples (do not invent conventions)**
- `test-website/src/background.tsx` exports layout primitives used by pages: `BackgroundSectionTitle`, `BackgroundSectionBody`, `BackgroundSectionDescription`, `BackgroundSectionPlaceholder`. Use these for consistent section wrappers.
- `test-website/src/home.tsx` composes the sections and uses inline `backgroundImage` style for hero background — prefer editing this file for hero changes.
- CSS lives in `src/App.css` and `src/index.css`; components often use class names like `title`, `subtitle`, `text-body` and utility inline styles.

**TypeScript vs JavaScript**
- `test-website` is TypeScript-based (has `tsconfig.json`, `react-app-env.d.ts`) and includes `@types/*` dependencies. Keep type correctness when editing here.
- Historically there was also a JavaScript CRA app; the active project in this repository is `test-website` (TypeScript). Keep TypeScript types intact when editing `test-website`.

**Known issues to be cautious about (discovered by static scan)**
- `test-website/src/App.tsx` contains invalid code that prevents the app from compiling as-is. Example problems:
  - `return (Home)` instead of returning JSX (`<Home />`).
  - `export default App()` is invalid; should be `export default App`.

Example minimal fix (apply only after tests / CI validation):

```tsx
import Home from './home';

function App() {
  return <Home />;
}

export default App;
```

**Integration & external deps**
- Projects use `react-scripts` (CRA v5). No backend/API client code was found in `src/` — these are mainly static frontends.
- Root `package.json` lists `framer-motion` but subprojects do not reference it; verify if a central dependency was intended before adding imports.

**Where to look when changing behavior**
- UI/layout changes: `**/src/*.{js,jsx,ts,tsx}`, specifically: `test-website/src/home.tsx`, `test-website/src/background.tsx`, `test-website/src/questionform.tsx`.
- App entry and bootstrapping: `test-website/src/index.tsx`.
- Static HTML template: `test-website/public/index.html`.

**Search helpers for agents**
- Find components: `git grep -n "export default" -- **/src` or glob `**/src/**/*.{js,jsx,ts,tsx}`.
- Find package scripts: `**/package.json`.

**Editing rules for AI agents (short)**
- Prefer small, local edits and run the app locally in the matching project folder before larger refactors.
- For `test-website`, keep TypeScript types intact and run `npm test` after edits.
- When encountering build errors, check `test-website/src/App.tsx` first (known broken file).
- Do not modify root-level `node_modules` or assume a monorepo toolchain; projects are standard CRA apps with separate `package.json` files.

If any section is unclear or you'd like me to add a CI snippet, lint rules, or a short troubleshooting checklist (for the broken `App.tsx`), tell me which one to expand.
