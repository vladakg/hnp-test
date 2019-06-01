////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {PatientsService} from '../../services/patients';
import {Patient} from '../../../interfaces/patient';
import {DoctorsService} from '../../services/doctors';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
    selector: 'app-profile-patient',
    templateUrl: './profile-patient.page.html',
    styleUrls: ['./profile-patient.page.scss'],
})
export class ProfilePatientPage implements OnInit {

    objHeaderData: {title: string};
    id: number;
    patient: Patient;

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private activatedRoute: ActivatedRoute,
                private patientService: PatientsService,
                private doctorsService: DoctorsService) {
        this.objHeaderData = {
            title: 'Profile Patient'
        };

        this.activatedRoute.params.subscribe(params => {
            this.id = +params.id;
        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ngOnInit() {
        this.getPatient();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getPatient() {
        this.patient = this.patientService.getPatient(this.id);

        // in production
        // this.patientsService.getPatient(this.id)
        //     .subscribe(
        //         (response: any) => {
        //             this.patients = response.patient;
        //         },
        //         error => {
        //             this.globalComponents.toast('Something went wrong', 'danger', 'success', 3000);
        //         }
        //     );
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getDoctorName(id: number) {
        return this.doctorsService.getDoctorName(id);
    }

}
