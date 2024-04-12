import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MerchantRoutes, SettingRoutes } from './merchant.routes';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
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
