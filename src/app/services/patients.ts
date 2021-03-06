////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { patients } from '../../mockups/patients';
import { Patient } from '../../interfaces/patient';
import { HttpClient } from '@angular/common/http';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class PatientsService {

    patientsListMockup: Patient[] = patients;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private http: HttpClient) {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getPatients() {
        return this.patientsListMockup;

        // in production
        // return this.http.get('http://some-api/getPatients');
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    addPatient(patient: Patient) {
        patient.registeredDate = new Date().toISOString();
        patient.id = this.patientsListMockup[this.patientsListMockup.length - 1].id + 1;
        this.patientsListMockup.push(patient);

        // in production
        // return this.http.post('http://some-api/addPatient', patient);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getPatient(id: number) {
        const index = this.patientsListMockup.findIndex(i => i.id === id);
        return this.patientsListMockup[index];

        // in production
        // return this.http.get('http://some-api/getPatient/' + id);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
