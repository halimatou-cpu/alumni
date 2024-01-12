"use client";
import StudentProfile from "@/components/profile/StudentProfile";
import SchoolProfile from "@/components/school/SchoolProfile";
import {useDynamicContext} from "@dynamic-labs/sdk-react-core";
import {isSchool, useSchools} from "@/utils/SchoolHook"

export default function StudentDashboard() {

    const {primaryWallet} = useDynamicContext();
    const {schools} = useSchools();

    return (

        <div className="p-4 w-3/4 mx-auto">
            {isSchool(primaryWallet?.address, schools) ? (
                <SchoolProfile/>
            ) : (
                <StudentProfile/>
            )}
        </div>
    );
};