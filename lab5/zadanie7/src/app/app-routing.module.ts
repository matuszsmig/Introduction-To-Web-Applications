import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicTripsComponent } from './components/basic-trips/basic-trips.component';
import { CartComponent } from './components/cart/cart.component';
import { FormsComponent } from './components/forms/forms.component';
import { HistoryComponent } from './components/history/history.component';
import { HomeComponent } from './components/home/home.component';
import { SingleTripComponent } from './components/single-trip/single-trip.component';
import { TravelledComponent } from './components/travelled/travelled.component';


const routes: Routes = [
  {path: 'witaj', component: HomeComponent},
  {path: 'oferty', component: BasicTripsComponent},
  {path: 'dodaj', component: FormsComponent},
  {path: 'koszyk', component: CartComponent},
  {path: 'historia', component: HistoryComponent},
  {path: 'odbyte-wycieczki', component: TravelledComponent},
  {path: 'opis-wycieczki/:id', component: SingleTripComponent},
  {path: '', redirectTo: 'witaj', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
