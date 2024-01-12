import { contractAddress } from "@/environment/environment";

import Web3 from 'web3';
import { Diploma } from '../objets/diploma';
import { abi } from "./Abi";

const web3 = new Web3(new Web3.providers.HttpProvider(process.env.NEXT_PUBLIC_PROVIDER_URL ?? ""));
const contract = new web3.eth.Contract(abi, contractAddress);

export async function createSchool(name: string, account: string): Promise<void> {
    try {
        const response = await contract.methods.createSchool(name).call({
            from: account,
        });
    } catch (error) {
        console.error('Error creating school: ', error);
    }
}

export async function getSchools(): Promise<Array<string>> {
    try {
        const schools = await contract.methods.getSchools().call() as Array<string>;
        return schools;
    } catch (error) {
        console.error('Error getting schools: ', error);
        return [];
    }
}

export async function getSchoolName(schoolAddress: string): Promise<string> {
    try {
        const schoolName = await contract.methods.getSchoolName(schoolAddress).call() as string;
        return schoolName;
    } catch (error) {
        console.error('Error getting school name: ', error);
        return "";
    }
}

export async function getSchoolDiplomas(schoolAddress: string) {
    try {
        const diplomas = await contract.methods.getDiplomasBySchool(schoolAddress).call() as Array<any>;
        return diplomas.map((diploma: any) => new Diploma(diploma.diplomeTitle, diploma.studentAddress, diploma.diplomaHash, diploma.date));
    } catch (error) {
        console.error('Error getting school diplomas: ', error);
        return [];
    }
}

export async function getMyDiplomas(account: string) {
    try {
        const diplomas = await contract.methods.getDiplomasByStudent(account).call({
            from: account,
        });
        console.log(" ***** diplomas : ", diplomas);
        return diplomas;
        // return diplomas.map((diploma: any) => new Diploma(diploma._name, diploma.studentAddress, account, diploma.diplomaHash, diploma.date));
    } catch (error) {
        console.error('Error getting my diplomas: ', error);
        return [];
    }
}

export async function createDiploma(diplomaDto: Diploma, account: string) {
    console.log(" createDiploma method call : ", diplomaDto);
    try {
        const diplomaCreationResponse = await contract.methods.createDiploma(
            diplomaDto.diplomeTitle,
            diplomaDto.studentAddress,
            diplomaDto.diplomaHash
        ).call({
            from: account,
        });

        console.log(" createDiploma method call result : ", diplomaCreationResponse);
    } catch (error) {
        console.error('Error creating diploma: ', error);
    }
}