import { Routes } from '@angular/router';
import { LoginComponentComponent } from './components/login-component/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { guardGuard } from './Guard/guard.guard';
import { AppoitmentComponent } from './components/appoitment/appoitment.component';
import { PatientComponent } from './components/patient/patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

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
    }
];
