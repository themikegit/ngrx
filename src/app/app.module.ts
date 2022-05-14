import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { NavComponent } from './lib/nav/nav.component';
import { OverviewComponent } from './lib/overview/overview.component';
import { CardComponent } from './lib/card/card.component';
import { usersReducer } from './store/reducers/users.reducer';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { UserEffects } from './store/effects/users.effects';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [AppComponent, NavComponent, OverviewComponent, CardComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    EffectsModule.forRoot([UserEffects]),
    StoreModule.forRoot({ users: usersReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
