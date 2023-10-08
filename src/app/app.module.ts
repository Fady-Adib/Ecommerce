import { WishListPipe } from './wishList.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LogInComponent } from './LogIn/LogIn.component';
import { NavBarComponent } from './NavBar/NavBar.component';
import { HomeComponent } from './Home/Home.component';
import { ProductsComponent } from './Products/Products.component';
import { CartComponent } from './Cart/Cart.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { BrandsComponent } from './Brands/Brands.component';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule  } from "@angular/forms";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { ProductDetailsPageComponent } from './ProductDetailsPage/ProductDetailsPage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { AdressInfoComponent } from './AdressInfo/AdressInfo.component';
import { CreateNewAddressComponent } from './CreateNewAddress/CreateNewAddress.component';
import { OrdersComponent } from './Orders/Orders.component';
import { SearchByNamePipe } from './SearchByName.pipe';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './Spinner/Spinner.component';
import { loadingInterceptor } from './loading.interceptor';
import { WishlistComponent } from './Wishlist/Wishlist.component';
import { RestpasswordComponent } from './Restpassword/Restpassword.component';
import { ForgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { GetNewPasswordComponent } from './GetNewPassword/GetNewPassword.component';

imports: [
  BrowserAnimationsModule,
  NgxSpinnerModule,
  NgxSpinnerModule.forRoot({ type: 'ball-spin-clockwise-fade' }),
];



@NgModule({
  declarations: [				
    AppComponent,
    RegisterComponent,
    LogInComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    CartComponent,
    CategoriesComponent,
    BrandsComponent,
    NotFoundComponent,
    ProductDetailsComponent,
    ProductDetailsPageComponent,
    AdressInfoComponent,
    CreateNewAddressComponent,
    OrdersComponent,
    SearchByNamePipe,
    SpinnerComponent,
    WishListPipe,
      WishlistComponent,
      RestpasswordComponent,
      ForgetPasswordComponent,
      GetNewPasswordComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    BrowserAnimationsModule,
    NgxSpinnerModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: loadingInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
