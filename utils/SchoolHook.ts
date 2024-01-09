import {useEffect, useState} from "react";
import {getSchools} from "@/services/contractInteraction";

export function useSchools() {
    const [schools, setSchools] = useState<String[]>([]);

    useEffect(() => {
        async function fetchSchools() {
            try {
                const fetchedSchools = await getSchools();
                setSchools(fetchedSchools);
            } catch (error) {
                console.error('Error getting schools:', error);
            }
        }

        fetchSchools();
    }, []);

    return {schools};
}

export function isSchool(address: string, schools: String[]): boolean {
    return schools.some((school) => school === address);
}