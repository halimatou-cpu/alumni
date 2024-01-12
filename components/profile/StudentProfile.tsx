"use client";
// import React from 'react';
import {useDynamicUser, usePrimaryWalletAddress} from "@/utils/UserDynamicHook";
import {getMyDiplomas} from "@/services/contractInteraction";
import {Diploma} from "@/objets/diploma";
import {useEffect, useState} from "react";
import { useDynamicContext } from "@dynamic-labs/sdk-react-core";
// import { useDynamicContext } from "@dynamic-labs/sdk-react-core";

function StudentProfile() {

    // const primaryWallet = usePrimaryWalletAddress();
    //const { primaryWallet } = useDynamicContext();
    const {primaryWallet } = useDynamicContext();

    const userInfo = useDynamicUser();
    // console.log("********* wallet address: ", primaryWallet);

    const [diplomas, setDiplomas] = useState<any[]>([]);

    useEffect(() => {
        async function fetchDiplomas() {
            try {
                const myDiplomas = await getMyDiplomas(primaryWallet?.address ?? "0x1d8e02E367a074dA453A58F22DA1f86BbF4f5CE5");
                console.log("********* myDiplomas: ", myDiplomas);
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
                <h2 className="text-2xl font-bold mb-4">Informations personnelles</h2>
                <div>
                    <p className="text-lg mb-2">
                        <span className="font-bold">Prénom:</span> {userInfo?.firstName}
                    </p>
                    <p className="text-lg mb-2">
                        <span className="font-bold">Nom:</span> {userInfo?.lastName}
                    </p>
                    <p className="text-lg">
                        <span className="font-bold">Email:</span> {userInfo?.email}
                    </p>
                </div>
            </section>

            {/* Section Diplôme */}
            <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">Mes Diplômes</h2>
                {diplomas.length > 0 ? (
                    <ul>
                        {diplomas.map((diploma, index) => (
                            <li key={index} className="mb-4">
                                <h3 className="text-lg font-bold"> Titre: {diploma[0]}</h3>
                                <p>Date d'obtention: {diploma[4].toString()}</p>
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

export default StudentProfile;