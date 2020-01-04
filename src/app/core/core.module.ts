import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderModule } from './header/header.module';
import { HeaderComponent } from './header/header/header.component';



@NgModule({
  declarations: [FooterComponent],
  imports: [
    CommonModule,
    HeaderModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModule { }
