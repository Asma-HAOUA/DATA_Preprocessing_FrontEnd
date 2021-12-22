import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerNullesComponent } from './supprimer-nulles.component';

describe('SupprimerNullesComponent', () => {
  let component: SupprimerNullesComponent;
  let fixture: ComponentFixture<SupprimerNullesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerNullesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerNullesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
