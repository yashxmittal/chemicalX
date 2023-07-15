import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardViewComponent } from './components/card-view/card-view.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path : '', component : CardViewComponent},
  { path : 'chemical/:id', component : DetailsComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
