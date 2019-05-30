import {AddressesType} from './addressesType';

export interface Address {
    type: AddressesType;
    name: string;
    email: string;
    phone: string;
    street: string;
    city: string;
    zipcode: string;
    country: string;
}
