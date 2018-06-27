import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FpagePage } from './fpage';

@NgModule({
  declarations: [
    FpagePage,
  ],
  imports: [
    IonicPageModule.forChild(FpagePage),
  ],
})
export class FpagePageModule {}
