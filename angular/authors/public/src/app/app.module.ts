import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthorCreateComponent } from './authors/author-create/author-create.component';
import { AuthorListComponent } from './authors/author-list/author-list.component';
import { QuoteCreateComponent } from './quotes/quote-create/quote-create.component';
import { QuoteListComponent } from './quotes/quote-list/quote-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthorCreateComponent,
    AuthorListComponent,
    QuoteCreateComponent,
    QuoteListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
