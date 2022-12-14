import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CyberpunkComponent } from './cyberpunk.component';

const routes: Routes = [
  {
    path:'', component: CyberpunkComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CyberpunkRoutingModule { }
