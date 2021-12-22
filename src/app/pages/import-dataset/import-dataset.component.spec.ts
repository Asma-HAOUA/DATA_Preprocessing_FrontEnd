import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportDatasetComponent } from './import-dataset.component';

describe('ImportDatasetComponent', () => {
  let component: ImportDatasetComponent;
  let fixture: ComponentFixture<ImportDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImportDatasetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
