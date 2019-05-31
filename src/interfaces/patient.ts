import {Address} from './address';

export interface Patient {
    id: number;
    registeredDate: string;
    firstName: string;
    lastName: string;
    doctor: number;
    addresses: Address[];
}
