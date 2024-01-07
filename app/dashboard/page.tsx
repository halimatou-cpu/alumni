"use client";
import StudentProfile from "@/components/profile/StudentProfile";

export default function StudentDashboard() {
    return (
        <div className="p-4 w-3/4 mx-auto">
            <h2>Profile</h2>
            <StudentProfile/>
        </div>
    );
};