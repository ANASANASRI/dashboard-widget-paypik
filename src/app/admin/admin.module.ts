import { MoreComponent } from './views/more/more.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { AdminComponent } from './admin.component';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableComponent } from './views/table/table.component';
import { EventsComponent } from './views/validation/validation.component';
import { SettingsModule } from './views/settings/settings.module';
import { ElementsModule } from './views/elements/elements.module';
import { ScrollToTopComponent } from './views/scroll-to-top/scroll-to-top.component';
import { EditmarchandformComponent } from './views/editmarchandform/editmarchandform.component';
import { ChartComponent } from './views/chart/chart.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatPaginatorModule} from '@angular/material/paginator';
import { IncreaseDirective } from './directives/increase.directive';
import { IncreaseNumberDirective } from './directives/increase-number.directive';




@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminPageNotFoundComponent,
    EventsComponent,
    MoreComponent,
    TableComponent,
    EditmarchandformComponent,
    ChartComponent,
    IncreaseDirective,
    IncreaseNumberDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    LayoutsModule,
    SettingsModule,
    ElementsModule,
    TransactionComponent,
    ScrollToTopComponent,
    ReactiveFormsModule,
    MatPaginatorModule
    
  ]
})
export class AdminModule { }
