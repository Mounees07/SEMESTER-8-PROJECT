Fix Summary:
- File: frontend/src/pages/teacher/TeacherCourseCatalog.jsx
- Issue: Blank page for Mentors due to undefined role check and potential crashes on missing course data.
- Fix:
  1. Updated `useAuth` destructuring to include `userData`.
  2. Changed role check to `userData?.role` to correctly identify Mentors.
  3. Added `if (!section) return null;` inside the course map loop to filter invalid data.
  4. Added optional chaining (`?.`) to `section.course` accesses (e.g., `section.course?.name`) to prevent runtime crashes.
