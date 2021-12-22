import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerInfiniesComponent } from './supprimer-infinies.component';

describe('SupprimerInfiniesComponent', () => {
  let component: SupprimerInfiniesComponent;
  let fixture: ComponentFixture<SupprimerInfiniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerInfiniesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerInfiniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
