Fix Summary:
- File: backend/src/main/java/com/academic/platform/model/Lesson.java
- Issue: "Lesson not saved" likely due to:
  1. Serialization failure of Lazy-loaded Course proxy in the response (causing 500 error).
  2. Data truncation if Content URL or Description exceeded 255 chars.
- Fix:
  1. Changed `course` relationship to `FetchType.EAGER`.
  2. Added `@Column(columnDefinition = "TEXT")` for `description`.
  3. Added `@Column(length = 2048)` for `contentUrl`.
