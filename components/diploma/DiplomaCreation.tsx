"use client";
// import React, {useState} from 'react';
import {useState} from 'react';
import {Diploma} from "@/objets/diploma";
import * as crypto from 'crypto';

function DiplomaCreation() {

    const [formData, setFormData] = useState<Diploma>({
        // school: '',
        // student: '',
        // diplomaHash: '',
        // date: '',
        diplomeTitle: '',
        diplomaHash: '',
        schoolAddress: '',
        studentAddress: '',
        date: '',
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const [file, setFile] = useState<File | null>(null);
    const [hashedValue, setHashedValue] = useState<string | null>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const selectedFile = e.target.files?.[0] || null;
        setFile(selectedFile);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (formData.studentAddress) {

        }

        if (file) {
            try {
                const fileContent = await file.text();

                const sha256Hash = crypto.createHash('sha256');

                sha256Hash.update(fileContent);

                const hashedValue = sha256Hash.digest('hex');
                setHashedValue(hashedValue);

                console.log('Hashed Value:', hashedValue);

            } catch (error) {
                console.error('Error hashing file:', error);
            }
        }
    };

    return (
        <div>
            <h1>Diploma Creation</h1>
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto mt-8">
                <div className="mb-4">
                    <label htmlFor="school" className="block text-gray-700">School:</label>
                    <input
                        type="text"
                        id="school"
                        name="school"
                        value={formData.schoolAddress}
                        onChange={handleChange}
                        className="border-2 border-gray-300 p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="student" className="block text-gray-700">Student:</label>
                    <input
                        type="text"
                        id="student"
                        name="student"
                        value={formData.studentAddress}
                        onChange={handleChange}
                        className="border-2 border-gray-300 p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="date" className="block text-gray-700">Date:</label>
                    <input
                        type="date"
                        id="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="border-2 border-gray-300 p-2 w-full"
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="pdfFile" className="block text-gray-700">PDF File:</label>
                    <input
                        type="file"
                        id="pdfFile"
                        name="pdfFile"
                        onChange={handleFileChange}
                        className="border-2 border-gray-300 p-2 w-full"
                    />
                </div>

                <button type="submit" onClick={() => console.log("submitting diploma creation form")} className="bg-blue-500 text-white p-2 rounded hover:bg-blue-700">Create Diploma
                </button>
            </form>
        </div>
    );
}

export default DiplomaCreation;