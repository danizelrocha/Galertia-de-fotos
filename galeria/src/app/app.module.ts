import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CyberpunkComponent } from './pages/cyberpunk/cyberpunk.component';
import { AkiraComponent } from './pages/akira/akira.component';
import { JunjiitoComponent } from './pages/junjiito/junjiito.component';
import { StarwrasComponent } from './pages/starwras/starwras.component';
import { NavComponent } from './core/nav/nav.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FalloutComponent } from './pages/fallout/fallout.component';


@NgModule({
  declarations: [
    AppComponent,
    CyberpunkComponent,
    AkiraComponent,
    JunjiitoComponent,
    StarwrasComponent,
    NavComponent,
    FooterComponent,
    HomeComponent,
    FalloutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
