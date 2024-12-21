import { CUSTOM_ELEMENTS_SCHEMA, Component, AfterViewInit, HostListener  } from '@angular/core';

@Component({
  selector: 'app-prueba-selphid',
  standalone: true,
  imports: [],
  templateUrl: './prueba-selphid.component.html',
  styleUrl: './prueba-selphid.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PruebaSelphidComponent implements AfterViewInit {

  ngAfterViewInit(): void {
        const widget = document.querySelector('facephi-selphid-widget');

        // widget?.addEventListener('extractionFinish', (event) => {
        //   console.log('Extracción completada:', event);

        //   // Extracción de data (Nombre/Apellido)
        //   const mthEventFirstName = event.detail.detail.extractionData?.firstName;
        //   const mthFirstName = mthEventFirstName?.split(" ")[0];
        //   const mthSecondName = mthEventFirstName?.split(" ")[1];

        //   const mthEventLastName = event.detail.detail.extractionData?.lastName;
        //   const mthFirstLastName = mthEventLastName?.split(" ")[0];
        //   const mthSecondLastName = mthEventLastName?.split(" ")[1];

        //   // Extracción de data (Fecha de nacimiento)
        //   const mthDateOfBirth = event.detail.detail.extractionData?.dateOfBirth;
        //   const mthDayBirth = mthDateOfBirth?.split("-")[0];
        //   const mthMonthBirth = mthDateOfBirth?.split("-")[1];
        //   const mthYearBirth = mthDateOfBirth?.split("-")[2];

        // const eventData = {
        //     firstName: mthFirstName, 
        //     secondName:mthSecondName,
        //     firstLastName:mthFirstLastName,
        //     secondLastName:mthSecondLastName,
        //     documentNumber: event.detail.detail.extractionData?.documentNumber,
        //     documentTypeString: event.detail.detail.extractionData?.documentType,
        //     documentCountryIssuer: event.detail.detail.extractionData?.documentCountryIssuer,
        //     dayBirth: mthDayBirth, 
        //     monthBirth: mthMonthBirth, 
        //     mthYearBirth: mthYearBirth
        // };

        // localStorage.setItem('mthDocumentEvent', JSON.stringify(eventData));
        // });

        widget?.addEventListener('exceptionCaptured', (event) => {
          console.error('Error en el widget:', event.detail);
        });

        widget?.addEventListener('userCancel', (event) => {
          console.warn('Proceso cancelado por el usuario:', event.detail);
        });
  }

  @HostListener('emitExtraData', ['$event'])
  emitExtraData(event: CustomEvent) {
    console.log('extraData', event.detail);
  }


  emitExtraDatal(event: any) {
    console.log('Selphid extraData event:', event);
  }
}
