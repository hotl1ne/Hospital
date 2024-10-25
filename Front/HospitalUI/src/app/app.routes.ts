import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponentComponent
    },
    {
        path: "Dashboard",
        component: DashboardComponent,
        //canActivate: [guardGuard]
    },
    {
        path: "Appointment",
        component: AppoitmentComponent
    },
    {
        path: "Patient",
        component: PatientListComponent
    },
    {
        path: "AddPatient",
        component: AddPatientComponent
    }
];
