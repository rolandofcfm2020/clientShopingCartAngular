import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

interface IProductDTO {
  title: string;
  cost: number;
  description: string;
  id: any;
  quantity: number;
}

@Component({
  selector: 'app-shoping-cart',
  templateUrl: './shoping-cart.component.html',
  styleUrls: ['./shoping-cart.component.css']
})
export class ShopingCartComponent implements OnInit {

  constructor(private productService: ProductsService) { }
  productsData: IProductDTO[];
  selectedProduct: IProductDTO; // apunta  a NULL
  productCookie: string;
  productCartItems: IProductDTO[];
  isProcessing: boolean;

  ngOnInit(): void {
    this.isProcessing = false;
    this.productsData = [];
    this.productCartItems = [];
    this.selectedProduct = <IProductDTO>{}; // = new IProductDTO()
    this.productService.getProducts()
      .subscribe((data: IProductDTO[]) => {
        debugger;
        this.productsData = data;
        this.selectedProduct = this.productsData[0];
      })



  }

  addToCart() {
    debugger;
    // alert("El producto que se va a agregar al carrito es: " + this.selectedProduct.title)
    this.selectedProduct.quantity = 1;
    this.productCartItems.push(this.selectedProduct)

  }

  deleteProduct(index: number) {
    debugger;
    this.productCartItems.splice(index, 1);
  }

  totalCart() {

    return this.productCartItems.
      reduce((acom, item) => acom + item.quantity * item.cost, 0);
  }

  saveShopingCart() {
    this.isProcessing = true;
    this.productService.saveProductCartToServer(this.productCartItems)
      .subscribe((data) => {
        this.productCartItems = [];
        this.isProcessing = false;

      })

    /////.
    

    ////

    ///
  }
}
