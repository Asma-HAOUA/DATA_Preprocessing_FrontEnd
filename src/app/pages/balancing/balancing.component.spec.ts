import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BalancingComponent } from './balancing.component';

describe('BalancingComponent', () => {
  let component: BalancingComponent;
  let fixture: ComponentFixture<BalancingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BalancingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BalancingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
