Fix Summary:
- File: frontend/src/pages/teacher/TeacherCourseManage.jsx
- Issue: Mentors were restricted from adding or managing course lessons (study materials).
- Fix:
  1. Updated role checks for the "Add Lesson" form to include `MENTOR`.
  2. Updated role checks for the Edit/Delete lesson buttons to include `MENTOR`.
