Fix Summary:
- File: frontend/src/pages/teacher/TeacherQuestionManager.jsx
- Issue: "Manage Questions" page "Still blank". Possible infinite loading state if URL parameter `sectionId` is missing/invalid.
- Fix: Updated `useEffect` to explicitly set `loading(false)` if `sectionId` is not present, preventing the hang.
