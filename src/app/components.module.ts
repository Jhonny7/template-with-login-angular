
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ControlMessagesComponent } from './components/control-messages/control-messages.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LongPress } from './directives/long-press';
import { LoginLayoutComponent } from './pages/login-layout/login-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { ViewModule } from './view.module';
import { HeaderComponent } from './components/header/header.component';
import { HomePublicComponent } from './pages/home-layout/home-public.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        LoginLayoutComponent,
        ControlMessagesComponent,
        SpinnerOverlayComponent,
        SpinnerComponent,
        LongPress,
        HeaderComponent,
        HomePublicComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent
    ],
    
    imports:[ViewModule],
    exports: [
        AppComponent,
        LoginComponent,
        LoginLayoutComponent,
        ControlMessagesComponent,
        SpinnerOverlayComponent,
        SpinnerComponent,
        LongPress,
        HeaderComponent,
        HomePublicComponent,
        SidebarComponent,
        NavbarComponent,
        FooterComponent
    ],
    entryComponents:[
        //Producto
    ]
})
export class ComponentsModule { }
