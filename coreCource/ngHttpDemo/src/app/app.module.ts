import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//*** TODO: Import HttpModule from @angular/http
import { HttpModule } from '@angular/http';

//*** TODO: Import AppComponent, DataService and Sorter
//***       (they're located in the app folder)
import { AppComponent } from './app.component';
import { Sorter } from './sorter';
import { DataService } from './data.service';

@NgModule({
 //*** TODO: Add the imported HttpModule object to the imports
  imports:      [ BrowserModule, FormsModule, HttpModule ],

  declarations: [ AppComponent ],

  ////*** TODO: Add DataService and Sorter to the providers
  providers:    [ DataService, Sorter ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
