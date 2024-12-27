import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LineChartsData } from '../../../models/Dashboard/ILineCharts.module';
import { BarChartData } from '../../../models/Dashboard/IBarCharts.module';
import { PDFs } from '../../../models/Dashboard/IPDFFiles.module';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private apiUrl = 'https://localhost:7038/api/dashboard';

  constructor(private http: HttpClient) { }


  getPatientInfo(): Observable<any>
  {
    return this.http.get(`${this.apiUrl}/getPatientInfo`);
  }

  getLineChartsData(): Observable<LineChartsData[]>
  {
    return this.http.get<LineChartsData[]>(`${this.apiUrl}/getLineCharts`);
  }

  getBarChartsData(): Observable<BarChartData[]>
  {
    return this.http.get<BarChartData[]>(`${this.apiUrl}/getBarCharts`);
  } 

  getPdfsRoute(): Observable<PDFs[]> 
  {
    return this.http.get<PDFs[]>(`${this.apiUrl}/getPdfsPath`)
  }
}
