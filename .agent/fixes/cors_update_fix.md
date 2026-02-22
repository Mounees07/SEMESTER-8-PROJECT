Fix Summary:
- File: backend/src/main/java/com/academic/platform/controller/CourseController.java
- Issue: Conflicting CORS configuration (`@CrossOrigin` vs `SecurityConfig`) caused PUT/DELETE requests to fail or be blocked by strict browsers.
- Fix: Removed `@CrossOrigin` annotation from the controller, relying on the correct global configuration in `SecurityConfig.java`.
