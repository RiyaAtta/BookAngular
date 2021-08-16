import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartComponent } from './Components/cart/cart.component';
import { BooksComponent } from './Components/books/books.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { HomeComponent } from './Components/home/home.component';
import { FooterComponent } from './Components/footer/footer.component';
import { BooksIntroComponent } from './Components/books-intro/books-intro.component';
import { AllBooksComponent } from './Components/all-books/all-books.component';
import { BookComponent } from './Components/book/book.component';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    BooksComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    BooksIntroComponent,
    AllBooksComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
