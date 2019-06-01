////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { PatientsService } from '../../services/patients';
import { DoctorsService } from '../../services/doctors';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Patient } from '../../../interfaces/patient';
import { Doctor } from '../../../interfaces/doctor';
import { NavController } from '@ionic/angular';
import { GlobalComponents } from '../../components/global.components';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
    selector: 'app-list-patients',
    templateUrl: './list-patients.page.html',
    styleUrls: ['./list-patients.page.scss'],
})
export class ListPatientsPage implements OnInit {

    objHeaderData: { title: string };

    patients: Patient[];
    doctors: Doctor[];

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private patientsService: PatientsService,
                private doctorsService: DoctorsService,
                private emailComposer: EmailComposer,
                private navCtrl: NavController,
                private globalComponents: GlobalComponents) {
        this.objHeaderData = {
            title: 'List Patients'
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ngOnInit() {
        this.getPatients();
        this.getDoctors();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getPatients() {
        this.patients = this.patientsService.getPatients();

        // in production
        // this.patientsService.getPatients()
        //     .subscribe(
        //         (response: any) => {
        //             this.patients = response.patients;
        //         },
        //         error => {
        //             this.globalComponents.toast('Something went wrong', 'danger', 'success', 3000);
        //         }
        //     );
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getDoctors() {
        this.doctors = this.doctorsService.getDoctors();

        // in production
        // this.doctorsService.getDoctors()
        //     .subscribe(
        //         (response: any) => {
        //             this.doctors = response.doctors;
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

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    sendEmail(email) {
        this.emailComposer.open(email);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    goOnpatient(id: number) {
        this.navCtrl.navigateRoot(['/profile', id]);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
