Fix Summary:
- File: backend/src/main/java/com/academic/platform/model/Question.java
- Issue: Users might face errors when "uploading" (adding) extensive questions due to database column length limits (default 255).
- Fix: Increased `questionText` and `options` column length to 2048 characters.
- Note: `App.jsx` already allows TEACHER, MENTOR, and ADMIN to access the Question Manager.
