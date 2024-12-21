import { Component, AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-mathilde',
  standalone: true,
  imports: [],
  templateUrl: './mathilde.component.html',
  styleUrl: './mathilde.component.css'
})
export class MathildeComponent implements AfterViewInit {

  ngAfterViewInit(): void {
        const widget = document.querySelector('facephi-selphid-widget');

        widget?.addEventListener('extractionFinish', (event) => {
          console.log('Extracción completada:', event);
        });

        widget?.addEventListener('exceptionCaptured', (event) => {
          console.error('Error en el widget:', event.detail);
        });

        widget?.addEventListener('moduleLoaded', (event) => {
          console.error('moduleLoaded en el widget:', event);
        });

        widget?.addEventListener('trackStatus', (event) => {
          console.error('trackStatus en el widget:', event);
        });

        widget?.addEventListener('extractionTimeout', (event) => {
          console.error('extractionTimeout en el widget:', event);
        });

        widget?.addEventListener('userCancel', (event) => {
          console.warn('Proceso cancelado por el usuario:', event.detail);
        });
  }
}
