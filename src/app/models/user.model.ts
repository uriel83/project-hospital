import { StringLiteralType } from "typescript";

export interface UserModel{
    
    name: string;
    idNumber: number;
    Idpassport: number;
    phonNumber: number;
    email: string;
    password: string;
    img:string; 
    age?: number;
    city?:string;
    country?: string;
    graduation_year?:number;
    academic_institution?: string;
    medical_institution?: string;
    residency?: string;
    department?: string;
    creation_date?:Date;
    role?:string;
    roleNumber?:number;
    mySupervizor? :string;
    
}