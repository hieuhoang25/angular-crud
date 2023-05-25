import { Component, OnInit } from '@angular/core';
import {AfterViewInit, ViewChild} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { IProduct } from 'src/app/model/product.model';
import { ProductService } from 'src/app/services/product.service';
import { PopupCreateProductComponent } from 'src/app/shared/popup-create-product/popup-create-product.component';
import { PopupDeleteProductComponent } from 'src/app/shared/popup-delete-product/popup-delete-product.component';
import { PopupUpdateProductComponent } from 'src/app/shared/popup-update-product/popup-update-product.component';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['id', 'name', 'description', 'price','quantity','action'];
  dataSource = new MatTableDataSource<IProduct>();
  loader: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    console.log(this.paginator)
  }
  constructor(private productService: ProductService, public dialog: MatDialog){

  }

  openCreateDialog(){
    const data = {

    }
    const dialogRef = this.dialog.open(PopupCreateProductComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productService.createProduct(result).subscribe(result => {
        if (result.statusCode === 200){
          this.getAll();
        }
      });
    });
  }

  openDialog(data:IProduct): void {
    const dialogRef = this.dialog.open(PopupDeleteProductComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productService.deleteProduct(result).subscribe(result => {
        if (result.statusCode === 200){
          
          this.getAll();
        }
      });
      
    });
  }

  openUpdateDialog(data: IProduct): void{
    const dialogRef = this.dialog.open(PopupUpdateProductComponent, {
      data
    });

    dialogRef.afterClosed().subscribe(result => {
      this.productService.updateProduct(result).subscribe(result => {
        if (result.statusCode === 200){
          this.getAll();
        }
      });
      
    });
  }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.loader = true;
    this.productService.getAll().subscribe(data => {
      console.log(data)
      this.dataSource.data = data.data;
      this.loader = false;
    })
  }
  deleteProduct(id: number){

  }

}
export interface PeriodicElement {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

