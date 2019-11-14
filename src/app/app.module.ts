import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DevUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
