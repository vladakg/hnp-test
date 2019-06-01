////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Injectable } from '@angular/core';
import { patients } from '../../mockups/patients';
import { Patient } from '../../interfaces/patient';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Injectable()
export class PatientsService {

    patientsListMockup: Patient[] = patients;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor() {}

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getPatients() {
        return this.patientsListMockup;
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    addPatient(patient) {
        patient.registeredDate = new Date().toISOString();
        patient.id = this.patientsListMockup[this.patientsListMockup.length - 1].id + 1;
        this.patientsListMockup.push(patient);
        console.log(this.patientsListMockup);
    }
}
