import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './resources/services/auth-guard.service';
import { LoginComponent } from './views/login/login.component';


const routes: Routes = [{
  path: '', component: LoginComponent
},

{
  path: 'panel',
  canActivate: [AuthGuardService],
  loadChildren: () => import('./views/panel/panel.module')
    .then((module) => module.PanelModule
  )
},

{
  path: '**', 
  redirectTo: ''
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
