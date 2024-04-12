import { AdminAlertComponent } from './../admin/views/elements/alert/admin-alert.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantRoutes, ElementRoutes, SettingRoutes } from './merchant.routes';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ButtonsComponent } from './views/elements/buttons/buttons.component';
import { AdminDataTableComponent } from './views/elements/data-table/data-table.component';
import { FormsComponent } from './views/elements/forms/forms.component';
import { AdminModalComponent } from './views/elements/modal/admin-modal.component';
import { AdminTabComponent } from './views/elements/tab/admin-tab.component';
import { EventsComponent } from './views/events/events.component';
import { TestComponent } from './views/events/test/test.component';
import { ProfileComponent } from './views/settings/profile/profile.component';
import { UsersComponent } from './views/settings/users/users.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { MoreComponent } from './views/more/more.component';


const routes: Routes = [
{
    path: '',
    redirectTo: MerchantRoutes.Dashboard,
    pathMatch: 'full',
},

{
title: 'Dashboard',
path: MerchantRoutes.Dashboard,
children: [
    {
    path: '',
    component: DashboardComponent,
    },
    {
    path: 'more',
    component: MoreComponent,
    },
],
},


{
title: 'Events',
path: MerchantRoutes.Events,
component: EventsComponent,
children: [
    {
    path: 'testing',
    component: TestComponent,
    outlet: 'test',
    },
],
},

{
title: 'Elements',
path: MerchantRoutes.Elements,
children: [
    {
    title: 'Alert',
    path: ElementRoutes.Alert,
    component: AdminAlertComponent,
    },
    {
    path: 'tabs',
    component: AdminTabComponent,
    },
    {
    title: 'Modal',
    path: ElementRoutes.Modal,
    component: AdminModalComponent,
    },
    {
    title: 'Buttons',
    path: ElementRoutes.Buttons,
    component: ButtonsComponent,
    },
    {
    title: 'Data Table',
    path: ElementRoutes.DataTable,
    component: AdminDataTableComponent,
    },
    {
    title: 'Forms',
    path: ElementRoutes.Forms,
    component: FormsComponent,
    },
],
},

{
path: MerchantRoutes.Settings,
children: [
    {
    title: 'Settings',
    path: SettingRoutes.Profile,
    component: ProfileComponent,
    },
    {
    title: 'Users',
    path: SettingRoutes.Users,
    component: UsersComponent,
    },
],
},
{ path: '**', component: AdminPageNotFoundComponent },
];

@NgModule({
    declarations: [],
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class merchantRoutingModule {}
