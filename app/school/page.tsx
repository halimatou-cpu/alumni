"use client";
import SchoolCreation from "@/components/school/SchoolCreation";
import SchoolList from "@/components/school/SchoolList";

export default function SchoolDashboard() {
    return (
        <div className="p-4 w-3/4 mx-auto">
            <SchoolCreation/>
            <SchoolList/>
        </div>
    );
};