import { Injectable } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { Survey } from '../../../../models/Dashboard/IDashboard.module';
import { ChartData } from '../../../../models/Dashboard/LineChartData.module';
import { BarChartData } from '../../../../models/Dashboard/BarChartData.module';
import { Observable } from 'rxjs';
import { PDFs } from '../../../../models/Dashboard/IPDFFiles.module';

@Injectable({
  providedIn: 'root'
})
export class DashboardDataService {

  constructor(private service: DashboardService) { }

  public async initPatientSurvey(): Promise<Survey> {
    const survey = await this.service.getPatientInfo().toPromise();
    return {
      opd: survey.opd,
      relieved: survey.relieved,
      inPatient: survey.inPatient,
      ventilator: survey.ventilator,
    };
  }

  public initLineChartData(lineChartData: ChartData[]){
    this.service.getLineChartsData().subscribe(data => {
      const numericalData = data.map(item => {
        return Object.values(item).filter(value => typeof value === 'number');
      });
      
      lineChartData[0].data = numericalData[0];
      lineChartData[1].data = numericalData[1];
      
    });  
  }

  public initBarChartData(barChartData: BarChartData[]){
    this.service.getBarChartsData().subscribe(data => {
      const numericalData = data.map(item => {
        return Object.values(item).filter(value => typeof value === "number");
      });

      barChartData[0].data = numericalData[0];
      barChartData[1].data = numericalData[1];
      barChartData[2].data = numericalData[2];
    })
  }


  public initPdfsData(pdfsData: PDFs[]){
    this.service.getPdfsRoute().subscribe(data => {
      pdfsData.push(...data);
    })
  }

}
