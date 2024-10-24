import { Component } from '@angular/core';
import { SideMenuComponent } from "../side-menu/side-menu.component";
import { HeaderComponent } from "../header/header.component";
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { style } from '@angular/animations';
import { IAppointment } from '../../Interfaces/Appointment/IApointment.module';
import { ITeam } from '../../Interfaces/Team/ITeam.module';
import { Survey, SurveyResponse } from '../../Interfaces/Dashboard/IDashboard.module';



@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SideMenuComponent, HeaderComponent, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent {
  status = "Active";

  protected patientInfo: Survey = {
    opd: 150,
    relieved: 100,
    inPatient: 89,
    onVentilation: 140
  }

  public appointments: IAppointment[] = [
    {id: "1", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "2", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "3", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "4", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "5", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "6", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "7", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "8", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
    {id: "9", patient_Name: "Sara Crouse", doctor_Name: "Doctor House", cabinet_Location: "Cabinet 123, floor 1", check_In: "Yes", appointment_Type: "Check Mentaly", time: "9:30", date: "12.12.2003"},
  ]

  public doctors: ITeam[] = [
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"}
  ]

  public lineChartData = [
    { data: [100, 200, 150, 300, 200, 100, 395, 290, 150, 300, 350], label: 'New Patients', borderColor: 'rgba(234, 104, 162, 1)', fill: false,  style: 'line', lineTension: 0.5, pointRadius: 0 },
    { data: [150, 250, 300, 150, 200, 50, 350, 300, 300, 250, 100, 200], label: 'Old Patients', borderColor: 'rgba(104, 162, 234, 1)', fill: false, lineTension: 0.5, pointRadius: 0 }
  ];

  public barChartData = [
    { 
      data: [50, 100, 150, 120, 170, 200], 
      label: 'Diseases A', 
      backgroundColor: 'rgba(234, 104, 162, 1)',
      barThickness: 15
    },
    { 
      data: [60, 110, 160, 130, 180, 210], 
      label: 'Diseases B', 
      backgroundColor: 'rgba(104, 162, 234, 1)',
      barThickness: 15
    },
    { 
      data: [40, 90, 140, 110, 160, 190], 
      label: 'Diseases C', 
      backgroundColor: 'rgba(154, 204, 104, 1)',
      barThickness: 15
    }
  ];

  public barChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,  // Робимо стовпчики накладеними один на одного
        grid: {
          display: false
        },
        
      },
      y: {
        stacked: true,  // Робимо стовпчики накладеними один на одного
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100,
        },
        grid: {
          display: true,
          color: 'rgba(200, 200, 200, 0.3)'
        }
      }
    },
    plugins: {
      legend: {
        display: false,
        
        }
      }
    }

  public lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        display: true, // Відображаємо підписи для місяців
        grid: {
          display: false, // Не показуємо вертикальні лінії
        }
      },
      y: {
        display: true, // Відображаємо числа на осі Y
        min: 0,
        max: 400,
        ticks: {
          stepSize: 100, // Крок поділки для чисел
        },
        grid: {
          display: true, // Показуємо горизонтальні лінії
          color: 'rgba(200, 200, 200, 0.3)' 
        }
      },
    },
    plugins: {
      legend: {
        display: true,
        position: 'top',
        align: 'end',
        labels: {
          usePointStyle: true,
          font: {
            family: 'Arial', 
            size: 14
          }
        }
      }
    }
  };


}
