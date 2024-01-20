import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { ProductUserComponent } from './components/product-user/product-user.component';
import { LandingUserComponent } from './components/landing-user/landing-user.component';
import { HomeUserComponent } from './components/home-user/home-user.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProfileComponent } from './components/profile/profile.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { CheckoutclearComponent } from './components/checkoutclear/checkoutclear.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';


@NgModule({
  declarations: [
    ProductUserComponent,
    LandingUserComponent,
    HomeUserComponent,
    AboutComponent,
    ContactComponent,
    ProfileComponent,
    MyOrdersComponent,
    CartComponent,
    CheckoutComponent,
    CheckoutclearComponent,
    LoginComponent,
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
