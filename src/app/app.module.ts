import { NgModule, Injector } from '@angular/core';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components.module';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { ProvidersModule } from './providers.module';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule, NgbPaginationModule, NgbAlertModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    //BrowserModule,
    //AppRoutingModule,
    //BrowserAnimationsModule,
    //MaterialModule,
    //ReactiveFormsModule,
    ProvidersModule,
    //HttpClientModule,
    ComponentsModule,
    NgbModule,
    //NgbActiveModal

  ],
  bootstrap: [AppComponent],

  entryComponents: [
    SpinnerOverlayComponent,
  ],

  exports: [
    NgbModule,
    //NgbActiveModal
  ]
})
export class AppModule {
  static injector: Injector;

  constructor(injector: Injector) {
    AppModule.injector = injector;
  }
}

