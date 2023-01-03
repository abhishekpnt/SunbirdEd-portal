import { MY_GROUPS, NOTIFICATION } from './modules/groups';
import { NgModule } from '@angular/core';
import { ErrorPageComponent } from './modules/core/components/error-page/error-page.component';
import { RouterModule, Routes } from '@angular/router';
import { MlGuard } from './modules/observation/guards';

const appRoutes: Routes = [
  {
    path: 'learn/course', loadChildren: () => import('./modules/learn/course-consumption.module').then((m) => {return m.CourseConsumptionModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'learn', loadChildren: () => import('./modules/learn/learn.module').then((m) => {return m.LearnModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'resources', loadChildren: () => import('./modules/resource/resource.module').then((m) => {return m.ResourceModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'search', loadChildren: () => import('./modules/search/search.module').then((m) => {return m.SearchModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'workspace', loadChildren: () => import('./modules/workspace/workspace.module').then((m) => {return m.WorkspaceModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'org', loadChildren: () => import('./modules/org-management/org-management.module').then((m) => {return m.OrgManagementModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'dashBoard', loadChildren: () => import('./modules/dashboard/dashboard.module').then((m) => {return m.DashboardModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'profile', loadChildren: () => import('./plugins/profile/profile.module').then((m) => {return m.ProfileModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'certs', loadChildren: () => import('./modules/certificate/certificate.module').then((m) => {return m.CertificateModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'recover', loadChildren: () => import('./modules/recover-account/recover-account.module').then((m) => {return m.RecoverAccountModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'accountMerge', loadChildren: () => import('./modules/merge-account/merge-account.module').then((m) => {return m.MergeAccountModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'get', loadChildren: () => import('./modules/dial-code-search/dial-code-search.module').then((m) => {return m.DialCodeSearchModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'manage', loadChildren: () => import('./modules/manage/manage.module').then((m) => {return m.ManageModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'uci-admin', loadChildren: () => import('./modules/uci-admin/uci-admin.module').then((m) => {return m.UciAdminModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: '', loadChildren: () => import('./modules/public/public.module').then((m) => {return m.PublicModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'discussion-forum', loadChildren: () => import('./modules/discussion/discussion.module').then((m) => {return m.DiscussionModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: MY_GROUPS, loadChildren: () => import('./modules/groups/groups.module').then((m) => {return m.GroupsModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: NOTIFICATION, loadChildren: () => import('./modules/notification/notification.module').then((m) => {return m.NotificationModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'observation', loadChildren: () => import('./modules/observation/observation.module').then((m) => {return m.ObservationModule}).catch( err => console.log('Oh no!', err) ), canActivate: [MlGuard]
  },
  {
    path: 'questionnaire', loadChildren: () => import('./modules/questionnaire/questionnaire.module').then((m) => {return m.QuestionnaireModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'solution', loadChildren: () => import('./modules/report/report.module').then((m) => {return m.ReportModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'program', loadChildren: () => import('./modules/program-dashboard/program-dashboard.module').then((m) => {return m.programDashboardModule}).catch( err => console.log('Oh no!', err) )
  },
  {
    path: 'error', component: ErrorPageComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
