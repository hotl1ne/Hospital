import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfFilesComponent } from './pdf-files.component';

describe('PdfFilesComponent', () => {
  let component: PdfFilesComponent;
  let fixture: ComponentFixture<PdfFilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdfFilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdfFilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
