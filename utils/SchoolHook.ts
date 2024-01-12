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

export function isSchool(address: string | undefined, schools: String[] ): boolean {
    if (address === null) {
        return false;
    }

    return schools.some((school) => school === address);
}