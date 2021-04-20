import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ListUsersComponent } from '../list-users/list-users.component';
import { CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';

@NgModule({

    imports: [
        MatTableModule,
        MatCardModule,
        CommonModule,
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