import { ResourceRoutingModule } from './resource-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurriculumCoursesComponent } from './components';
import { SharedModule } from '../shared/shared.module';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { SharedFeatureModule } from '../shared-feature/shared-feature.module';
import { CommonConsumptionModule } from '@project-sunbird/common-consumption';
import { ContentSearchModule } from '../content-search/content-search.module';
@NgModule({
  imports: [
    CommonModule,
    ResourceRoutingModule,
    SharedModule,
    SuiModule,
    SlickCarouselModule,
    FormsModule,
    CoreModule,
    TelemetryModule,
    NgInviewModule,
    SharedFeatureModule,
    CommonConsumptionModule,
    ContentSearchModule
  ],
  declarations: [CurriculumCoursesComponent]
})
export class ResourceModule {
  }
