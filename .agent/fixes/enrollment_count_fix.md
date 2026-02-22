Fix Summary:
- File: backend/src/main/java/com/academic/platform/model/Section.java
- Issue: Enrollment count was missing or static.
- Fix: Added `enrollmentCount` field with `@Formula` annotation to dynamically calculate count from `enrollments` table.
