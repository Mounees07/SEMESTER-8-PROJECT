Fix Summary:
- File: frontend/src/components/Sidebar.jsx
- Issue: Inconsistent naming ("My Classes" vs "My Courses") and Teachers lacking Mentor tool access.
- Fix:
  1. Renamed "My Classes" -> "My Courses" in Teacher links.
  2. Added "My Mentees" link to Teacher navigation to support dual-role users.

- File: frontend/src/pages/teacher/TeacherCourseCatalog.jsx
- Issue: Mentor-specific empty state message implied Mentors *cannot* have courses.
- Fix:
  1. Removed the conditional check.
  2. Consolidated to a single, generic "No courses assigned" message for all roles.
