import React from 'react';
import usePrimaryWalletAddress from "@/utils/DynamicHook"

function StudentProfile() {

    const primaryWallet = usePrimaryWalletAddress();

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
                <div className="mb-4">
                    <p className="text-gray-700">
                        <span className="font-bold">Name:</span> {primaryWallet}
                    </p>
                </div>
                {/*<div className="mb-4">*/}
                {/*    <p className="text-gray-700">*/}
                {/*        <span className="font-bold">Diploma:</span> {studentProfile.diploma}*/}
                {/*    </p>*/}
                {/*</div>*/}
                {/*<div className="mb-4">*/}
                {/*    <p className="text-gray-700">*/}
                {/*        <span className="font-bold">Date:</span> {studentProfile.date}*/}
                {/*    </p>*/}
                {/*</div>*/}
            </div>
        </div>
    );
}

export default StudentProfile;