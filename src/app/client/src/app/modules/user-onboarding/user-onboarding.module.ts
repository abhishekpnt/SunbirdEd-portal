import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OnboardingPopupComponent } from './components/onboarding-popup/onboarding-popup.component';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import {LocationModule} from '../../plugins/location/location.module';
import { SharedModule } from '../shared/shared.module';
import {MatStepperModule} from '@angular/material/stepper';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {SunbirdPdfPlayerModule} from '@project-sunbird/sunbird-pdf-player-v9';
import { SunbirdVideoPlayerModule } from '@project-sunbird/sunbird-video-player-v9';



@NgModule({
  declarations: [
    OnboardingPopupComponent,
  ],
  imports: [
    CommonModule,
    SharedFeatureModule,
    LocationModule,
    SharedModule,
    MatStepperModule,
    CdkStepperModule,
    SunbirdPdfPlayerModule,
    SunbirdVideoPlayerModule
  ],
  exports: [
    OnboardingPopupComponent
  ]
})
export class UserOnboardingModule { }
