import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../user/services/user.service';
import { HelperService } from '../../services/helper.service';
import Swal from 'sweetalert2';
import { loginReq } from '../../../interfaces/shared';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrl: './login-admin.component.css'
})
export class LoginAdminComponent {

  constructor(
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
    console.log(this.userData);

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
        Swal.fire({
          title: "Successfully registered",
          icon: "success"
        })
      })
    }
  }

}
