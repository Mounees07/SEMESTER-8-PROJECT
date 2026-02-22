Fix Summary:
- File: frontend/src/pages/teacher/TeacherCourseManage.jsx, frontend/src/pages/teacher/TeacherQuestionManager.jsx, frontend/src/App.jsx
- Issue: User requested managing questions in a separate page, not a modal.
- Fix: Extracted modal logic into `TeacherQuestionManager.jsx`, added a new route in `App.jsx`, and updated the navigation button in `TeacherCourseManage.jsx`.
