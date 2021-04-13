import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SecOneComponent } from './sec-one/sec-one.component';
import { SecTwoComponent } from './sec-two/sec-two.component';
import { SecThreeComponent } from './sec-three/sec-three.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SecOneComponent,
    SecTwoComponent,
    SecThreeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
