import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { PanelRoutingModule } from './panel-routing.module';
import { PanelComponent } from './panel.component';
import { ListUsersModule } from '../list-users/list-users.module';

@NgModule({
  declarations: [
    PanelComponent,

  ],
  imports: [
    PanelRoutingModule,
    ListUsersModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class PanelModule { }
