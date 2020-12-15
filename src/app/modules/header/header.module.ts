import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { MatToolbarModule } from '@angular/material/toolbar';

import { ToolbarModule } from '../toolbar/toolbar.module'
import {ProfileModule} from '../profile/profile.module'
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SearchbarModule } from '../searchbar/searchbar.module';




@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    SearchbarModule,
    ToolbarModule,
    ProfileModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule



  ],
  exports: [
    HeaderComponent,

  ]
})
export class HeaderModule { }
