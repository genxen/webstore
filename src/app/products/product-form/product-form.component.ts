import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit, OnChanges {

  @Output() create:EventEmitter<Product> = new EventEmitter();
  //read
  //update
  @Output() delete:EventEmitter<Product> = new EventEmitter();
  //close
  //reload
  //reset

  @Input() product: Product;
  productCopy: Product;
  @Input() categories: Category[];
  priceMin:number = 0.01;
  priceMax:number = 9999.99;

  constructor(
    private ps:ProductService
    , private route: ActivatedRoute
    , private router: Router
  ) { }

  ngOnInit() {
    if(this.product){
      this.copyProduct();
    } else {
      this.loadProduct();
    };
    this.getCategories();
  }

  ngOnChanges(){
    if(
      !this.productCopy
      || (this.product.id && ( this.productCopy.id != this.product.id))
    ){
      this.copyProduct();
    }
  }
  copyProduct(){
    if( this.product){
      this.productCopy = new Product(this.product);
    }
  }
  restoreProduct(){
    if(this.productCopy){
      Object.assign(this.product,this.productCopy);
    }
//    this.product = this.productCopy;//bad
  }

  getCategories(){
    this.ps.getCategories().subscribe(cs => this.categories = cs);
  }

  loadProductById(id:number){
    if( id){
      this
        .ps
        .getProduct(id)
        .subscribe(p => {
          if(p){
            if(!this.product){this.product = new Product()}
            Object.assign(this.product,p);
            this.copyProduct();
          }
        }
//        , () => this.loadProductError.apply(this,arguments)
        , (e) => this.loadProductError.call(this,e)
        );
    }
  }

  loadProductError(e:any){
    // console.log(JSON.stringify(e));
    // console.log(e);
    // console.log(e.constructor);
    if( 404 == e.status){
      alert('Pas trouvé !');
      this.router.navigate(['/page-non-trouvee']);
    }
  }

  loadProduct(){
    let _id = this.route.snapshot.params.id;
    this.loadProductById(_id);
  }

  //CRUD
  newProduct(){
    this.product = new Product();
  }
  deleteProduct(){
    this
      .ps
      .deleteProduct(this.product.id)
      .subscribe(
        () => {
          this.delete.emit(this.product);
          this.product = null;
        }
      );
  }
  reloadProduct(){
    this.loadProductById(this.product.id);
  }
  resetProduct(){
    this.restoreProduct();
  }
  saveProduct(){
    //NOP
    if(this.product.id){
      //mise à jour

    } else {
      //nouveau produit
      this
        .ps
        .postProduct(this.product)
        .subscribe(p => {
          //Object.assign(this.product, p);//bonne méthode
          this.product.id = p.id;
          this.copyProduct();
          this.create.emit(this.product);
        });
    }
  }

}
