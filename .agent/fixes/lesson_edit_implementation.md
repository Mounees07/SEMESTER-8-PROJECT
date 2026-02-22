Fix Summary:
- File: backend/src/main/java/com/academic/platform/service/CourseService.java
- Issue: Missing logic to update lesson details.
- Fix: Added `updateLesson` method.

- File: backend/src/main/java/com/academic/platform/controller/CourseController.java
- Issue: Missing PUT point for lessons.
- Fix: Added `@PutMapping("/lessons/{lessonId}")`.

- File: frontend/src/pages/teacher/TeacherCourseManage.jsx
- Issue: Lesson Edit icon was inert.
- Fix: Implemented `EditLessonModal` logic and wired it to the edit icon.
