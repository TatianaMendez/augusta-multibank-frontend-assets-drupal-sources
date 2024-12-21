import { Routes } from '@angular/router';
import { VoidComponent } from './void/void.component';
import { PruebaSelphiComponent } from './prueba-selphi/prueba-selphi.component';
import { PruebaSelphidComponent } from './prueba-selphid/prueba-selphid.component';
import {MathildeComponent } from './mathilde/mathilde.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'biometrics/void',
    pathMatch: 'full',
  },
  {
    path: 'biometrics',
    redirectTo: 'biometrics/void',
    pathMatch: 'full',
  },
  {
    path: 'biometrics/mathilde',
    component: MathildeComponent,
  },
  {
    path: 'biometrics/void',
    component: MathildeComponent,
  },
  {
    path: 'biometrics/selphi',
    component: PruebaSelphiComponent,
  },
  {
    path: 'biometrics/selphid',
    component: PruebaSelphidComponent,
  },
];
