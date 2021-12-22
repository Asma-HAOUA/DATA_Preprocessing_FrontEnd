import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NettoyerDatasetComponent } from './nettoyer-dataset.component';

describe('NettoyerDatasetComponent', () => {
  let component: NettoyerDatasetComponent;
  let fixture: ComponentFixture<NettoyerDatasetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NettoyerDatasetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NettoyerDatasetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
