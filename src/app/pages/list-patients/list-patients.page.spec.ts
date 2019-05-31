import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ListPatientsPage} from './list-patients.page';

describe('ListPatientsPage', () => {
    let component: ListPatientsPage;
    let fixture: ComponentFixture<ListPatientsPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ListPatientsPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ListPatientsPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
