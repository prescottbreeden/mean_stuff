import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewHeroComponent } from './view-hero/view-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'view/:id', component: ViewHeroComponent },
  { path: 'add', component: AddHeroComponent },
  { path: 'edit/:id', component: EditHeroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
