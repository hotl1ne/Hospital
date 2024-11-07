import { Routes } from '@angular/router';

import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppoitmentComponent } from './pages/appoitment/appoitment.component';
import { PatientListComponent } from './pages/patient-list/patient-list.component';
import { PatientPageComponent } from './pages/patient-page/patient-page.component';
import { AddPatientComponent } from './pages/add-patient/add-patient.component';
import { guardGuard } from './core/guards/Guard/guard.guard';

export const routes: Routes = [
    {
        path: "",
        component: LoginComponent
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
