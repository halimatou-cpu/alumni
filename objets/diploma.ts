// export interface Diploma {
//     // school:string,
//     // student: string,
//     // diplomaHash:string,
//     diplomeTitle: string,
//     studentAddress: string,
//     diplomaHash: string,
//     date?: string,
// }

export class Diploma {
    constructor(
        public diplomeTitle: string,
        public studentAddress: string,
        public diplomaHash: string,
        public date?: string,
    ) {
        this.diplomeTitle = diplomeTitle;
        this.studentAddress = studentAddress;
        this.diplomaHash = diplomaHash;
        this.date = date;
     }
}