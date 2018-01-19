import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RawTableComponent } from './raw-table/raw-table.component';
import { PrettyComponent } from './pretty/pretty.component';
import { DetailsComponent } from './pretty/details/details.component';
import { AppRoutingModule } from './app.routing.module';
import { AppService } from './app.service';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    RawTableComponent,
    PrettyComponent,
    DetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
