import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarchandRoutes, SettingRoutes ,SupportRoutes} from './marchand.routes';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { EventsComponent } from './views/events/events.component';
import { TestComponent } from './views/events/test/test.component';
import { ProfileComponent } from './views/settings/profile/profile.component';
import { UsersComponent } from './views/settings/users/users.component';
import { AlertComponent } from '../shared/components/alert/alert.component';
import { TransactionComponent } from './views/transaction/transaction.component';
import { MoreComponent } from './views/more/more.component';
import { FaqComponent } from './views/faq/faq.component';
import { ContactComponent } from './views/contact/contact.component';


const routes: Routes = [
{
    path: '',
    redirectTo: MarchandRoutes.Dashboard,
    pathMatch: 'full',
},

{
title: 'Dashboard',
path: MarchandRoutes.Dashboard,
children: [
    {
    path: '',
    component: DashboardComponent,
    },
    {
    path: MarchandRoutes.More,
    component: MoreComponent,
    },
],
},


{
path: MarchandRoutes.Support,
children: [
    {
    title: 'Faq',
    path: SupportRoutes.FAQ,
    component: FaqComponent,
    },
    {
    title: 'Contact',
    path: SupportRoutes.Contact,
    component: ContactComponent,
    },
],
},

{
path: MarchandRoutes.Settings,
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
export class marchandRoutingModule {}
