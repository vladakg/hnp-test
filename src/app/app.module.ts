import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ComponentsModule} from './components/components.module';
import {PatientsService} from './services/patients';
import {DoctorsService} from './services/doctors';
import {GlobalComponents} from './components/global.components';
import {EmailComposer} from '@ionic-native/email-composer/ngx';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    entryComponents: [],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        ComponentsModule,
        HttpClientModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
        PatientsService,
        DoctorsService,
        GlobalComponents,
        EmailComposer
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
