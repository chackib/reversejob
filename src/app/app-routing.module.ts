import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CotationComponent } from './components/cotation/cotation.component';
import { MonCompteComponent } from './components/mon-compte/mon-compte.component';
import { ParrainageComponent } from './components/parrainage/parrainage.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { path: 'cotation', component: CotationComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'moncompte', component: MonCompteComponent },
  { path: 'parrainage', component: ParrainageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
