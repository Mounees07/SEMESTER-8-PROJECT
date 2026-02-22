package com.academic.platform.repository;

import com.academic.platform.model.LeaveRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.Optional;

@Repository
public interface LeaveRequestRepository extends JpaRepository<LeaveRequest, Long> {
        List<LeaveRequest> findByStudentFirebaseUid(String studentUid);

        @org.springframework.data.jpa.repository.Query("SELECT l FROM LeaveRequest l WHERE l.student.studentDetails.mentor.firebaseUid = :mentorUid AND (l.parentStatus = 'APPROVED' OR l.parentStatus = 'PENDING')")
        List<LeaveRequest> findByStudentMentorFirebaseUidAndParentStatus(
                        @org.springframework.data.repository.query.Param("mentorUid") String mentorUid);

        Optional<LeaveRequest> findByParentActionToken(String token);

        @org.springframework.data.jpa.repository.Query("SELECT l FROM LeaveRequest l WHERE l.student.studentDetails.department = :department ORDER BY l.createdAt DESC")
        List<LeaveRequest> findByStudentStudentDetails_DepartmentOrderByCreatedAtDesc(
                        @org.springframework.data.repository.query.Param("department") String department);

        @org.springframework.data.jpa.repository.Query("SELECT l FROM LeaveRequest l WHERE l.student.studentDetails.rollNumber = :rollNumber")
        List<LeaveRequest> findByStudentStudentDetails_RollNumber(
                        @org.springframework.data.repository.query.Param("rollNumber") String rollNumber);

        List<LeaveRequest> findByStudentInAndParentStatusIn(
                        java.util.Collection<com.academic.platform.model.User> students,
                        java.util.Collection<String> statuses);
}
