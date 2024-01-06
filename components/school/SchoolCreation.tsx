"use client";
import React, {useState} from 'react';
import {createSchool, getSchoolName} from "@/utils/contractInteraction";

function SchoolCreation() {
    const [schoolName, setSchoolName] = useState('');
    const [schoolAddress, setSchoolAddress] = useState('');
    const [createdSchoolName, setCreatedSchoolName] = useState('');

    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (schoolName) {
            try {
                await createSchool(schoolName);
                console.log('School created successfully!');

                const name = await getSchoolName(schoolAddress);
                setCreatedSchoolName(name);
            } catch (error) {
                console.error('Error creating school:', error);
            }
        }
    };

    return (
        <div>
            <h2>Create School</h2>
            <form onSubmit={handleFormSubmit} className="max-w-sm mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="schoolNameInput" className="block text-gray-700">School Name:</label>
                    <input
                        type="text"
                        id="schoolNameInput"
                        value={schoolName}
                        onChange={(e) => setSchoolName(e.target.value)}
                        className="border-2 border-gray-300 p-2 w-full"
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Create School</button>
            </form>

            {createdSchoolName && (
                <div>
                    <p>School created:</p>
                    <p>{createdSchoolName}</p>
                </div>
            )}
        </div>
    );
};

export default SchoolCreation;