import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import {MatListModule} from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports:[SidebarComponent]
})
export class SidebarModule { }
