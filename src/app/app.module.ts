import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from '@/app-routing.module';
import {AppComponent} from './app.component';
import {MainComponent} from '@modules/main/main.component';
import {LoginComponent} from '@modules/login/login.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from '@pages/profile/profile.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from '@modules/register/register.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {ToastrModule} from 'ngx-toastr';
import {ButtonComponent} from './components/button/button.component';

import {registerLocaleData} from '@angular/common';
import localeEn from '@angular/common/locales/en';
import {UserComponent} from '@modules/main/header/user/user.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {PrivacyPolicyComponent} from './modules/privacy-policy/privacy-policy.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {DropdownComponent} from './components/dropdown/dropdown.component';
import {DropdownMenuComponent} from './components/dropdown/dropdown-menu/dropdown-menu.component';
import { ImportDatasetComponent } from '@pages/import-dataset/import-dataset.component';
import { NettoyerDatasetComponent } from './pages/nettoyer-dataset/nettoyer-dataset.component';
import { SupprimerNullesComponent } from './pages/nettoyer-dataset/supprimer-nulles/supprimer-nulles.component';
import { SupprimerDoublesComponent } from './pages/nettoyer-dataset/supprimer-doubles/supprimer-doubles.component';
import { SupprimerInfiniesComponent } from './pages/nettoyer-dataset/supprimer-infinies/supprimer-infinies.component';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {BadgeModule} from 'primeng/badge';
import {ChartModule} from 'primeng/chart';
import {CardModule} from 'primeng/card';
import { BalancingComponent } from './pages/balancing/balancing.component';

registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        ButtonComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        PrivacyPolicyComponent,
        MenuItemComponent,
        DropdownComponent,
        DropdownMenuComponent,
        ImportDatasetComponent,
        NettoyerDatasetComponent,
        SupprimerNullesComponent,
        SupprimerDoublesComponent,
        SupprimerInfiniesComponent,
        BalancingComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        TableModule,
        BadgeModule,
        ChartModule,
        CardModule,
        ButtonModule,
        ChartModule,
        CardModule,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
