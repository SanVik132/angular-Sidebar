import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './header/header.component';
import { DrawerComponent } from './drawer/drawer.component';
import { SideNavService } from './side-nav.service';
import { LayoutsComponent } from './layouts.component';
@NgModule({
  declarations: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [
    HeaderComponent,
    DrawerComponent,
    LayoutsComponent,
  ],
  providers:[
    SideNavService,
  ]
})
export class LayoutsModule { }
