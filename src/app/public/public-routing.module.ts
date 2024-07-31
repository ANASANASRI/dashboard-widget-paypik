import { UnauthorizedComponent } from './unauthorized/unauthorized.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PublicRoutes } from './public.routes';
import { IntegrationComponent } from './integration/integration.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [

  {
    path: '',
    title: 'Home',
    component: HomeComponent,
  },
  {
    title: "Integration",
    path: PublicRoutes.Integration,
    component: IntegrationComponent
  },
  {
    title: "Contact",
    path: PublicRoutes.Contact,
    component: ContactComponent
  },
  {
    title: "Unauthorized",
    path: PublicRoutes.Unauthorized,
    component: UnauthorizedComponent
  },
  // {
  //   path: '',
  //   loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule {}
