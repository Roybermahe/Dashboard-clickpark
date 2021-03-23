import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {

  constructor(
    private toastr: ToastrService
  ) { }

  onError(message: string) {
    this.toastr.error(message, '', {
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-primary alert-with-icon",
      positionClass: 'toast-bottom-right'
    });
  }

  onShow(message: string) {
    this.toastr.show(message, '', {
      timeOut: 5000,
      closeButton: true,
      enableHtml: true,
      toastClass: "alert alert-info alert-with-icon",
      positionClass: 'toast-bottom-right'
    });
  }
}
