import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DimReductionComponent } from './dim-reduction.component';

describe('DimReductionComponent', () => {
  let component: DimReductionComponent;
  let fixture: ComponentFixture<DimReductionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DimReductionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DimReductionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
