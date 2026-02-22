Fix Summary:
- File: frontend/src/components/DashboardLayout.jsx
- Issue: "Manage Questions" page was persistently blank despite component-level fixes.
- Root Cause: `DashboardLayout` only rendered `<Outlet />`, ignoring `children`. The route was structured as `<DashboardLayout><Page /></DashboardLayout>`, so the Page was never rendered.
- Fix: Updated `DashboardLayout` to render `{children || <Outlet />}`.
- Verification: Debug mode confirmed component was not rendering. Fix enables it.
