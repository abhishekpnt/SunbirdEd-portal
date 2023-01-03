import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { SuiModalModule } from 'ng2-semantic-ui-v12';
import { CommonModule } from '@angular/common';
import { CoreModule } from './modules/core/core.module';
import { SessionExpiryInterceptor } from './modules/core/interceptor/session-expiry.interceptor';
import { SharedModule } from './modules/shared/shared.module';
import { TelemetryModule } from './modules/telemetry/telemetry.module';
import { SharedFeatureModule } from './modules/shared-feature/shared-feature.module';
import { BootstrapFramework, WebExtensionModule } from 'web-extensions-v12';
import { WebExtensionsConfig } from './framework.config';
import { CacheService } from 'ng2-cache-service';
import { CacheStorageAbstract } from 'ng2-cache-service/dist/src/services/storage/cache-storage-abstract.service';
import { CacheSessionStorage } from 'ng2-cache-service/dist/src/services/storage/session-storage/cache-session-storage.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PluginModules } from './framework.config';
import {ChatLibModule, ChatLibService} from '@project-sunbird/chatbot-client';
import { RouteReuseStrategy } from '@angular/router';
import { CustomRouteReuseStrategy } from './service/CustomRouteReuseStrategy/CustomRouteReuseStrategy';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateStore } from '@ngx-translate/core';
import { SbSearchFilterModule } from '@project-sunbird/common-form-elements';
import { UserOnboardingModule} from '../app/modules/user-onboarding';
import { MatStepperModule} from '@angular/material/stepper';
import { CdkStepperModule} from '@angular/cdk/stepper';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    
    BrowserAnimationsModule, // used this instaed of browser module since it includes in it.
    CoreModule,
    CommonModule,
    BrowserModule,
    CoreModule,
    HttpClientModule,
    SuiModalModule,
    SharedModule.forRoot(),
    WebExtensionModule.forRoot(),
    TelemetryModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    SbSearchFilterModule.forRoot('web'),
    ChatLibModule,
    SharedFeatureModule,
    UserOnboardingModule,
    MatStepperModule,
    CdkStepperModule,
    ...PluginModules,
     // ngx-translate and the loader module
     HttpClientModule,
    AppRoutingModule // don't add any module below this because it contains wildcard route
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    CacheService,
    DeviceDetectorService,
    ChatLibService,
    TranslateStore,
    { provide: CacheStorageAbstract, useClass: CacheSessionStorage },
    { provide: HTTP_INTERCEPTORS, useClass: SessionExpiryInterceptor, multi: true },
    { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
  ],

})
export class AppModule {
  constructor(bootstrapFramework: BootstrapFramework) {
    bootstrapFramework.initialize(WebExtensionsConfig);
  }
}
// required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, '/resourcebundles/v1/readLang/', ' ');
}
