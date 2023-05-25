import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef , MatDialog} from '@angular/material/dialog';
import { IProduct } from 'src/app/model/product.model';

@Component({
  selector: 'app-popup-delete-product',
  templateUrl: './popup-delete-product.component.html',
  styleUrls: ['./popup-delete-product.component.css']
})
export class PopupDeleteProductComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PopupDeleteProductComponent>,@Inject(MAT_DIALOG_DATA) public data: IProduct) {
   }

  ngOnInit(): void {
  }
  onNoClick(): void {
    this.dialogRef.close();
  }
}
