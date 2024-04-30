import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './components/test/test.component';
import { ProductComponent } from './components/product/product.component';
import { WagaComponent } from './components/waga/waga.component';

const routes: Routes = [
  { path: 'test', component: TestComponent },
  { path: 'product', component: ProductComponent },
  { path: 'waga',component: WagaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
