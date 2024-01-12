"use client";
// import React from 'react';
import DiplomaCreation from "@/components/diploma/DiplomaCreation";

export default function DiplomaDashboard() {
    return (
        <div className="p-4 w-3/4 mx-auto">
            <h1 className="text-3xl font-bold mb-4">Liste des diplomes</h1>
            {/* check if the current address is a school here
            then, set a button to generate a new diplome with
            this form DiplomaCreation <DiplomaCreation/> */}
            {/* Lister les diplomes ici */}
            <DiplomaCreation/>
        </div>
    );
}