import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NgModuleFactoryLoader, SystemJsNgModuleLoader } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './login.component';
import { HomeComponent } from './home.component';
import { UIRouterModule, UIView } from '@uirouter/angular';
import { APP_STATES } from './app.states';
import { GlobalModule } from './global/global.module';
import { routerConfigFn } from './router.config';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    UIRouterModule.forRoot({
      states: APP_STATES,
      useHash: true,
      otherwise: { state: 'home' },
      config: routerConfigFn,
    }),
    GlobalModule,
    // Add .withServerTransition() to support Universal rendering.
    // The application ID can be any identifier which is unique on
    // the page.
    BrowserModule.withServerTransition({appId: 'my-app'}),
    FormsModule,
    HttpModule
  ],
  providers: [
    { provide: NgModuleFactoryLoader, useClass: SystemJsNgModuleLoader }
  ],
  bootstrap: [UIView]
})
export class AppModule { }
