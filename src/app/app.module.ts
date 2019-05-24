import { TestData } from './test-data';
import { httpInterceptorProviders } from './http-interceptors/index';
import { BookService } from './book.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book.component';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
      InMemoryWebApiModule.forRoot(TestData)	
  ],
  providers: [BookService,
    httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
