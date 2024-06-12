import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProfileComponent } from './profile/profile.component';
import { UsersComponent } from './users/users.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProfileComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    ProfileComponent
  ]
})
export class SettingsModule { }
