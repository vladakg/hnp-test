import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', loadChildren: './pages/home/home.module#HomePageModule'},
    {path: 'add', loadChildren: './pages/add-patient/add-patient.module#AddPatientPageModule'},
    {path: 'list', loadChildren: './pages/list-patients/list-patients.module#ListPatientsPageModule'},
    {path: 'profile/:id', loadChildren: './pages/profile-patient/profile-patient.module#ProfilePatientPageModule'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
