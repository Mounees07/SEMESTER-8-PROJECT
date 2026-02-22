Fix Summary:
- File: backend/src/main/java/com/academic/platform/model/Question.java, backend/src/main/java/com/academic/platform/model/Quiz.java
- Issue: "Create New Quiz" failing. Likely due to JSON Infinite Recursion (Quiz->Questions->Quiz) or Lazy Loading Serialization Error (Quiz->Course Proxy).
- Fix: Added `@JsonIgnore` to `Question.quiz` and `@JsonIgnoreProperties` to `Quiz.course`.
