import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MergeAccountRoutingModule} from './merge-account-routing.module';
import {SharedModule} from '../shared/shared.module';
import {
  SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule,
  SuiProgressModule, SuiRatingModule, SuiCollapseModule, SuiCheckboxModule
} from 'ng2-semantic-ui-v12';
import {MergeAccountStatusComponent} from './components/merge-account-status/merge-account-status.component';


@NgModule({
  declarations: [MergeAccountStatusComponent],
  imports: [
    CommonModule,
    SharedModule,
    SuiSelectModule, SuiModalModule, SuiAccordionModule, SuiPopupModule, SuiDropdownModule, SuiProgressModule,
    SuiRatingModule, SuiCollapseModule, SuiCheckboxModule,
    MergeAccountRoutingModule
  ]
})
export class MergeAccountModule {
}
