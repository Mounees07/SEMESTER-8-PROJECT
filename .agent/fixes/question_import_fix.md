Fix Summary:
- File: backend/src/main/java/com/academic/platform/controller/CourseController.java
- Issue: Compilation error `cannot find symbol class Question` due to missing import.
- Fix: Added `import com.academic.platform.model.Question;`.
