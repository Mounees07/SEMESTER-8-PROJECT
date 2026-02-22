Fix Summary:
- File: backend/src/main/java/com/academic/platform/service/CourseService.java, backend/src/main/java/com/academic/platform/controller/CourseController.java, frontend/src/pages/teacher/TeacherCourseManage.jsx
- Issue: Teachers could not add questions ("Manage Questions" was a placeholder).
- Fix: Created `QuestionRepository`, added backup methods to `CourseService` and endpoints to `CourseController`. Implemented a full 'Question Manager' UI in `TeacherCourseManage.jsx` with Quiz creation and Question CRUD capabilities.
