"use client";
import React from 'react';
import DiplomaCreation from "@/components/diploma/DiplomaCreation";

export default function DiplomaDashboard() {
    return (
        <div className="p-4 w-3/4 mx-auto">
            <h1 className="text-3xl font-bold mb-4">List of Posts</h1>
            <DiplomaCreation/>
        </div>
    );
}