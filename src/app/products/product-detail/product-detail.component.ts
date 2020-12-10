import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  @Input() product:Product;
  @Input() comment:string = 'L\'abus d\'alcool nuit à la santé... mangez 7 fruits et légumes frais par jour??? et fumer tue ! On vous a mis des cookies!!!';
  @Input() loadMessage: string = 'Chargement du produit en cours...';
  @Output() close: EventEmitter<boolean> = new EventEmitter();

  constructor(
    private ps:ProductService
    , private route: ActivatedRoute
    , private router: Router
  ) { }

  ngOnInit() {
    if(!this.product){this.loadProduct();};
  }

  loadProduct(){

    let _id = this.route.snapshot.params.id;

    if( _id){
      this
      .ps
      .getProduct(_id)
      .subscribe(
        p => this.product = p
        , () => { this.router.navigate(['/page-non-trouvee'])}
      );

      //version liste
      // this
      // .ps
      // .getProducts({id:_id})
      // .subscribe(p => this.product = p[0]);
    }
  }

  catName(){
    return this.ps.getCategoryName(this.product.idCat);
  }

  closeWindow(){
    this.close.emit(true);
  }

}
