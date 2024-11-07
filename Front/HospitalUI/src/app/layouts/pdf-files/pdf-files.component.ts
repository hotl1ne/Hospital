import { Component } from '@angular/core';
import { PdfViewerComponent } from "../pdf-viewer/pdf-viewer.component";
import { StatusPagService } from '../../core/services/PageStatus/status-pag.service';

@Component({
  selector: 'app-pdf-files',
  standalone: true,
  imports: [PdfViewerComponent],
  templateUrl: './pdf-files.component.html',
  styleUrl: './pdf-files.component.css'
})
export class PdfFilesComponent {

  constructor(private statusService: StatusPagService) {}

  pdfPaths = [
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf',
    'assets/pdfs/Blood Test Results.pdf'
  ];


  changeView(): void {
    this.statusService.changeView(1); 
  }

  setPdfs(pdfs: string[]){
    
  this.pdfPaths = pdfs;

  }

  getPdfFileName(pdfPath: string): string {
    const parts = pdfPath.split('/');
    return parts[parts.length - 1]; 
  }

}
