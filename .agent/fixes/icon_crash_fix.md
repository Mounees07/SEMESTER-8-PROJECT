Fix Summary:
- File: frontend/src/pages/teacher/TeacherQuestionManager.jsx
- Issue: Persistent "Blank Page". Suspected crash due to deprecated/missing `HelpCircle` icon import from `lucide-react`.
- Fix: Replaced `HelpCircle` with `Shield` in both JSX and imports.
