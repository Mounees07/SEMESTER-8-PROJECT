Fix Summary:
- File: backend/src/main/java/com/academic/platform/model/Course.java
- Issue: `thumbnailUrl` column length was default (255), causing truncation errors for long URLs.
- Fix: Increased `thumbnailUrl` length to 2048.
