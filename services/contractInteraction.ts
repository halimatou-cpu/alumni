import { ethers } from 'ethers';

const contractAddress = 'ContractAddress';

const contractABI = [

];

//const provider = new ethers.providers.JsonRpcProvider('WEB3_PROVIDER_URL');

//const privateKey = 'PrivateKey';

//const contract = new ethers.Contract(contractAddress, contractABI, new ethers.Wallet(privateKey, provider));

export async function createSchool(name: string): Promise<void> {
    try {
        //const tx = await contract.createSchool(name);
        //await tx.wait();
        console.log(name);
        console.log('School created successfully!');
    } catch (error) {
        console.error('Error creating school:', error);
    }
}

export async function getSchoolName(schoolAddress: string): Promise<string> {
    try {
        //const schoolName = await contract.getSchoolName(schoolAddress);
        //console.log('School name:', schoolName);
        //return schoolName;
        return '';
    } catch (error) {
        console.error('Error getting school name:', error);
        return '';
    }
}

export async function createDiploma(name: string, student: string, hash: string): Promise<void> {
    try {
        //const tx = await contract.createDiploma(name, student, hash);
        //await tx.wait();
        console.log(name);
        console.log(student);
        console.log(hash);
        console.log('Diploma created successfully!');
    } catch (error) {
        console.error('Error creating diploma:', error);
    }
}

export async function getDiplomasByStudent(student: string): Promise<string[]> {
    try {
        //const diplomas = await contract.getDiplomasByStudent(student);
        //console.log('Diplomas for student:', diplomas);
        //return diplomas;
        return [];
    } catch (error) {
        console.error('Error getting diplomas:', error);
        return [];
    }
}

export async function getDiplomasBySchool(school: string): Promise<string[]> {
    try {
        //const diplomas = await contract.getDiplomasBySchool(school);
        //console.log('Diplomas for school:', diplomas);
        //return diplomas;
        return [];
    } catch (error) {
        console.error('Error getting diplomas:', error);
        return [];
    }
}

export async function getSchools(): Promise<string[]> {
    try {
        //const schools = await contract.getSchools();
        //console.log('List of schools:', schools);
        //return schools;
        return [];
    } catch (error) {
        console.error('Error getting schools:', error);
        return [];
    }
}