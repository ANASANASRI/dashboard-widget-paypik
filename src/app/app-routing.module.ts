import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AdminComponent} from './admin/admin.component';
import {AppComponent} from './app.component';
import {AppRoutes} from './app.routes';
import {PageNotFoundComponent} from './public/page-not-found/page-not-found.component';
import { PublicComponent } from './public/public.component';
import { MarchandComponent } from './marchand/marchand.component';
import { CommercialComponent } from './commercial/commercial.component';

const routes: Routes = [
  {
    path: '',
    component: PublicComponent,
    loadChildren: () => import('./public/public.module').then((m) => m.PublicModule)
  },
  {
    path: AppRoutes.Admin,
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: AppRoutes.Commercial,
    component: CommercialComponent,
    loadChildren: () => import('./commercial/commercial.module').then((m) => m.CommercialModule),
  },
  {
    path: AppRoutes.Marchand,
    component: MarchandComponent,
    loadChildren: () => import('./marchand/marchand.module').then((m) => m.MarchandModule),
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
      // enableTracing: true, //uncomment for debugging only
    preloadingStrategy: PreloadAllModules,
    scrollPositionRestoration: 'top',
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
