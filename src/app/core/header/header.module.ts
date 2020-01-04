import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { LoginSignupComponent } from './login-signup/login-signup.component';
import { HeaderComponent } from './header/header.component';
import { SearchModule } from 'src/app/shared/search/search.module';



@NgModule({
  declarations: [LogoComponent, UserInfoComponent, LoginSignupComponent, HeaderComponent],
  imports: [
    CommonModule,
    SearchModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
