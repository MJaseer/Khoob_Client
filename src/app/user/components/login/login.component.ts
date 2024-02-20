import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Subject } from 'rxjs/internal/Subject';
import { UserService } from '../../services/user.service';
import { SignupUser, loginReq } from '../../../interfaces/shared';
import Swal from 'sweetalert2';
import { HelperService } from '../../services/helper.service';

export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private helperService: HelperService
  ) { }

  loginForm = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]]
  })

  loginFormPhone = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    phone: [0, [Validators.required, Validators.minLength(9), Validators.maxLength(11)]]
  })

  loginFormOTP = this.formBuilder.group({
    phone: [0, [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
    otp: ['']
  })


  registerForm = this.formBuilder.group({
    firstName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.email]],
    phone: [0, [Validators.required, Validators.minLength(9), Validators.maxLength(11)]],
    confirmPassword: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
  })

  userData: any

  item = 'login'

  isSubmitted = false
  passWordErr = ''

  otp!: string;
  inputDigitLeft: string = "Verify code";
  btnStatus: string = "btn-light";

  public configOptions = {
    length: 6,
    inputClass: 'digit-otp',
    containerClass: 'flex justify-between'
  }

  onOtpChange(event: any) {
    this.otp = event;
    if (this.otp.length < this.configOptions.length) {
      this.inputDigitLeft = this.configOptions.length - this.otp.length + " digits Left";
      this.btnStatus = 'btn-light';
    }

    if (this.otp.length == this.configOptions.length) {
      this.inputDigitLeft = "Let's go!";
      this.btnStatus = 'btn-primary';

      this.otpValidater()
    }
  }

  otpValidater() {
    const value = this.otp
    this.userData.otp = value
    // this.service.otpPost(this.userData).subscribe(
    //   (result) => {
    //     localStorage.removeItem('userData')
    //     console.log(result);
    //     this.router.navigate(['/login'])
    //   }, (err: any) => {
    //     console.log(err);
    //     Swal.fire('Error',err.error,'error')
    //   }
    // )
  }

  login() {
    console.log(this.loginForm.value);

    this.isSubmitted = true
    if (this.loginForm.invalid) {
      console.log('invallid form');
      
      return
    } else {

      const data = this.loginForm.value as loginReq
      console.log(data);

      this.userService.login(data).subscribe((res) => {
        console.log(res);
          this.helperService.setToken(res)
          this.dialogRef.close()
          Swal.fire({
            title: "Successfully registered",
            icon: "success"
          })
      })
    }
  }

  register() {
    console.log(this.registerForm.value);

    const data = this.registerForm.value as SignupUser
    console.log(data);

    this.isSubmitted = true
    if (this.registerForm.invalid) {
      return
    } else {
      this.userService.register(data).subscribe((res) => {
        console.log(res);
          Swal.fire({
            title: "Successfully registered",
            icon: "success"
          })
      })
    }
  }


}
