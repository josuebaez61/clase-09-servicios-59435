import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import Swal, { SweetAlertIcon, SweetAlertOptions } from 'sweetalert2';

@Injectable({ providedIn: 'root' })
export class AlertService {
  private _showTitle$ = new Subject<boolean>();
  showTitle$ = this._showTitle$.asObservable();

  private _alert$ = new Subject<SweetAlertOptions>();
  alert$ = this._alert$.asObservable();

  showTitle(): void {
    this._showTitle$.next(true);
  }

  subscribeToAlerts(): void {
    this.alert$.subscribe({
      next: (opts) => {
        Swal.fire(opts);
      },
    });
  }

  showAlert(options: SweetAlertOptions) {
    this._alert$.next(options);
  }
}
