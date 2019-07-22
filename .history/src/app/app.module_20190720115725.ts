import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { appReducers } from './store/reducers/app.reducers';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { ConfigEffects } from './store/effects/config.effects';
import { UserEffects } from './store/effects/user.effects';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UsersComponent as UsersContainerComponent } from './containers/users/users.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './containers/user/user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { MatPaginator, MatTableDataSource, MatSort, MatTableModule, MatPaginatorModule, MatSortModule, MatCheckboxModule, MatIcon, MatIconModule, MatFormFieldModule , } from '@angular/material';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersContainerComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
   ],
  imports: [
    BrowserModule,
     HttpClientModule,
     StoreModule.forRoot(appReducers, {
      runtimeChecks: {
        strictStateImmutability: false,
        strictActionImmutability: false,
        strictStateSerializability:false,
        strictActionSerializability:false,
      },
    }),
    EffectsModule.forRoot([UserEffects, ConfigEffects]),
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    AppRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    FormsModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
