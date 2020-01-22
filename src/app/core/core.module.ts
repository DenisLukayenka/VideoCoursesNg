import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/logo/logo.component';
import { LoginSignupComponent } from './components/login-signup/login-signup.component';
import { UserInfoComponent } from './components/user-info/user-info.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [FooterComponent, HeaderComponent, LogoComponent, LoginSignupComponent, UserInfoComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
