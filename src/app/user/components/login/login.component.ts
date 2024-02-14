import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog'
import { Subject } from 'rxjs/internal/Subject';

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
    private formBuilder: FormBuilder
  ) { }

  loginForm = this.formBuilder.group({
    password: ['',  [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    userName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]]
  })

  registerForm = this.formBuilder.group({
    firstname:['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    lastName: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    email: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    phone: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    confirmPassword: ['',  [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
    password: ['',  [Validators.required, Validators.minLength(8), Validators.maxLength(15)]],
  })

  item = 'login'

  isSubmitted = false
  passWordErr = ''

  login(){
    console.log(this.loginForm.value);
    
    this.isSubmitted=true
    if (this.loginForm.invalid){
      return
    }
    
    let userInfo={
      username : this.loginForm.value.userName,
      password : this.loginForm.value.password
    }
    this.dialogRef.close(userInfo)  
  }
  
  register(){
    console.log(this.registerForm.value);
    
    this.isSubmitted=true
    if (this.registerForm.invalid){
      return
    }
    
    let userInfo={
      username : this.registerForm.value.firstname,
      password : this.registerForm.value.password
    }
    this.dialogRef.close(userInfo)  
  }


}
