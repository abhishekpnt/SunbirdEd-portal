import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgManagementRoutingModule } from './org-management-routing.module';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { ResourceService} from '../shared/services/resource/resource.service';
import {  ToasterService } from '../shared/services/toaster/toaster.service';
import {  RouterNavigationService} from '../shared/services/navigate/router-navigation.service';
import {  SharedModule } from '../shared/shared.module';
import { OrgTypeService, OrgManagementService } from './services';
import {
  CreateOrgTypeComponent, ViewOrgTypeComponent, OrganizationUploadComponent, StatusComponent
} from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
// import { Angular2CsvModule } from 'angular2-csv';  Angular2CsvModule removed TODO: use Blob object to generate csv file

@NgModule({
  imports: [
    CommonModule,
    OrgManagementRoutingModule,
    SharedModule,
    SuiModule,
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    TelemetryModule,
    NgInviewModule
  ],
  declarations: [CreateOrgTypeComponent, ViewOrgTypeComponent, OrganizationUploadComponent, StatusComponent],
  providers: [ResourceService, ToasterService, RouterNavigationService, OrgTypeService, OrgManagementService]
})
export class OrgManagementModule { }

