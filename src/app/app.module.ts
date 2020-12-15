import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { HeaderModule } from './modules/header/header.module';
import { SidebarModule } from './modules/sidebar/sidebar.module'
import { LayoutModule } from '@angular/cdk/layout';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    HeaderModule,
    SidebarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
