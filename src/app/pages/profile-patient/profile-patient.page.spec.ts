import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProfilePatientPage} from './profile-patient.page';

describe('ProfilePatientPage', () => {
    let component: ProfilePatientPage;
    let fixture: ComponentFixture<ProfilePatientPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ProfilePatientPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ProfilePatientPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
