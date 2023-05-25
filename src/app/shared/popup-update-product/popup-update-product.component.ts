import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'app-popup-update-product',
  templateUrl: './popup-update-product.component.html',
  styleUrls: ['./popup-update-product.component.css']
})
export class PopupUpdateProductComponent implements OnInit {
  
  constructor(private dialogRef: MatDialogRef<PopupUpdateProductComponent>,@Inject(MAT_DIALOG_DATA) public data: IProduct) { 
    console.log(data)
  }

  ngOnInit(): void {
  }
  onNoClick(){
    this.dialogRef.close();
  }

}
