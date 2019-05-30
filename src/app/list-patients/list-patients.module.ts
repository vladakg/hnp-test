import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {ListPatientsPage} from './list-patients.page';

const routes: Routes = [
    {
        path: '',
        component: ListPatientsPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [ListPatientsPage]
})
export class ListPatientsPageModule {
}
