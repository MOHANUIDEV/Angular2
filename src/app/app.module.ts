import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule}from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
 //import { EventEmitter } from '@angular/core';
 import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RegisterComponent } from './register/register.component';
import { ProductsComponent } from './products/products.component';
import { CartComponent } from './cart/cart.component';
import {ProductService} from './product.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    ProductsComponent,
    CartComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    //EventEmitter,
  
    
     RouterModule.forRoot([
      { path:'register', component:RegisterComponent},
      { path:'products', component:ProductsComponent},
      { path:'cart', component:CartComponent},
      { path:'home', component:HomeComponent}
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
