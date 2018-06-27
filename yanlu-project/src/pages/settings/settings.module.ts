import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SettingsPage } from './settings';

import { MultiPickerModule } from 'ion-multi-picker';

@NgModule({
  declarations: [
    SettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SettingsPage),
    MultiPickerModule,
  ],
})
export class SettingsPageModule {}
