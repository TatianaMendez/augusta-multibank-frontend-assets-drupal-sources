import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaSelphiComponent } from './prueba-selphi.component';

describe('PruebaSelphiComponent', () => {
  let component: PruebaSelphiComponent;
  let fixture: ComponentFixture<PruebaSelphiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaSelphiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaSelphiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
