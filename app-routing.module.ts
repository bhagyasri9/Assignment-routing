import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { PoductdetailComponent } from './poductdetail/poductdetail.component';
import { ProductNotFoundComponent } from './product-not-found/product-not-found.component';


const routes: Routes = [
  { path : 'productlist/:id', component: PoductdetailComponent},
  { path : '', redirectTo: '/productlist', pathMatch: 'full'},
  { path : 'productlist', component: ProductComponent},
  { path : 'category', component: CategoryComponent},
  { path : '**', component: ProductNotFoundComponent}
];


// const routes: Routes = [
//   // { path : '', component: DeptlistComponent},
//   { path : 'departments/:id', component: PoductdetailComponent},
//   { path : '', redirectTo: '/departments', pathMatch: 'full'},
//   { path : 'departments', component: ProductComponent},
//   { path : 'employees', component: CategoryComponent},
//   { path : '**', component: ProductNotFoundComponent}
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
