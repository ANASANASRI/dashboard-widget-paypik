import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {AdminModule} from './admin/admin.module';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {PublicModule} from './public/public.module';

import {httpInterceptorProviders} from './_core/interceptors/interceptors.provider';
import {StrategyProviders} from "./_core/strategies/strategy.providers";
import {UtilsProviders} from "./shared/utils/utils.providers";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    PublicModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    httpInterceptorProviders,
    StrategyProviders,
    UtilsProviders,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
