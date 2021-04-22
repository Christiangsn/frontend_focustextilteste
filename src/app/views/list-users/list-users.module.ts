import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListUsersComponent } from '../list-users/list-users.component';
import { CommonModule} from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import { FlexLayoutModule } from '@angular/flex-layout';





@NgModule({

    imports: [
        CommonModule,
        MatTabsModule,
        FlexLayoutModule

    ],
    exports: [
        ListUsersComponent,
    ],
    declarations: [
        ListUsersComponent
    ],
    providers: [],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ],

})

export class ListUsersModule { }