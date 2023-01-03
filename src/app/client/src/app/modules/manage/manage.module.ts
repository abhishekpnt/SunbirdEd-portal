import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModalModule, SuiSelectModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResourceService} from '../shared/services/resource/resource.service';
import { ToasterService } from '../shared/services/toaster/toaster.service';
import { SharedModule } from '../shared/shared.module';
import { UserOrgManagementComponent } from './components/user-org-management/user-org-management.component';
import { ManageRoutingModule } from './manage-routing.module';
import { ManageService } from './services/manage/manage.service';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { UserRoleAssignComponent } from './components/user-role-assign/user-role-assign.component';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
      UserOrgManagementComponent,
      UserRoleAssignComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SharedFeatureModule,
    SuiModalModule,
    SuiSelectModule,
    HttpClientModule,
    TelemetryModule,
    FormsModule,
    ReactiveFormsModule,
    ManageRoutingModule,
    AvatarModule,
    NgInviewModule
  ],
  providers: [
    ResourceService,
    ToasterService,
    ManageService
  ]
})
export class ManageModule {

}
