import { PlayerRoutingModule } from './player-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TelemetryModule } from '../../../telemetry/telemetry.module';
import { SharedModule } from '../../../shared/shared.module';
import { BadgingModule } from '../../../badging/badging.module';
import { CoreModule } from '../../../core/core.module';
import { PlayerHelperModule } from '../../../player-helper/player-helper.module';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { FormsModule } from '@angular/forms';
import { CommonConsumptionModule} from '@project-sunbird/common-consumption';
import { SharedFeatureModule } from '../../../shared-feature/shared-feature.module';
import { PendingchangesGuard } from '../../../public/services/pending-changes-guard/pendingchanges.guard';

@NgModule({
    imports: [
        CommonModule,
        SuiModule,
        PlayerRoutingModule,
        TelemetryModule,
        FormsModule,
        SharedModule,
        BadgingModule,
        CoreModule,
        PlayerHelperModule,
        CommonConsumptionModule,
        SharedFeatureModule
    ],
    providers: [ PendingchangesGuard ],
    declarations: []
})
export class PlayerModule { }
