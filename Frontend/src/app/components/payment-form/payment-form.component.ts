import { Component, Injector, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BasePage } from '../../base/base';
import QRCode from 'qrcode-generator';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrl: './payment-form.component.scss',
})
export class PaymentFormComponent extends BasePage implements OnInit {
  @Input() isCustomer: boolean | undefined;
  @Input() qrScanData!:any;
  paymentForm!: FormGroup<any>;
  user: any;
  qrCodeImageUrl!: string;
  constructor(injector: Injector) {
    super(injector);
    this.paymentForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: [''],
      amount: ['', Validators.required],
      accountNumber: ['', Validators.required],
      merchantAccountNumber: ['', Validators.required],
      bank: ['', Validators.required],
      paymentPurpose: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.getCurrentUser();
    this.setScannedData();
  }

  setScannedData(){
    setTimeout(()=>{
      if(this.qrScanData != null){
        const userPatchData = {
          username: this.qrScanData.username,
          email: this.qrScanData.email,
          amount: this.qrScanData.amount,
          merchantAccountNumber : this.qrScanData.merchantAccountNumber,
          accountNumber: this.qrScanData.accountNumber,
          bank: this.qrScanData.bank,
          paymentPurpose : this.qrScanData.paymentPurpose
        };
        this.paymentForm.patchValue(userPatchData);
      }
    },200)
  }

  async getCurrentUser() {
    this.user = await this.userService.getCurrentUser();
    const userPatchData = {
      username: this.user.username,
      email: this.user.email,
      accountNumber: this.user.accountNumber,
    };
    this.paymentForm.patchValue(userPatchData);
  }

  async Submit() {
    this.utility.showLoader();
    if (this.paymentForm.invalid) {
      this.utility.presentAlert('Fill All Fields');
      return;
    }

    const res = await this.network.createOrder(this.paymentForm.value);
    if (res.data) {
      //Generate QR Code
      if(this.isCustomer != true){
        const qrData = this.formatQRData(this.paymentForm.value);
        this.generateQRCode(qrData);
      }
      this.utility.presentSuccessAlert(res.message);
      // this.router.navigate(['customer/dashboard/payment']);
    }
  }

  formatQRData(formValues: any): string {
    const formatField = (value: string, type: string): string => {
      const lengthPrefix = value ? value.length.toString().padStart(2, '0') : '00';
      return `${type}${lengthPrefix}${value}`;
    };
  
    const username = formatField(formValues.username, '01');
    const email = formatField(formValues.email, '02');
    const amount = formatField(formValues.amount.toString(), '03');
    const accountNumber = `0417${formValues.accountNumber}`;
    const merchantAccountNumber = `0517${formValues.merchantAccountNumber}`;
    const bank = formatField(formValues.paymentPurpose, '06');
    const paymentPurpose = formatField(formValues.paymentPurpose, '07');
  
    return `${username}${email}${amount}${accountNumber}${merchantAccountNumber}${bank}${paymentPurpose}`;
  }

  generateQRCode(data: string) {
    const qr = QRCode(0, 'L');
    qr.addData(data);
    qr.make();
    const qrImage = qr.createDataURL(4, 0);
    this.qrCodeImageUrl = qrImage;

    // Do something with the generated QR code image
  }

  downloadQRCode() {
    const link = document.createElement('a');
    link.download = 'qr-code.png';
    link.href = this.qrCodeImageUrl;
    link.click();
  }
}
