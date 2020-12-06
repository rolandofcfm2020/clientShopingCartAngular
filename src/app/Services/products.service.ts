import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient : HttpClient) { }


  getProducts()
  {
    return this.httpClient.get("https://localhost:44389/api/products/getAllProducts");
  
  }

  saveProductCartToServer(shopingCartList)
  {

    return this.httpClient.post("https://localhost:44389/api/products/saveProductCart",shopingCartList);
  }

}

