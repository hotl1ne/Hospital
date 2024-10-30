import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import path from 'path';
import { PatientPageComponent } from './components/patient-page/patient-page.component';
import { guardGuard } from './Guard/guard.guard';

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
        //canActivate: [quardGuard]
    },
    {
        path: "Patient",
        component: PatientListComponent,
        //canActivate: [quardGuard]
    },
    {
        path: "PatientProfile",
        component: PatientPageComponent,
        /*canActivate: [guardGuard]*/
    },
    {
        path: "AddPatient",
        component: AddPatientComponent,
        /*canActivate: [guardGuard]*/
    }

];
