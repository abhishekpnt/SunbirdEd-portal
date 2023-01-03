import { CoreModule } from '../../modules/core/core.module';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule, SuiModalModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { TranslateModule } from '@ngx-translate/core';
import { ReportRoutingModule } from './report-routing.module';
import { SolutionListingComponent, EntityListComponent, ReportViewComponent, AllEvidenceComponent } from './components';
import { DataTablesModule } from 'angular-datatables';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { DashletModule } from '@project-sunbird/sb-dashlet-v9';
import { SlReportsLibraryModule } from '@shikshalokam/sl-reports-library';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [SolutionListingComponent, EntityListComponent, ReportViewComponent, AllEvidenceComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    SuiModule,
    SuiModalModule,
    TranslateModule,
    SharedFeatureModule,
    TelemetryModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    CoreModule,
    SharedFeatureModule,
    ReportRoutingModule,
    DataTablesModule,
    InfiniteScrollModule,
    DashletModule.forRoot(),
    SlReportsLibraryModule,
    MatTabsModule
  ],
  providers: []

})
export class ReportModule { }
