import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { WorkspaceRoutingModule } from './workspace-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SuiModule } from 'ng2-semantic-ui-v12';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { WorkSpaceService, EditorService , BatchService, ReviewCommentsService} from './services';
import {
  WorkspaceComponent, CreateContentComponent, DraftComponent,
  ReviewSubmissionsComponent, PublishedComponent, UploadedComponent,
  CollectionEditorComponent, ContentEditorComponent, GenericEditorComponent,
  WorkspacesidebarComponent, DataDrivenComponent, DefaultTemplateComponent,
  FlaggedComponent, UpForReviewComponent, UpforReviewFilterComponent,
  BatchListComponent, BatchPageSectionComponent, UpdateBatchComponent,
  UpforreviewContentplayerComponent, FlagConentplayerComponent, ReviewsubmissionsContentplayerComponent,
  PublishedPopupComponent, RequestChangesPopupComponent, LimitedPublishedComponent,
  AllContentComponent, FlagReviewerComponent, CollaboratingOnComponent,
  CollaborationContentFilterComponent, WorkspaceContentFilterComponent, AllTextbooksComponent, NewCollectionEditorComponent
} from './components';
import { DateFilterXtimeAgoPipe } from './pipes';
import { NgInviewModule } from '@stockopedia/angular-inport';
import { TelemetryModule } from '../telemetry/telemetry.module';
import { ReviewCommentsComponent } from './components/review-comments/review-comments.component';
import { OrderModule } from 'ngx-order-pipe';
import { PlayerHelperModule } from '../player-helper/player-helper.module';
import { ContentSearchModule } from '../content-search/content-search.module';
import { CollectionEditorLibraryModule } from '@project-sunbird/sunbird-collection-editor';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  imports: [
    CommonModule,
    SlickCarouselModule,
    WorkspaceRoutingModule,
    SharedModule,
    SuiModule,
    FormsModule,
    CoreModule,
    ReactiveFormsModule,
    NgInviewModule,
    TelemetryModule,
    OrderModule,
    PlayerHelperModule,
    ContentSearchModule,
    CollectionEditorLibraryModule,
    MatTooltipModule
  ],
  declarations: [WorkspaceComponent, WorkspacesidebarComponent, DateFilterXtimeAgoPipe,
    CreateContentComponent, DraftComponent, ReviewSubmissionsComponent,
    PublishedComponent, UploadedComponent, CollectionEditorComponent,
    ContentEditorComponent, GenericEditorComponent, UpForReviewComponent, UpforReviewFilterComponent,
    DataDrivenComponent, UpForReviewComponent, UpforReviewFilterComponent, DefaultTemplateComponent,
    FlaggedComponent, BatchListComponent, BatchPageSectionComponent, UpdateBatchComponent,
    UpforreviewContentplayerComponent,
    FlagConentplayerComponent,
    ReviewsubmissionsContentplayerComponent,
    PublishedPopupComponent,
    RequestChangesPopupComponent,
    LimitedPublishedComponent,
    AllContentComponent,
    AllTextbooksComponent,
    FlagReviewerComponent,
    CollaboratingOnComponent,
    CollaborationContentFilterComponent,
    ReviewCommentsComponent,
    CollaborationContentFilterComponent,
    WorkspaceContentFilterComponent,
    NewCollectionEditorComponent
  ],
  providers: [WorkSpaceService, EditorService, BatchService, ReviewCommentsService, DateFilterXtimeAgoPipe]
})
export class WorkspaceModule { }
