import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-void',
  standalone: true,
  imports: [],
  templateUrl: './void.component.html',
  styleUrl: './void.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class VoidComponent {
  constructor(private router: Router) {}

  selphi(event: any) {
    console.log('void selphi button', event);
    this.router.navigate(['/biometrics/selphi']);
  }

  selphid(event: any) {
    console.log('void selphid button', event);
    this.router.navigate(['/biometrics/selphid']);
  }
  
  form(event: any) {
    console.log('void form button', event);
    this.router.navigate(['/biometrics/form']);
  }

  mathilde(event: any) {
    console.log('void form button', event);
    this.router.navigate(['/biometrics/mathilde']);
  }
}
