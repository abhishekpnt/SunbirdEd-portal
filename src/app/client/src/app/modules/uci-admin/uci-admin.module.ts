import { NgModule} from '@angular/core';
import { UciComponent } from './components/uci/uci.component';
import { UciAdminRoutingModule } from './uci-admin-routing.module';
import {UciModule} from 'ed-uci-console';


@NgModule({
  declarations: [UciComponent],
  imports: [
    UciAdminRoutingModule,
    UciModule
  ]
})
export class UciAdminModule {
}
