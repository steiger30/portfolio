import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './componets/footer/footer.component';
import { NavigationComponent } from './componets/navigation/navigation.component';



@NgModule({
  declarations: [
    FooterComponent,
    NavigationComponent
  ],
  imports: [
    CommonModule
  ], exports: [
    FooterComponent,
    NavigationComponent
  ]
})
export class SharedModule { }
