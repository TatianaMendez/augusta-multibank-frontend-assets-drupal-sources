import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathildeComponent } from './mathilde.component';

describe('MathildeComponent', () => {
  let component: MathildeComponent;
  let fixture: ComponentFixture<MathildeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MathildeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MathildeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
