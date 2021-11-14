import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NewTransactionComponent } from './new-transaction/new-transaction.component';
import { ExtractComponent } from './extract/extract.component';

@NgModule({
  declarations: [
    AppComponent,
    NewTransactionComponent,
    ExtractComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
