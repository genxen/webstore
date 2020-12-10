import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { Error404Component } from './error404/error404.component';
import { AuthGuard } from './auth.guard';


const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/accueil'}
  , { path: 'accueil', component: HomeComponent}
  , { path: 'a-propos', component: AboutComponent}
  , { path: 'boutique', component: ProductsComponent}
  , { path: 'produits', component: ProductsComponent, canActivate: [
    AuthGuard
  ]}
  , { path: 'tout-choco'
      , component: ProductsComponent
      , data: {name_like: 'choco'}
    }
  , { path: '10-premier-produits', component: ProductsComponent}
  , { path: 'fiche-produit/:id', component: ProductDetailComponent}
  , { path: 'formulaire-produit/:id', component: ProductFormComponent}
  , { path: 'aide', component: HelpComponent}
  , { path: 'page-non-trouvee', component: Error404Component }
	, { path: 'admin', component: ProductsComponent, data: { admin: true}}
  ,	{ path: '**', redirectTo: '/page-non-trouvee' }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
