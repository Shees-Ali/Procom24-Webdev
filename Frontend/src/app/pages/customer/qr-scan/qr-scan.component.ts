import { Component, Inject, Injector, OnInit } from '@angular/core';
import { BasePage } from '../../../base/base';
import QRCode from 'qrcode-generator';
import jsQR from 'jsqr';

@Component({
  selector: 'app-qr-scan',
  templateUrl: './qr-scan.component.html',
  styleUrl: './qr-scan.component.scss'
})
export class QrScanComponent extends BasePage{
  isQRuploaded: boolean = false;
  QRScannedData:any;
  constructor(injector: Injector){
    super(injector);
  }

  onSubmit() {
    
  }

  async decodeQRCode(imageData: ImageData): Promise<string | null> {
    const code = jsQR(imageData.data, imageData.width, imageData.height);
    if (code) {
      return code.data;
    }
    return null;
  }

  async onFileSelected(event: any) {
    const file = event.target.files[0];
    const image = new Image();
    image.src = URL.createObjectURL(file);
    image.onload = async () => {
      const canvas = document.createElement('canvas');
      canvas.width = image.width;
      canvas.height = image.height;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(image, 0, 0, image.width, image.height);
        const imageData = context.getImageData(0, 0, image.width, image.height);
        const decodedData = await this.decodeQRCode(imageData);
        if (decodedData) {
          const parsedData = this.parseQRData(decodedData);
          this.isQRuploaded = true;
          this.QRScannedData = await parsedData;
        } else {
          console.error('QR code not found');
        }
      }
    };
  }

  parseQRData(data: string): any {
    var parsedValues: any = {};
    while (data) {
      const valueNumber = data.slice(0, 2);
      const valueSize = parseInt(data.slice(2, 4), 10);
      const value = data.slice(4, 4 + valueSize);
      switch (valueNumber) {
        case '01':
          parsedValues.username = value;
          break;
        case '02':
          parsedValues.email = value;
          break;
        case '03':
          parsedValues.amount = parseFloat(value);
          break;
        case '04':
          parsedValues.accountNumber = value;
          break;
        case '05':
          parsedValues.merchantAccountNumber = value;
          break;
        case '06':
          parsedValues.bank = value;
          break;
        case '07':
          parsedValues.paymentPurpose = value;
          break;
        
        default:
          break;
      }

      data = data.slice(4 + valueSize);
    }
    return parsedValues;
  }
}
