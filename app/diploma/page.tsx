"use client";
// import React from 'react';
import DiplomaCreation from "@/components/diploma/DiplomaCreation";

export default function DiplomaDashboard() {
    return (
        <div className="p-4 w-3/4 mx-auto">
            {/* check if the current address is a school here
            then, set a button to generate a new diplome with
            this form DiplomaCreation <DiplomaCreation/> */}
            {/* Lister les diplomes ici */}
            <DiplomaCreation/>
        </div>
    );
}