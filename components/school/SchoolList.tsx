"use client";
import React, {useEffect, useState} from 'react';
import {School} from "@/objets/school";
import {getSchoolName, getSchools} from "@/services/contractInteraction";
import {router} from "next/client";
import Link from "next/link";

function SchoolList() {
    const [schools, setSchools] = useState<School[]>([]);
    const [schoolToDisplay, setSchoolToDisplay] = useState<School>();

    const handleSchoolClick = (school: School) => {
        setSchoolToDisplay(school);
        router.push("/school");
    };

    useEffect(() => {
        async function fetchSchools() {
            try {
                const schoolAddresses = await getSchools();
                const fetchedSchools = await Promise.all(
                    schoolAddresses.map(async (address) => {
                        const name = await getSchoolName(address);
                        return { address, name };
                    })
                );
                setSchools(fetchedSchools);
            } catch (error) {
                console.error('Error fetching schools: ', error);
            }
        }

        fetchSchools();
    }, []);

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Liste des Écoles</h2>
            {schools.length > 0 ? (
                <ul>
                    {schools.map((school, index) => (
                        <li key={index} className="mb-4">
                            <Link href="/school/[school]"
                            as={`/school/${school.address}`}>
                                <h3 className="text-lg font-bold">{school.name}</h3>
                                <p>Adresse: {school.address}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Aucune école trouvée.</p>
            )}
        </div>
    );
}

export default SchoolList;