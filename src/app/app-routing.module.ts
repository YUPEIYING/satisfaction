import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { ExtentComponent } from './extent/extent.component';

const routes:Routes = [
 {path: 'extent',component:ExtentComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
