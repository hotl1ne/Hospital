import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css',
  encapsulation: ViewEncapsulation.None
})
export class PdfViewerComponent {
  @Input() pdfFileName!: string; 
  @Input() pdfFilePath!: string; 

  

  openPdf() {
    window.open(this.pdfFilePath, '_blank'); 
  }
}
