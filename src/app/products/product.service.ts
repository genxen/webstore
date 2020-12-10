import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './product';
import { ConfigService } from '../_services/config.service';
import { Category } from './category';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(
    private http: HttpClient
    , private config: ConfigService
  ) { }

  getProducts(params?:any):Observable<Product[]>{
    return this
      .http
      .get<Product[]>(
        this
          .config
          .getWsUrl()
        , { 
          params: params
        }
      )
      .pipe(
        map( products => products
            .map(
              product => new Product(product)
            )
        )
      );
  }

  getProduct(id:number):Observable<Product>{
    return this
      .http
      .get<Product>(`${this.config.getWsUrl()}/${id}`)
      .pipe(
        map( p => new Product(p))
      );
  }

  deleteProduct(id:number):Observable<any>{
    return this
      .http
      .delete<any>(`${this.config.getWsUrl()}/${id}`);
  }

  postProduct(p:Product):Observable<Product>{
    return this
      .http
      .post<Product>(this.config.getWsUrl(),p.toJSON());
  }

  getCategories():Observable<Category[]>{
    let _strCategories = localStorage.getItem('categories');
    return _strCategories?(of(JSON.parse(_strCategories))):(
      this
        .http
        .get<Category[]>(
        this
          .config
          .getWsUrl('categories')
        )
        .pipe(
          map(cs => {
            localStorage
              .setItem(
                'categories'
                ,JSON.stringify(cs)
              );
              return cs;
          })
        )
      );
  }

  getCategoryName(idCat:number):string{

    let _categories = JSON.parse(localStorage
      .getItem('categories'));

    return _categories.filter(c => c.id == idCat)[0].name;
  }
}
