import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RxStompService } from '@stomp/ng2-stompjs'; // Import RxStompService

import { CommercialRoutingModule } from './commercial-routing.module';
import { LayoutsModule } from './layouts/layouts.module';

import { CommercialComponent } from './commercial.component';
import { AdminPageNotFoundComponent } from './views/admin-page-not-found/admin-page-not-found.component';
import { ValidationComponent } from './views/validation/validation.component';
import { SettingsModule } from './views/settings/settings.module';
import { ElementsModule } from './views/elements/elements.module';
import { ScrollToTopComponent } from './views/scroll-to-top/scroll-to-top.component';
import { AddmarchandformComponent } from './views/addmarchandform/addmarchandform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CommercialComponent,
    AdminPageNotFoundComponent,
    ValidationComponent,
    AddmarchandformComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    CommercialRoutingModule,
    LayoutsModule,
    SettingsModule,
    ElementsModule,
    ReactiveFormsModule,
    ScrollToTopComponent
  ],
  providers: [RxStompService], // Provide RxStompService here
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CommercialModule { }
