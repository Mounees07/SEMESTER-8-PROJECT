Fix Summary:
- File: frontend/src/pages/student/StudentCourseDetails.jsx
- Issue: Missing page for viewing course content.
- Fix: Created new component to display course banner and list lessons with clickable links.

- File: frontend/src/App.jsx
- Issue: Missing route for student course details.
- Fix: Added route `/student/courses/:sectionId` mapped to StudentCourseDetails.

- File: frontend/src/pages/student/StudentCourses.jsx
- Issue: "View Content" button had no action.
- Fix: Added `onClick` handler to navigate to the new details page.
