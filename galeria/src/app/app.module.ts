import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CyberPunkComponent } from './pages/cyber-punk/cyber-punk.component';
import { CyberpunkComponent } from './pages/cyberpunk/cyberpunk.component';
import { AkiraComponent } from './pages/akira/akira.component';
import { JunjiitoComponent } from './pages/junjiito/junjiito.component';

@NgModule({
  declarations: [
    AppComponent,
    CyberPunkComponent,
    CyberpunkComponent,
    AkiraComponent,
    JunjiitoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
