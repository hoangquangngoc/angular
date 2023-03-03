import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagerProductComponent} from "./product/manager-product/manager-product.component";
import {ShowComponent} from "./product/show/show.component";

const routes: Routes = [
  {path: 'products', component: ShowComponent},
  {path: 'managerProduct', component: ManagerProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
