import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';
// import { browser } from 'protractor';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [];

@NgModule({
  providers: [HttpService],
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule,
    BrowserModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
