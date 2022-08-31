import '../polyfills';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { StudentsTableComponent } from './components/students-table/students-table.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducers } from './store';
import { GetStudentsEffects } from './store/effects/get-students.effects';
import { MatNativeDateModule } from '@angular/material/core';
import { DemoMaterialModule } from './material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


@NgModule({
  declarations: [
    AppComponent,
    StudentsTableComponent
  ],
  imports: [
    BrowserModule,
    MatNativeDateModule,
    DemoMaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    EffectsModule.forRoot([GetStudentsEffects]),
    StoreModule.forRoot(appReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
