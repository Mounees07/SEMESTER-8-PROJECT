Fix Summary:
- File: backend/src/main/java/com/academic/platform/service/CourseService.java
- Issue: Missing `deleteLesson` Service method.
- Fix: Implemented method to delete lesson by ID.

- File: backend/src/main/java/com/academic/platform/controller/CourseController.java
- Issue: Missing DELETE endpoint.
- Fix: Added `@DeleteMapping("/lessons/{lessonId}")`.

- File: frontend/src/pages/teacher/TeacherCourseManage.jsx
- Issue: Delete button only updated local state.
- Fix: Added `api.delete()` call to persist the deletion.
