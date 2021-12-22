import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerDoublesComponent } from './supprimer-doubles.component';

describe('SupprimerDoublesComponent', () => {
  let component: SupprimerDoublesComponent;
  let fixture: ComponentFixture<SupprimerDoublesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerDoublesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerDoublesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
