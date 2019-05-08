import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ViewHeroComponent } from './view-hero/view-hero.component';
import { EditHeroComponent } from './edit-hero/edit-hero.component';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { CapeWashingService } from './cape-washing.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ViewHeroComponent,
    EditHeroComponent,
    AddHeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CapeWashingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
