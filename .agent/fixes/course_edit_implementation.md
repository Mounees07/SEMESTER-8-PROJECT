Fix Summary:
- File: backend/src/main/java/com/academic/platform/service/CourseService.java
- Issue: Missing update logic.
- Fix: Added `updateCourse` method.

- File: backend/src/main/java/com/academic/platform/controller/CourseController.java
- Issue: Missing PUT endpoint.
- Fix: Added `@PutMapping("/{id}")`.

- File: frontend/src/pages/teacher/TeacherCourseManage.jsx
- Issue: Edit button was a mock alert.
- Fix: Implemented modal form and API integration to update course details.
