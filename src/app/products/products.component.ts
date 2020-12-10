import { Component, OnInit } from '@angular/core';
import { Product } from './product';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:Product[] = [];
  selectedProduct: Product;
  myComment: string = 'Produit sélectionné!';
  firstProductDetailClose: boolean = false;
//  showProducts: boolean = false;
  selectedProductClosed: boolean = false;

  constructor(
    private ps: ProductService
    , private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts(){
    this
      .ps
      .getProducts(this.getParams())
      .subscribe(
        products => this.products = products
        //alternative par variable
        // products = > {
        //   this.products = products;
        //   this.showProducts = this.products.length;
        // }
        , () => console.log('Erreur chargement produits')
      );
  }

  selectProduct(p:Product){
    this.selectedProduct = p;
  }

  showProducts():boolean {
    return this.products && (this.products.length > 0);
  }

  closeFirstWindow(closeEventValue:boolean){
    this.firstProductDetailClose = closeEventValue;
  }

  getParams():any{
    let _r = {};
    Object.assign(_r,this.route.snapshot.queryParams);
    Object.assign(_r,this.route.snapshot.params);
    Object.assign(_r,this.route.snapshot.data);
    return _r;
  }

  productDeleted(p:Product){
    this.products.splice(this.products.indexOf(p),1);
  }
  productCreated(p:Product){
    this.products.push(p);
  }
}
