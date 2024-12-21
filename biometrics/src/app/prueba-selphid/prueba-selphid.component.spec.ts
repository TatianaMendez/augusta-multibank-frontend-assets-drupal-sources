import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSelphidComponent } from './prueba-selphid.component';

describe('PruebaSelphidComponent', () => {
  let component: PruebaSelphidComponent;
  let fixture: ComponentFixture<PruebaSelphidComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaSelphidComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaSelphidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
