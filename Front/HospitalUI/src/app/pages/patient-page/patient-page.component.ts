import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, inject, OnInit, QueryList, viewChild, ViewChild, ViewChildren } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SideBarComponent } from "../../layouts/sidebar/sidebar.component";
import { HeaderComponent } from "../../layouts/header/header.component";
import { PhoneFormatPipe } from "../../shared/Pipe/Phone-format.pipe";
import { LoaderComponent } from "../../layouts/loader/loader.component";
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';
import { GeneralReportComponent } from "../../layouts/general-report/general-report.component";
import { PdfFilesComponent } from "../../layouts/pdf-files/pdf-files.component";
import { StatusPagService } from '../../core/services/PageStatus/status-pag.service';
import { AboutPatient } from '../../models/Patient/IPatientAbout.module';
import { PastVisit } from '../../models/Patient/IPatientPastVisit.module';
import { CurrentVisit } from '../../models/Patient/IPatientCurrVisit.module';


@Component({
  selector: 'app-patient-page',
  standalone: true,
  imports: [RouterLink, SideBarComponent, HeaderComponent, PhoneFormatPipe, LoaderComponent, CanvasJSAngularChartsModule, GeneralReportComponent, PdfFilesComponent],
  templateUrl: './patient-page.component.html',
  styleUrl: './patient-page.component.css'
})
export class PatientPageComponent implements AfterViewInit, OnInit {

  @ViewChild(GeneralReportComponent) progressBars!: GeneralReportComponent;
  @ViewChild(PdfFilesComponent) pdfFilew!: PdfFilesComponent;

  constructor(private cdr: ChangeDetectorRef, private status: StatusPagService) {}

  isLoading!: boolean;
  id!: number;
  aboutPatient!: AboutPatient;
  patientPastVisit: PastVisit[] = [];
  patientCurrVisit!: CurrentVisit;

  ngOnInit(): void {
    this.isLoading = true;
    this.patientPastVisit = [
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      },
      {
        date: "02.12.2021, ",
        doctorName: 'Doctor Name',
        threatment: 'X-Ray',
        charges: '120'
      }
    ]
    this.aboutPatient = {
      aboutInfo: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      email: "email@email.com",
      phoneNumber: "+3808548521524",
      adress: "345, Sarju Appt., Mota Varacha, Surat Gujarat, India"
    }
    this.patientCurrVisit = {
      visitReason: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      currentThreatment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      patientSymptoms: "vomiting, loss_of_appetite, abdominal_pain, passage_of_gases, internal_itching, nausea, abdominal_pain, yellowing_of_eyes, irritability, malaise, abnormal_menstruation, chest_pain, blood_in_sputum, muscle_pain"
    }
    this.id = 1;
    this.status.currentId$.subscribe(id => {
      this.id = id;
    });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }

  chartOptions = {
	  animationEnabled: true,
	  theme: "white",
	  exportEnabled: false,
	  data: [{
		  type: "pie", 
		  indexLabel: "{name}: {y}%",
		  dataPoints: [
		  	{ name: "Disease 1", y: 91.5 },
		  	{ name: "Disease 2", y: 4.5 },
		  	{ name: "Disease 3", y:  4}
		  ]
	  }]
	}

}
