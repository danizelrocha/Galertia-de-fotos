import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JunjiitoComponent } from './junjiito.component';

const routes: Routes = [
  {
    path:'', component: JunjiitoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JunjiitoRoutingModule { }
