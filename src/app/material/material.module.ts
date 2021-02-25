import { NgModule } from '@angular/core';

// Material Angular Modules
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  exports: [
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
