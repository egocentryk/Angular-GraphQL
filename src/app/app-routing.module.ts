import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LanuchListComponent } from './lanuch-list/lanuch-list.component';
import { LaunchDetailsComponent } from './launch-details/launch-details.component';


const routes: Routes = [
  {
    path: '',
    component: LanuchListComponent
  },
  {
    path: ':id',
    component: LaunchDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
