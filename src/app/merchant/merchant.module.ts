import { MoreComponent } from './views/more/more.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { merchantRoutingModule } from './merchant-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { MerchantComponent } from './merchant.component';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { TableComponent } from './views/table/table.component';
import { EventsComponent } from './views/events/events.component';
import { SettingsModule } from './views/settings/settings.module';
import { ElementsModule } from './views/elements/elements.module';
import { ScrollToTopComponent } from './views/scroll-to-top/scroll-to-top.component';


@NgModule({
declarations: [
    MerchantComponent,
    DashboardComponent,
    AdminPageNotFoundComponent,
    EventsComponent,
    MoreComponent
],
imports: [
    CommonModule,
    merchantRoutingModule,
    LayoutsModule,
    SettingsModule,
    ElementsModule,
    TableComponent,
    TransactionComponent,
    ScrollToTopComponent
]
})
export class MerchantModule { }
