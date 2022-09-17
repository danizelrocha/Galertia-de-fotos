import { FalloutComponent } from './pages/fallout/fallout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'' , redirectTo: 'home',pathMatch:'full'
  },
  {
    path:'home',
    loadChildren:() =>
     import ('./pages/home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'akira',
    loadChildren:() =>
     import ('./pages/akira/akira.module').then(m=>m.AkiraModule)
  },
  {
    path:'cyberpunk',
    loadChildren:() =>
     import ('./pages/cyberpunk/cyberpunk.module').then(m=>m.CyberpunkModule)
  },
  {
    path:'fallout',
    loadChildren:() =>
     import ('./pages/fallout/fallout.module').then(m=>m.FalloutModule)
  },
  {
    path:'junjiito',
    loadChildren:() =>
     import ('./pages/junjiito/junjiito.module').then(m=>m.JunjiitoModule)
  },
  {
    path:'sandman',
    loadChildren:() =>
     import ('./pages/sandman/sandman.module').then(m=>m.SandmanModule)
  },
  {
    path:'starwras',
    loadChildren:() =>
     import ('./pages/starwras/starwras.module').then(m=>m.StarwrasModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
