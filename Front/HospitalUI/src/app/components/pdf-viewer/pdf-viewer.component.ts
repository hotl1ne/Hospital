import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-pdf-viewer',
  standalone: true,
  imports: [],
  templateUrl: './pdf-viewer.component.html',
  styleUrl: './pdf-viewer.component.css'
})
export class PdfViewerComponent {
  @Input() pdfFileName!: string; // Input property to accept the PDF file name
  @Input() pdfFilePath!: string; // Input property to accept the PDF file path

  openPdf() {
    window.open(this.pdfFilePath, '_blank'); // Open the PDF in a new window/tab
  }
}
