import { AfterViewInit, Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { StatusPagService } from '../../core/services/PageStatus/status-pag.service';

@Component({
  selector: 'app-general-report',
  standalone: true,
  imports: [],
  templateUrl: './general-report.component.html',
  styleUrl: './general-report.component.css'
})
export class GeneralReportComponent implements AfterViewInit {

  @ViewChildren('animatedProgress') animatedProgressElements!: QueryList<ElementRef>;

  constructor(private statusService: StatusPagService) {}

  ngAfterViewInit(): void {
    this.animateProgressBars();
  }

  changeView(): void {
    this.statusService.changeView(0); 
  }

  private animateProgressBars(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const progressElement = entry.target as HTMLElement;
        const span = progressElement.querySelector('span') as HTMLElement;
        const progress = span.getAttribute('data-progress');

        if (progress) {
          const progressValue = parseInt(progress, 10);

          if (entry.isIntersecting) {
            span.style.transition = 'width 3s ease';
            span.style.width = '0%'; 

            setTimeout(() => {
              span.style.width = `${progressValue}%`;
            }, 50); 
          } else {
            span.style.width = '0%';
          }
        }
      });
    });

    this.animatedProgressElements.forEach((progressElement) => {
      observer.observe(progressElement.nativeElement);
    });
  }

}
