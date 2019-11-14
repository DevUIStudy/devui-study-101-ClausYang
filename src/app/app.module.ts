import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminFilesComponent } from './admin-files/admin-files.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminFilesComponent,
    PageNotFoundComponent
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
