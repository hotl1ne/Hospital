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

  isLoading = true;
  id: number = 0;


  ngOnInit(): void {
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
