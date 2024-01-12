import {useParams} from "next/navigation";
import {usePrimaryWalletAddress} from "@/utils/UserDynamicHook";
import {getSchoolDiplomas, getSchoolName} from "@/services/contractInteraction";
import React, {useEffect, useState} from "react";
import {School} from "@/objets/school";
import {Diploma} from "@/objets/diploma";

export default function SchoolProfile() {
    const { address } = useParams<{ address: string }>();
    const primaryWallet = usePrimaryWalletAddress();
    //const { primaryWallet } = useDynamicContext();
    const schoolInfo = getSchoolName(primaryWallet);
    // console.log("********* wallet address: ", primaryWallet);

    const [school, setSchool] = useState<School>();
    const [schoolToDisplay, setSchoolToDisplay] = useState<School>();

    useEffect(() => {
        setSchool(schoolToDisplay);
    }, [schoolToDisplay])

    const [diplomas, setDiplomas] = useState<Diploma[]>([]);

    useEffect(() => {
        async function fetchDiplomas() {
            try {
                const myDiplomas = await getSchoolDiplomas(primaryWallet);
                setDiplomas(myDiplomas);
            } catch (error) {
                console.error('Error fetching diplomas: ', error);
            }
        }

        fetchDiplomas();
    }, [primaryWallet]);

    return (
        <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md">
            {/* Section Informations personnelles */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Informations de l'école</h2>
                <div>
                    <p className="text-lg mb-2">
                        <span className="font-bold">Nom:</span> {schoolInfo}
                    </p>
                </div>
            </section>

            {/* Section Diplômes */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Les Diplômes délivrés</h2>
                {diplomas.length > 0 ? (
                    <ul>
                        {diplomas.map((diploma, index) => (
                            <li key={index} className="mb-4">
                                <h3 className="text-lg font-bold">{diploma.diplomeTitle}</h3>
                                <p>Etudiant: {diploma.studentAddress}</p>
                                <p>Date d'obtention: {diploma.date}</p>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p>Aucun diplôme trouvé.</p>
                )}
            </section>
        </div>
    )
        ;
}