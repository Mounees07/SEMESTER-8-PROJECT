Fix Summary:
- File: frontend/src/pages/teacher/TeacherQuestionManager.jsx
- Issue: CSV-based option storage was fragile (broke on commas in text).
- Fix: Updated to use JSON serialization for options, allowing robust handling of special characters. Added backward compatibility for existing CSV data.
