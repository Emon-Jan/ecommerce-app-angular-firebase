import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule, MatCardModule, MatListModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'shared/shared.module';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
    SharedModule,
    RouterModule.forChild([
      { path: "home", component: HomeComponent },
      { path: "products", component: ProductsComponent },
    ])
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProductsComponent,
  ]
})
export class CoreModule { }
