import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { ChartOptions } from 'chart.js';
import { SideBarComponent } from "../../layouts/sidebar/sidebar.component";
import { HeaderComponent } from "../../layouts/header/header.component";
import { PdfViewerComponent } from "../../layouts/pdf-viewer/pdf-viewer.component";
import { Survey } from '../../models/Dashboard/IDashboard.module';
import { IAppointment } from '../../models/Appointment/IApointment.module';
import { ITeam } from '../../models/Team/ITeam.module';
import { LoaderComponent } from "../../layouts/loader/loader.component";
import { PDFs } from '../../models/Dashboard/IPDFFiles.module';
import { DashboardService } from '../../core/services/DashboardService/dashboard.service';
import { ChartData } from '../../models/Dashboard/LineChartData.module';
import { BarChartData } from '../../models/Dashboard/BarChartData.module';
import { DashboardDataService } from '../../core/services/DashboardService/GetDataService/dashboard-data.service';




@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [BaseChartDirective, SideBarComponent, HeaderComponent, PdfViewerComponent, LoaderComponent],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'] 
})
export class DashboardComponent implements AfterViewInit, OnInit{
  

  isLoading!: boolean;

  pdfPaths: PDFs[] = [];

  patientSurvey: Survey = {
    opd: 0,
    relieved: 0,
    inPatient: 0,
    ventilator: 0
  }

  protected lineChartData: ChartData[] = [
    { data: [], label: 'New Patients', borderColor: 'rgba(234, 104, 162, 1)', fill: false, lineTension: 0.5, pointRadius: 0 },
    { data: [], label: 'Old Patients', borderColor: 'rgba(104, 162, 234, 1)', fill: false, lineTension: 0.5, pointRadius: 0 }
  ];

  protected barChartData: BarChartData[] =  [
    { 
      data: [], 
      label: 'Diseases A', 
      backgroundColor: 'rgba(234, 104, 162, 1)',
      barThickness: 15
    },
    { 
      data: [], 
      label: 'Diseases B', 
      backgroundColor: 'rgba(104, 162, 234, 1)',
      barThickness: 15
    },
    { 
      data: [], 
      label: 'Diseases C', 
      backgroundColor: 'rgba(154, 204, 104, 1)',
      barThickness: 15
    }
  ];

  constructor(private initData: DashboardDataService) {}

  async ngOnInit(): Promise<void> {
    this.isLoading = true;
    this.patientSurvey = await this.initData.initPatientSurvey();
    this.initData.initLineChartData(this.lineChartData);
    this.initData.initBarChartData(this.barChartData);
    this.pdfPaths = [
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' },
      { pdfs: 'assets/pdfs/Blood Test Results.pdf' }
    ];
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  protected getPdfFileName(pdfPath: string): string {
    const parts = pdfPath.split('/');
    return parts[parts.length - 1]; 
  }

  protected appointments: IAppointment[] = [
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

  protected doctors: ITeam[] = [
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"},
    {doctor_Pic: "assets/doctor-pic.svg", doctor_Name: "Doctor Name", status: "Active"}
  ]

  protected barChartLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  protected barChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        stacked: true,  
        grid: {
          display: false
        },
        
      },
      y: {
        stacked: true,  
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

  protected lineChartLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  protected lineChartOptions: ChartOptions = {
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
