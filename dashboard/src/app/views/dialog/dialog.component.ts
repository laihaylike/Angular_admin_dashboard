import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/Services/api.service';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  public categoryProducts = [
    'Điện thoại',
    'Laptop',
    'Tablet',
    'Phụ kiện',
    'Smartwatch',
    'PC, Máy in'
  ]
  public freshnessProducts = ['Hàng mới', 'Hàng cũ', 'Hàng lỗi'];
  public productForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private api: ApiService) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      productName: ['', Validators.required],
      category: ['', Validators.required],
      date: ['', Validators.required],
      freshness: ['', Validators.required],
      price: ['', Validators.required],
      comment: ['']
    })
  }

  public addProduct(): void{
    if (this.productForm.valid){
      this.api.postProduct(this.productForm.value)
      .subscribe({
        next:(res: any)=>{
          alert("Thêm sản phẩm thành công");
          this.productForm.reset();
        },
        error:() => {
          alert("Thêm sản phẩm thất bại")
        }
      })
    }
  }

}
