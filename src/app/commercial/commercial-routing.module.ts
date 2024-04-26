import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialRoutes, ElementRoutes, SettingRoutes } from './commercial.routes';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { AdminAlertComponent } from './views/elements/alert/admin-alert.component';
import { ButtonsComponent } from './views/elements/buttons/buttons.component';
import { AdminDataTableComponent } from './views/elements/data-table/data-table.component';
import { FormsComponent } from './views/elements/forms/forms.component';
import { AdminModalComponent } from './views/elements/modal/admin-modal.component';
import { AdminTabComponent } from './views/elements/tab/admin-tab.component';
import { EventsComponent } from './views/validation/validation.component';
import { DemandeComponent } from './views/validation/demande/demande.component';
import { ProfileComponent } from './views/settings/profile/profile.component';
import { UsersComponent } from './views/settings/users/users.component';
import { AddmarchandformComponent } from './views/addmarchandform/addmarchandform.component';



const routes: Routes = [
  {
    path: '',
    redirectTo: CommercialRoutes.Validation,
    pathMatch: 'full',
  },

  {
    title: 'Validation',
    path: CommercialRoutes.Validation,
    component: EventsComponent,
    children: [
      {
        path: 'marchand/:demandeId',
        component: DemandeComponent,
        outlet: 'demande',
      },
    ],
  },

  {
    title: 'Add',
    path: CommercialRoutes.Add,
    component: AddmarchandformComponent,
  },

  {
    title: 'Elements',
    path: CommercialRoutes.Elements,
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
    path: CommercialRoutes.Settings,
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
export class CommercialRoutingModule {}
