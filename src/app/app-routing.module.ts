import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzaPlaceComponent } from './components/pizza-place/pizza-place.component';
import { ContactComponent } from './components/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: PizzaPlaceComponent
  },
  {
    path: 'contact-component',
    component: ContactComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
