import { Component, OnInit } from '@angular/core';
import { ProductService } from './products/product.service';
import { Category } from './products/category';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'WebStore';
  version = 2;
  categories:Category[];

  constructor(
    private ps: ProductService
    ,public router: Router
  ){ }

  ngOnInit() {
    this.getCategories();

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };

//     this.router.events.subscribe((evt) => {

//       if (evt instanceof NavigationEnd) {

//          this.router.navigated = false;
// //          this.router.onSameUrlNavigation = 'reload';
//        }
//     });

  }

  getCategories() {
    this
      .ps
      .getCategories()
      .subscribe(cs => this.categories = cs);
  }

  showVersion():string{
    return this.version + '.0';
  }
}
