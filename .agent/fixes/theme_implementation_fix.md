Fix Summary:
- File: frontend/src/index.css
- Issue: Styles were hardcoded to dark mode.
- Fix: Refactored to use CSS variables scoped to `:root` (default dark) and `[data-theme='light']`.

- File: frontend/src/context/ThemeContext.jsx
- Issue: No logic to manage theme state.
- Fix: Created context to toggle and persist theme preference.

- File: frontend/src/App.jsx
- Issue: ThemeContext not provided.
- Fix: Wrapped app in `ThemeProvider`.

- File: frontend/src/components/Sidebar.jsx
- Issue: No UI to switch themes.
- Fix: Added toggle button with Sun/Moon icons.
