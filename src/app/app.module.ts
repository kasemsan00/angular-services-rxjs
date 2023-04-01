import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserNameService } from './user-name.services';
import { HelloInputComponent } from './hello-input/hello-input.component';
import { HelloObservableComponent } from './hello-input/hello-observable.component';

@NgModule({
  declarations: [AppComponent, HelloInputComponent, HelloObservableComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [UserNameService],
  bootstrap: [AppComponent],
})
export class AppModule {}
