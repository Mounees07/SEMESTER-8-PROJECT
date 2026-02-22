Fix Summary:
- File: frontend/src/pages/teacher/TeacherCourseManage.jsx
- Issue: "My Classes" management page had incorrect role checks (hiding teacher controls) and was vulnerable to crashes on missing data.
- Fix:
  1. Updated to use `userData.role` for correct permission checks.
  2. Added safeguards for `sectionDetails.course` access.
  3. Added null checks for data fetching results.

- File: frontend/src/pages/student/StudentCourses.jsx
- Issue: "My Courses" page vulnerable to crashes if enrollment data was incomplete.
- Fix:
  1. Added `if (!enrollment.section)` guard.
  2. Added optional chaining (`?.`) and default fallbacks for all displayed course fields.
