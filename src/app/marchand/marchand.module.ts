import { MoreComponent } from './views/more/more.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { marchandRoutingModule } from './marchand-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { MarchandComponent } from './marchand.component';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EventsComponent } from './views/events/events.component';
import { SettingsModule } from './views/settings/settings.module';
import { ScrollToTopComponent } from './views/scroll-to-top/scroll-to-top.component';
import { ApiServiceService } from './services/api-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ChartComponent } from './views/chart/chart.component';


@NgModule({
declarations: [
    MarchandComponent,
    DashboardComponent,
    AdminPageNotFoundComponent,
    EventsComponent,
    MoreComponent,
    TransactionComponent,
    ChartComponent
],
imports: [
    CommonModule,
    marchandRoutingModule,
    LayoutsModule,
    ReactiveFormsModule,
    SettingsModule,
    ScrollToTopComponent,
    FormsModule,
],
schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MarchandModule { }
