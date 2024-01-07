"use client";
import React from 'react';
import usePrimaryWalletAddress from "@/utils/DynamicHook"
import useDynamicUser from "@/utils/UserDynamicHook";

function StudentProfile() {

    const primaryWallet = usePrimaryWalletAddress();
    const userInfo = useDynamicUser();

    return (
        <div className="flex items-center justify-center">
            <div className="bg-white p-8 rounded shadow-md">
                <h1 className="text-2xl font-bold mb-4">Student Profile</h1>
                <div className="mb-4">
                    <p className="text-gray-700">
                        <span className="font-bold">Prénom:</span> {userInfo?.firstName}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-700">
                        <span className="font-bold">Nom:</span> {userInfo?.lastName}
                    </p>
                </div>
                <div className="mb-4">
                    <p className="text-gray-700">
                        <span className="font-bold">Email:</span> {userInfo?.email}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default StudentProfile;