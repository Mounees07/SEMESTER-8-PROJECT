Fix Summary:
- File: frontend/src/pages/teacher/TeacherQuestionManager.jsx
- Issue: "Manage Questions" page was blank. This indicates a React runtime crash. Likely caused by trying to split null `options` string or an invalid icon import.
- Fix: Added safety check `(q.options || '')` before splitting. Removed unused `Copy` icon import.
