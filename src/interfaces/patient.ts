import {Address} from './address';

export interface Patient {
    firstName: string;
    lastName: string;
    doctor: number;
    addresses: Address[];
}
