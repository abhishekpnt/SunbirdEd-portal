import { CoreModule } from '../core/core.module';
import { SharedModule } from '../shared/shared.module';
import { SearchRoutingModule } from './search-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserSearchService } from './services';
import { OrderModule } from 'ngx-order-pipe';
import { UserFilterComponent, UserEditComponent, UserDeleteComponent, HomeSearchComponent,
   UserProfileComponent, UserSearchComponent } from './components';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { AvatarModule } from 'ngx-avatar';
import {SharedFeatureModule} from '../shared-feature/shared-feature.module';
// import { Angular2CsvModule } from 'angular2-csv'; Angular2CsvModule removed TODO: use Blob object to generate csv file
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { ContentSearchModule } from '../content-search/content-search.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    TranslateModule,
    SharedModule,
    SuiModule,
    FormsModule,
    CoreModule,
    OrderModule,
    TelemetryModule,
    NgInviewModule,
    AvatarModule,
    SharedFeatureModule,
    ReactiveFormsModule,
    CommonConsumptionModule,
    ContentSearchModule
  ],
  declarations: [ UserSearchComponent,
  UserFilterComponent, UserEditComponent, UserDeleteComponent,
  UserProfileComponent, HomeSearchComponent ],
  providers: [UserSearchService]
})
export class SearchModule { }
