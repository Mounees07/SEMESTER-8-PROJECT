package com.academic.platform.repository;

import com.academic.platform.model.CourseAttendanceSession;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;
import java.time.LocalDateTime;

public interface CourseAttendanceSessionRepository extends JpaRepository<CourseAttendanceSession, Long> {
    List<CourseAttendanceSession> findBySectionIdOrderByCreatedAtDesc(Long sectionId);

    Optional<CourseAttendanceSession> findFirstByOtpAndActiveTrue(String otp);

    List<CourseAttendanceSession> findByActiveTrueAndExpiresAtBefore(LocalDateTime time);
}
