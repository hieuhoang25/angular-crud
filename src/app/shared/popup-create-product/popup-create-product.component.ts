import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'app-popup-create-product',
  templateUrl: './popup-create-product.component.html',
  styleUrls: ['./popup-create-product.component.css']
})
export class PopupCreateProductComponent implements OnInit {
  constructor(private dialogRef: MatDialogRef<PopupCreateProductComponent>,@Inject(MAT_DIALOG_DATA) public data: IProduct) { 
    console.log(data)
  }

  ngOnInit(): void {
  }
  onNoClick(){
    this.dialogRef.close();
  }

}
