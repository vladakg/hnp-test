////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { doctors} from '../../../mockups/doctors';
import { Doctor } from '../../../interfaces/doctor';
import { AddressesType } from '../../../interfaces/addressesType';
import { addresses } from '../../../mockups/addresses';
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';
import { PatientsService } from '../../services/patients';
import { GlobalComponents } from '../../components/global.components';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.page.html',
    styleUrls: ['./add-patient.page.scss'],
})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export class AddPatientPage implements OnInit{

    objHeaderData: {title: string};
    doctors: Doctor[] = doctors;
    addressesType: AddressesType[] = addresses;
    formSubmitted = false;

    addPatientForm: FormGroup = new FormGroup({});

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private formBuilder: FormBuilder,
                private navCtrl: NavController,
                private toastController: ToastController,
                private patientService: PatientsService,
                private globalComponents: GlobalComponents) {
        this.objHeaderData = {
            title: 'Add New Patient'
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ngOnInit() {
        this.setupForm();
        this.formControlValueChanged();
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    setupForm() {
        this.addPatientForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            birthDate: [''],
            vat: [''],
            doctor: ['', Validators.required],
            addresses: this.formBuilder.array([
                this.createAddressFields()
            ])

        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    addPatient() {
        this.formSubmitted = true;
        if (!this.addPatientForm.valid) {
            this.globalComponents.toast('Please fill all required fields', 'danger', 'top', 3000);
        } else {
            this.patientService.addPatient(this.addPatientForm.value);
            this.globalComponents.toast('You have successfully added patient', 'success', 'top', 3000);
            this.navCtrl.navigateRoot('/home');

            // in production
            // this.patientsService.addPatient(this.addPatientForm.value)
            //     .subscribe(
            //         (response: any) => {
            //             this.globalComponents.toast('You have successfully added patient', 'success', 'top', 3000);
            //             this.navCtrl.navigateRoot('/home');
            //         },
            //         error => {
            //             this.globalComponents.toast('Something went wrong', 'danger', 'success', 3000);
            //         }
            //     );
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    formControlValueChanged() {
        const vatControl = this.addPatientForm.get('vat');
        this.addPatientForm.get('birthDate').valueChanges.subscribe(
            (value: string) => {
                const birthday = +new Date(value);
                if ((Date.now() - birthday) / (24 * 3600 * 365.25 * 1000) > 18) {
                    vatControl.setValidators([Validators.required]);
                } else {
                    vatControl.clearValidators();
                }
                vatControl.updateValueAndValidity();
            });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    createAddressFields(): FormGroup {
        const addressFields = {
            type: [(this.addPatientForm.controls.addresses && this.addPatientForm.controls.addresses.value.length > 0) ? '' : 'HOME', Validators.required],
            name: [''],
            email: ['', [Validators.required, Validators.email]],
            phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9\\s]+$')]],
            street: ['', Validators.required],
            city: ['', Validators.required],
            zipcode: ['', Validators.required],
            country: ['', Validators.required],
        };

        return this.formBuilder.group(addressFields);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    addNewInputField() {
        const control = <FormArray> this.addPatientForm.controls.addresses;
        control.push(this.createAddressFields());
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    removeInputField(index: number) {
        const control = <FormArray> this.addPatientForm.controls.addresses;
        control.removeAt(index);
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    cancelAddPatient() {
        this.navCtrl.navigateRoot('/home');
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    checkPhoneNumber(index: number) {
        const phone = this.addPatientForm.value.addresses[index].phone;
        if (phone.charAt(0) !== '+' && phone !== '') {
            this.addPatientForm.get('addresses.' + index + '.phone').patchValue('+39' + phone);
        }
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}
