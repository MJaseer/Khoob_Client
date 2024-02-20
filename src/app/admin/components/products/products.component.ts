import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../../user/services/user.service';
import { HelperService } from '../../services/helper.service';
import { ProductReq } from '../../../interfaces/shared';
import Swal from 'sweetalert2';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  constructor(
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private helperService: HelperService
  ) { }

  productForm = this.formBuilder.group({
    author: ['', Validators.required],
    category: ['', Validators.required],
    description: ['', Validators.required],
    image: [[''], Validators.required],
    isAvailable: [true, Validators.required],
    name: ['', Validators.required],
  })

  isSubmitted = false
  passWordErr = ''

  files: any[] = []
  uploadFiles(event: any) {
    var files = event.target.files; //FileList object

    var filesLength = files.length;
    console.log(files);
    debugger
    this.files = files
  }

  addProduct() {
    console.log(this.productForm.value);
    console.log(this.files);
    var filesLength = this.files.length;
    let formData = new FormData();

    for (let i = 0; i < filesLength; i++) {
      let f = this.files[i]
      formData.append(`document${i}`, f);
    }
    formData.forEach((value:any, key) => {
      console.log(`Key: ${key}, Value: ${value.name}${value.size}`);
  
    });


    debugger
    this.isSubmitted = true
    if (this.productForm.invalid) {
      console.log('invallid form');

      return
    } else {

      const data = this.productForm.value as ProductReq
      console.log(data);

      this.adminService.addProduct(data).subscribe((res) => {
        console.log(res);
        Swal.fire({
          title: "Successfully added",
          icon: "success"
        })
      })
    }
  }

}
