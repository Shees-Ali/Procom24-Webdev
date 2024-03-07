import { Component, Inject, Injector } from '@angular/core';
import { BasePage } from '../../../base/base';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrl: './qr-scan.component.scss'
})
export class QrScanComponent extends BasePage {
  isQRuploaded: boolean = false;
  constructor(injector: Injector){
    super(injector);
  }

  onSubmit() {
    
  }

  onFileSelected($event: any) {
    if ($event.target.files && $event.target.files.length > 0) {
      console.log("Image Uploaded");
      this.isQRuploaded = true;
    }
  }
}
