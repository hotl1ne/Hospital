import { Component, EventEmitter, input, Input, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() totalPages: number = 10; 
  @Input() currentPage: number = 1;
  @Input() shownOnPage: number = 1;
  @Input() totalInfo: number = 1; 
  @Output() pageChanged: EventEmitter<number> = new EventEmitter<number>();

  getPages(): number[] {
    const visiblePages: number[] = [];

    visiblePages.push(1);
    if (this.totalPages > 1) {
      visiblePages.push(2);
    }

    if (this.currentPage > 4) {
      visiblePages.push(-1); 
    }

    const start = Math.max(3, this.currentPage - 1);
    const end = Math.min(this.totalPages - 1, this.currentPage + 1);

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    if (this.currentPage < this.totalPages - 3) {
      visiblePages.push(-1); 
    }
    
    if (this.totalPages > 2) {
      visiblePages.push(this.totalPages);
    }

    return visiblePages;
  }

  onPageClick(page: number): void {
    if (page !== -1 && page !== this.currentPage) {
      this.pageChanged.emit(page);
    }
  }

  onNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChanged.emit(this.currentPage + 1);
    }
  }

  onPreviousPage(): void {
    if (this.currentPage > 1) {
      this.pageChanged.emit(this.currentPage - 1);
    }
  }
}
