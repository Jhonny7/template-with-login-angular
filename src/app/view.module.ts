import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgbActiveModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';

import {AgmCoreModule} from '@agm/core';
import {CKEditorModule} from '@ckeditor/ckeditor5-angular';
import { MaterialModule } from './material.module';

@NgModule({
    imports: [
        AppRoutingModule,
        ReactiveFormsModule,
        MaterialModule,
        BrowserModule,
        BrowserAnimationsModule, 
        HttpClientModule,
        NgbModule,
        FormsModule,
        //NgbActiveModal,
        TableModule,
        CalendarModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBlV4YYNLa5dk1zKdfviEGFKRrRg3Nbnxo'
        }),
        CKEditorModule
    ],

    exports: [
        AppRoutingModule, 
        ReactiveFormsModule, 
        MaterialModule, 
        BrowserModule, 
        BrowserAnimationsModule, 
        HttpClientModule,
        NgbModule,
        FormsModule,
        //NgbActiveModal
        TableModule,
        CalendarModule,
        AgmCoreModule,
        CKEditorModule
    ]
})
export class ViewModule { }