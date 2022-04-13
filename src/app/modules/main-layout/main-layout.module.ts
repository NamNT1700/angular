import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { HeaderModule } from '../header/header.module';
import { NavigationModule } from '../navigation/navigation.module';
import { MainLayoutComponent } from './main-layout.component';



@NgModule({
    declarations: [
        MainLayoutComponent
    ],
    imports: [
        CommonModule,
        RouterModule,

        HeaderModule,
        NavigationModule,
    ],
    exports: [
        MainLayoutComponent
    ]
})
export class MainLayoutModule { }
