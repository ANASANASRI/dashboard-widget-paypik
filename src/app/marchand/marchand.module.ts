import { MoreComponent } from './views/more/more.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { marchandRoutingModule } from './marchand-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { MarchandComponent } from './marchand.component';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EventsComponent } from './views/events/events.component';
import { SettingsModule } from './views/settings/settings.module';
import { ScrollToTopComponent } from './views/scroll-to-top/scroll-to-top.component';


@NgModule({
declarations: [
    MarchandComponent,
    DashboardComponent,
    AdminPageNotFoundComponent,
    EventsComponent,
    MoreComponent
],
imports: [
    CommonModule,
    marchandRoutingModule,
    LayoutsModule,
    SettingsModule,
    TransactionComponent,
    ScrollToTopComponent,
]
})
export class MarchandModule { }