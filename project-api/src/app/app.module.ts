import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './components/my-component/my-component.component';
import { MyComponentPromiseComponent } from './components/my-component-promise/my-component-promise.component';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { MyData } from './my-data';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    MyComponentPromiseComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(MyData)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
