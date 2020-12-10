import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DeleteAppointmentPageRoutingModule } from './delete-appointment-routing.module';

import { DeleteAppointmentPage } from './delete-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DeleteAppointmentPageRoutingModule
  ],
  declarations: [DeleteAppointmentPage]
})
export class DeleteAppointmentPageModule {}
