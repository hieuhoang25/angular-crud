import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IApiResponse } from '../model/response.model';
import { environment } from 'src/environments/environment';
import { IProduct } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {
   }
  
   getAll(){
    return this.http.get<IApiResponse<IProduct>>(environment.baseUrl+"/products");
   }
   deleteProduct(product: IProduct){
    return this.http.delete<IApiResponse<Object>>(environment.baseUrl+`/products/${product.id}`);
   }
   updateProduct(product: IProduct){
    return this.http.put<IApiResponse<IProduct>>(environment.baseUrl+"/products", product);

   }
   createProduct(product: IProduct){
    return this.http.post<IApiResponse<IProduct>>(environment.baseUrl+"/products", product);
   }
  
}
