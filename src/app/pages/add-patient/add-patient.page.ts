////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { doctors} from '../../../mockups/doctors';
import { Doctor } from '../../../interfaces/doctor';
import { AddressesType } from '../../../interfaces/addressesType';
import { addresses } from '../../../mockups/addresses';

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
    addressesType: AddressesType = addresses;

    addPatientForm: FormGroup = new FormGroup({});

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    constructor(private formBuilder: FormBuilder) {
        this.objHeaderData = {
            title: 'Add New Patient Page'
        };
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    ngOnInit() {
        console.log(this.addressesType);
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
            email: ['', [Validators.required, Validators.email]],
            doctor: ['', Validators.required],
            addresses: this.formBuilder.array([
                this.createAddressFields()
            ])

        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    addPatient() {
        console.log(this.addPatientForm.value);
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
            phoneNumber: ['', [Validators.required, Validators.pattern('^\\+?[0-9\\s]+$')]],
            street: ['', Validators.required],
            zipCode: ['', Validators.required],
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
}
