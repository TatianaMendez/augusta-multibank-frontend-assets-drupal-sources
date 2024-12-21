import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit, HostListener} from '@angular/core';
import { SharedService } from '../shared.service'; 

@Component({
  selector: 'app-prueba-selphi',
  standalone: true,
  imports: [],
  templateUrl: './prueba-selphi.component.html',
  styleUrl: './prueba-selphi.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PruebaSelphiComponent implements OnInit {

constructor(private sharedService: SharedService) {}

ngOnInit(): void {
    this.sharedService.setComponentReady(true);
    (window as any).sharedService = this.sharedService;
}


@HostListener('emitExtraData', ['$event'])
emitExtraData(event: CustomEvent) {
  console.log('extraData', event.detail);
}


public myExposedMethod() {
    console.log('Método del componente llamado desde un script externo');
  }

  onExtractionFinished(event: any) {
    console.log('Selphi onExtractionFinished event:', event);
  }

  onExceptionCaptured(event: any) {
    console.log('Selphi onExceptionCaptured event:', event);
  }

  onUserCancel(event: any) {
    console.log('Selphi userCancel event:', event);
  }

  emitExtraDatal(event: any) {
    console.log('Selphi extraData event:', event);
  }

}
