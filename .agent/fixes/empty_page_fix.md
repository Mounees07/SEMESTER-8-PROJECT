Fix Summary:
- File: frontend/src/App.jsx, frontend/src/pages/teacher/TeacherQuestionManager.jsx
- Issue: "Manage Questions" page was empty/blank. Likely due to strict Role Based Access Control (RBAC) redirecting ADMINs, or potential render error with empty data.
- Fix: Added `ADMIN` to allowed roles for quiz routes in `App.jsx`. Added fallback check for `quizList` in `TeacherQuestionManager.jsx`.
