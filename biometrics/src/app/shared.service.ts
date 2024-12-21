import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private componentReadySource = new BehaviorSubject<boolean>(false); 
  componentReady$ = this.componentReadySource.asObservable();

  setComponentReady(isReady: boolean) {
    this.componentReadySource.next(isReady);
  }
}
