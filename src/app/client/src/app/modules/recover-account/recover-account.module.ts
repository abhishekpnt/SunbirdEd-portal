import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecoverAccountRoutingModule } from './recover-account-routing.module';
import { IdentifyAccountComponent, SelectAccountIdentifierComponent, VerifyAccountIdentifierComponent,
  RecoverAccountComponent } from './components';
import { SharedModule } from '../../modules/shared/shared.module';
import { CoreModule } from '../../modules/core/core.module';
import { TelemetryModule } from '../../modules/telemetry/telemetry.module';
import { SharedFeatureModule } from '../../modules/shared-feature/shared-feature.module';
import { SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule, SuiCheckboxModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';

@NgModule({
  declarations: [IdentifyAccountComponent, SelectAccountIdentifierComponent, VerifyAccountIdentifierComponent,
    RecoverAccountComponent],
  imports: [
    CommonModule,
    RecoverAccountRoutingModule,
    SharedModule,
    CoreModule,
    RecaptchaModule,
    TelemetryModule,
    SharedFeatureModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule, SuiCheckboxModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class RecoverAccountModule { }
