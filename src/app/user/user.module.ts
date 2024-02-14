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
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from '../icons-provider.module';
import { FadeInDirective } from '../directives/gsap/fade-in.directive';

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
    LoginComponent,
    RegisterUserComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    FadeInDirective
  ]
})
export class UserModule { }
