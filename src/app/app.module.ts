import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { SpinnerComponent } from './_utils/spinner/spinner.component';
import { ProductFormComponent } from './products/product-form/product-form.component';
import { ErrorMessageComponent } from './_utils/error-message/error-message.component';
import { Error404Component } from './error404/error404.component';
import { CatSubmenuComponent } from './cat-submenu/cat-submenu.component';
import { FooterComponent } from './footer/footer.component';
import { HighlightPipe } from './_utils/_pipes/highlight.pipe';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HelpComponent,
    HomeComponent,
    ProductsComponent,
    ProductDetailComponent,
    SpinnerComponent,
    ProductFormComponent,
    ErrorMessageComponent,
    Error404Component,
    CatSubmenuComponent,
    FooterComponent,
    HighlightPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
