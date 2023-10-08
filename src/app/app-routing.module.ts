import { ProductDetailsComponent } from './ProductDetails/ProductDetails.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './NotFound/NotFound.component';
import { HomeComponent } from './Home/Home.component';
import { CartComponent } from './Cart/Cart.component';
import { ProductsComponent } from './Products/Products.component';
import { CategoriesComponent } from './Categories/Categories.component';
import { BrandsComponent } from './Brands/Brands.component';
import { LogInComponent } from './LogIn/LogIn.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './Core/Gard/auth.guard';
import { ProductDetailsPageComponent } from './ProductDetailsPage/ProductDetailsPage.component';
import { AdressInfoComponent } from './AdressInfo/AdressInfo.component';
import { CreateNewAddressComponent } from './CreateNewAddress/CreateNewAddress.component';
import { OrdersComponent } from './Orders/Orders.component';
import { SearchByNamePipe } from './SearchByName.pipe';
import { WishListPipe } from './wishList.pipe';
import { WishlistComponent } from './Wishlist/Wishlist.component';
import { RestpasswordComponent } from './Restpassword/Restpassword.component';
import { ForgetPasswordComponent } from './forgetPassword/forgetPassword.component';
import { GetNewPasswordComponent } from './GetNewPassword/GetNewPassword.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [authGuard],
    title: 'Home',
  },
  {
    path: 'Cart',
    component: CartComponent,
    canActivate: [authGuard],
    title: 'Cart',
  },
  {
    path: 'Products/:id',
    component: ProductsComponent,
    canActivate: [authGuard],
    title: 'Products',
  },
  {
    path: 'Categories',
    component: CategoriesComponent,
    canActivate: [authGuard],
    title: 'Categories',
  },
  {
    path: 'Brands',
    component: BrandsComponent,
    canActivate: [authGuard],
    title: 'Brands',
  },
  {
    path: 'LogIn',
    component: LogInComponent,
    title: 'LogIn',
    children: [],
  },
  { path: 'Register', component: RegisterComponent, title: 'Register' },
  {
    path: 'Home/Item/:id',
    component: ProductDetailsPageComponent,
    canActivate: [authGuard],
    title: 'Item',
  },
  {
    path: 'Address/:cartId/:paymentType',
    component: AdressInfoComponent,
    canActivate: [authGuard],
    title: 'Address',
  },
  {
    path: 'Address/:cartId/:paymentType/CreateAddress',
    component: CreateNewAddressComponent,
    canActivate: [authGuard],
    title: 'Create address',
  },
  {
    path: 'allorders',
    component: OrdersComponent,
    canActivate: [authGuard],
    title: 'Your orders',
  },
  {
    path: 'Wishlist',
    component: WishlistComponent,
    canActivate: [authGuard],
    title: 'Your wishlist',
  },
  {
    path: 'LogIn/Forgetpassword',
    component: ForgetPasswordComponent,
    title: 'Get code',
  },
  {
    path: 'Forgetpassword/RestPassword',
    component: RestpasswordComponent,
    title: 'Rest your password',
  },
  {
    path: 'RestPassword/newPassword',
    component: GetNewPasswordComponent,
    title: 'New password',
  },
  { path: '**', component: NotFoundComponent, title: 'This page not found' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
   declarations: [

  ],

})
export class AppRoutingModule { }
