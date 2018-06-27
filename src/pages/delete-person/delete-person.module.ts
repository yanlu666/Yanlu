import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeletePersonPage } from './delete-person';

@NgModule({
  declarations: [
    DeletePersonPage,
  ],
  imports: [
    IonicPageModule.forChild(DeletePersonPage),
  ],
})
export class DeletePersonPageModule {}
